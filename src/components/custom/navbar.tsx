'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Dumbbell, Apple, User } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { getTranslation } from '@/lib/i18n';

export default function Navbar() {
  const pathname = usePathname();
  const { language } = useLanguage();
  const t = (key: string) => getTranslation(language, key);

  const links = [
    { href: '/', icon: Home, label: t('home') },
    { href: '/treinos', icon: Dumbbell, label: t('workouts') },
    { href: '/nutricao', icon: Apple, label: t('nutrition') },
    { href: '/perfil', icon: User, label: t('profile') }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-black border-t border-gray-800 z-50 md:top-0 md:bottom-auto md:border-t-0 md:border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-around md:justify-center md:gap-8 py-3">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col md:flex-row items-center gap-1 md:gap-2 px-4 py-2 rounded-lg transition-all ${
                  isActive
                    ? 'text-[#00FF88] bg-[#00FF88]/10 border border-[#00FF88]/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-900'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs md:text-sm font-medium">{link.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
