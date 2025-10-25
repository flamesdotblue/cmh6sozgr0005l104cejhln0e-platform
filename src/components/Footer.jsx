import React from 'react';
import { Github, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Describify Inc. All rights reserved.</p>
            <div className="mt-2 flex gap-4 text-xs text-white/60">
              <a href="#" className="hover:text-white">Privacy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Security</a>
            </div>
          </div>
          <div className="flex items-center gap-3 text-white/70">
            <a href="#" aria-label="Twitter" className="p-2 rounded-md hover:bg-white/5"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="GitHub" className="p-2 rounded-md hover:bg-white/5"><Github className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
