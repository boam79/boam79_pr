import { Career } from '@/types/career';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  created_at: string;
  updated_at: string;
  homepage: string | null;
  fork: boolean;
}

export async function fetchGitHubRepos(username: string): Promise<Career[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=100`);
    
    if (!response.ok) {
      console.error('Failed to fetch GitHub repos:', response.statusText);
      return [];
    }

    const repos: GitHubRepo[] = await response.json();

    // Filter out forks and map to Career type
    return repos
      .filter(repo => !repo.fork)
      .map(repo => {
        const startDate = new Date(repo.created_at);
        const endDate = new Date(repo.updated_at);
        
        // Format date as YYYY.MM
        const startStr = `${startDate.getFullYear()}.${String(startDate.getMonth() + 1).padStart(2, '0')}`;
        
        // If updated within the last month, consider it "present", otherwise use the update date
        const oneMonthAgo = new Date();
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        
        const endStr = endDate > oneMonthAgo 
          ? 'present' 
          : `${endDate.getFullYear()}.${String(endDate.getMonth() + 1).padStart(2, '0')}`;

        return {
          id: `github-${repo.id}`,
          category: 'development',
          title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '), // Replace hyphens/underscores with spaces
          company: 'Personal Project (GitHub)',
          period: { start: startStr, end: endStr },
          position: 'Developer',
          status: 'in-progress', // You might want to derive this from last update time
          techStack: repo.language ? [repo.language] : [],
          github: repo.html_url,
          demo: repo.homepage || undefined,
          description: [
            repo.description || 'No description provided.',
            'Automatically fetched from GitHub'
          ]
        };
      });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}
