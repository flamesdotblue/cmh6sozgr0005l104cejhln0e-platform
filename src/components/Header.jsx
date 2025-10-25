import React from 'react';
import { Rocket, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative">
              <Rocket className="h-6 w-6 text-violet-400 group-hover:text-violet-300 transition-colors" />
              <span className="absolute inset-0 blur-md bg-violet-500/30 rounded-full" aria-hidden />
            </div>
            <span className="font-semibold tracking-tight">Describify</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#pain" className="hover:text-white transition-colors">Pain</a>
            <a href="#solution" className="hover:text-white transition-colors">Solution</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href="#" className="text-sm text-white/70 hover:text-white">Sign in</a>
            <a href="#cta" className="inline-flex items-center rounded-md bg-violet-500 hover:bg-violet-400 transition-colors px-4 py-2 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">Start Free</a>
          </div>
          <button className="md:hidden p-2 rounded-md hover:bg-white/5" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-3 text-sm text-white/80">
              <a href="#pain" className="block">Pain</a>
              <a href="#solution" className="block">Solution</a>
              <a href="#testimonials" className="block">Testimonials</a>
              <a href="#pricing" className="block">Pricing</a>
              <div className="pt-2 flex gap-2">
                <a href="#" className="flex-1 text-center border border-white/10 rounded-md py-2">Sign in</a>
                <a href="#cta" className="flex-1 text-center bg-violet-500 rounded-md py-2">Start Free</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
