import type { ReactNode } from 'react';
import { BottomNav } from './BottomNav';

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 w-full pb-20 px-4">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
