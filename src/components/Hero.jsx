import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative h-[92vh] min-h-[640px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-[#0A0A0B]/40 to-[#0A0A0B]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-violet-400" />
            <span>AI-native product descriptions that convert</span>
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">Turn specs into stunning product copy in seconds.</h1>
          <p className="mt-5 text-white/70 text-lg">Describify helps SaaS and eCommerce teams generate on-brand descriptions, feature highlights, and SEO-ready snippets—powered by your data and style guide.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a id="cta" href="#pricing" className="inline-flex items-center justify-center rounded-md bg-violet-500 hover:bg-violet-400 transition-colors px-5 py-3 text-sm font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
              Start free trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#solution" className="inline-flex items-center justify-center rounded-md border border-white/10 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/5">See how it works</a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-xs text-white/60">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-400" />
              <span>Enterprise-grade security</span>
            </div>
            <span>•</span>
            <span>No credit card required</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
