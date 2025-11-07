import Link from 'next/link';
import { Github, Mail, MessageCircle, Linkedin } from 'lucide-react';
import { routes } from '@/lib/constants/routes';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Boam79 포트폴리오</h3>
            <p className="text-sm">
              Healthcare Facility × Digital Transformation Specialist
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">이메일</h4>
            <div className="space-y-2 text-sm">
              <Link 
                href={routes.contact}
                className="hover:text-white transition-colors"
              >
                ckadltmfxhrxhrxhr@gmail.com
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">소셜</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/boam79"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/jae-min-park-8b475720a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://www.threads.net/@jijijijijjijijijijijijij300?hl=ko"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Threads"
              >
                <MessageCircle size={24} />
              </a>
              <Link
                href={routes.contact}
                className="hover:text-white transition-colors"
                aria-label="이메일"
              >
                <Mail size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>© {currentYear} Boam79. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

