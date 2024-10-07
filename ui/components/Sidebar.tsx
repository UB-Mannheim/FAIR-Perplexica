'use client';

import { cn } from '@/lib/utils';
import { Search, Settings, LibraryBig, Info } from 'lucide-react';
import Link from 'next/link';
import { useSelectedLayoutSegments } from 'next/navigation';
import React, { useState, type ReactNode } from 'react';
import Layout from './Layout';
import SettingsDialog from './SettingsDialog';

const VerticalIconContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col items-center gap-y-3 w-full">{children}</div>
  );
};

const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const segments = useSelectedLayoutSegments();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const navLinks = [
    // {
    //   icon: Home,
    //   href: '/',
    //   active: segments.length === 0 || segments.includes('c'),
    //   label: 'Home',
    // },
    // {
    //   icon: Search,
    //   href: '/discover',
    //   active: segments.includes('discover'),
    //   label: 'Discover',
    // },
    {
      icon: Search,
      href: '/', 
      active: segments.length === 0 || segments.includes('c'),
      label: 'Search',
    },
    {
      icon: LibraryBig,
      href: '/library',
      active: segments.includes('library'),
      label: 'Library',
    },
    {
      icon: Info,
      href: '/about',
      active: segments.includes('about'),
      label: 'About',
    }
  ];

  return (
    <div>
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-20 lg:flex-col">
        <div className="flex flex-col justify-between flex-grow items-center gap-y-5 overflow-y-auto bg-light-secondary dark:bg-dark-secondary px-2 py-8">
          <div className="flex flex-col items-center gap-y-5">
            <VerticalIconContainer>
              {navLinks.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className={cn(
                    'relative flex flex-row items-center justify-center cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 duration-150 transition w-full py-2 rounded-lg',
                    link.active
                      ? 'text-black dark:text-white'
                      : 'text-black/70 dark:text-white/70',
                  )}
                >
                  <link.icon />
                  {link.active && (
                    <div className="absolute right-0 -mr-2 h-full w-1 rounded-l-lg bg-black dark:bg-white" />
                  )}
                </Link>
              ))}
            </VerticalIconContainer>
          </div>
          
          <div>
            <button
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
              className={cn(
                'relative flex flex-row items-center justify-center cursor-pointer hover:bg-black/10 dark:hover:bg-white/10 duration-150 transition w-full py-2 rounded-lg',
                isSettingsOpen
                  ? 'text-black dark:text-white'
                  : 'text-black/70 dark:text-white/70'
              )}
              aria-label="Settings"
            >
              <Settings />
              {isSettingsOpen && (
                <div className="absolute right-0 -mr-2 h-full w-1 rounded-l-lg bg-black dark:bg-white" />
              )}
            </button>

            <SettingsDialog
              isOpen={isSettingsOpen}
              setIsOpen={setIsSettingsOpen}
            />
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 w-full z-50 flex flex-row items-center gap-x-6 bg-light-primary dark:bg-dark-primary px-4 py-4 shadow-sm lg:hidden">
        {navLinks.map((link, i) => (
          <Link
            href={link.href}
            key={i}
            className={cn(
              'relative flex flex-col items-center space-y-1 text-center w-full',
              link.active
                ? 'text-black dark:text-white'
                : 'text-black dark:text-white/70',
            )}
          >
            {link.active && (
              <div className="absolute top-0 -mt-4 h-1 w-full rounded-b-lg bg-black dark:bg-white" />
            )}
            <link.icon />
            <p className="text-xs">{link.label}</p>
          </Link>
        ))}
      </div>

      <Layout>{children}</Layout>
    </div>
  );
};

export default Sidebar;
