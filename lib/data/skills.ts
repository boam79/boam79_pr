import { SkillCategory, Certification } from '@/types/skill';

export const skillCategories: SkillCategory[] = [
  {
    category: "Development",
    skills: [
      { name: "Next.js", level: 4, yearsOfExperience: 1 },
      { name: "TypeScript", level: 4, yearsOfExperience: 1 },
      { name: "Python", level: 3, yearsOfExperience: 2 },
      { name: "Data Analysis", level: 3 },
      { name: "ERP Systems", level: 4, yearsOfExperience: 2 },
      { name: "Network Infrastructure", level: 4, yearsOfExperience: 5 }
    ]
  },
  {
    category: "Facility Management",
    skills: [
      { name: "전기설비 관리", level: 5, yearsOfExperience: 21 },
      { name: "기계설비 관리", level: 5, yearsOfExperience: 21 },
      { name: "의료가스 관리", level: 5, yearsOfExperience: 5 },
      { name: "소방안전 관리", level: 5, yearsOfExperience: 15 },
      { name: "프로젝트 관리(PM)", level: 4, yearsOfExperience: 10 }
    ]
  },
  {
    category: "AI & Data",
    skills: [
      { name: "Machine Learning", level: 2 },
      { name: "Data Visualization", level: 3 },
      { name: "Healthcare Analytics", level: 3 }
    ]
  }
];

export const certifications: Certification[] = [
  { name: "2급 방화관리자", issuer: "한국소방안전협회", date: "2007.10", category: "safety" },
  { name: "가스사용시설 안전관리자", issuer: "한국가스안전공사", date: "2008.05", category: "safety" },
  { name: "전자기기기능사 2급", issuer: "한국산업인력공단", date: "1997.08", category: "technical" },
  { name: "굴삭기운전기능사", issuer: "한국산업인력공단", date: "2015.12", category: "technical" },
  { name: "지게차운전기능사", issuer: "한국산업인력공단", date: "2016.01", category: "technical" },
  { name: "로더운전기능사", issuer: "한국산업인력공단", date: "2016.03", category: "technical" },
  { name: "자동차운전면허", issuer: "서울지방경찰청", date: "2001.09", category: "driving" }
];

