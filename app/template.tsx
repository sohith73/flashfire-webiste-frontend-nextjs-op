'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Template component that wraps all pages
 * Handles scroll restoration and ensures scroll to top on navigation
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Check if we should preserve scroll (from sessionStorage)
    const preserveScroll = sessionStorage.getItem('preserveScrollPosition');
    
    if (!preserveScroll) {
      // Force scroll to top immediately on route change
      // This runs before the page renders
      window.history.scrollRestoration = 'manual';
      
      // Scroll to top using multiple methods for maximum compatibility
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [pathname]);

  return <>{children}</>;
}
