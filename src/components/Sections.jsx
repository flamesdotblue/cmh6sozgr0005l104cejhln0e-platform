import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Wand2, Gauge, Palette, Quote, CheckCircle2 } from 'lucide-react';

const container = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, duration: 0.5 } },
};
const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

export default function Sections() {
  return (
    <div className="relative z-10">
      {/* Pain Points */}
      <section id="pain" className="relative py-20 sm:py-24 bg-gradient-to-b from-[#0A0A0B] via-[#0A0A0B] to-[#0b0b10]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">The copy bottleneck is real.</h2>
              <p className="mt-4 text-white/70">Teams juggle endless product updates while fighting for consistency and speed. Good copy shouldn’t be a blocker.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[{
                icon: AlertTriangle,
                title: 'Inconsistent voice',
                desc: 'Different writers, different tone. Your brand sounds different on every page.'
              }, {
                icon: Gauge,
                title: 'Slow time-to-publish',
                desc: 'Specs to copy takes days. Launches slip while copy catches up.'
              }, {
                icon: Palette,
                title: 'Off-brand & off-SEO',
                desc: 'Manually tuning keywords and guidelines leads to errors and rewrites.'
              }].map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={item} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-violet-400" />
                    <h3 className="font-medium">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/70">{desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section id="solution" className="relative py-20 sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.15),transparent_60%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container}>
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Meet Describify. Your on-brand AI copy engine.</h2>
              <p className="mt-4 text-white/70">Feed product specs, datasets, and your style guide. Get conversion-focused descriptions, feature blurbs, and SEO summaries—instantly.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{
                icon: Wand2,
                title: 'One-click drafts',
                desc: 'Generate product descriptions, release notes, and hero blurbs tailored to your audience.'
              }, {
                icon: Palette,
                title: 'Brand brain',
                desc: 'Lock tone, terminology, and style with reusable rules so every word reads on-brand.'
              }, {
                icon: Gauge,
                title: 'SEO + speed',
                desc: 'Automatic keyword suggestions and variants with readability and conversion in mind.'
              }].map(({ icon: Icon, title, desc }) => (
                <motion.div key={title} variants={item} className="rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] p-6">
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-violet-400" />
                    <h3 className="font-medium">{title}</h3>
                  </div>
                  <p className="mt-2 text-sm text-white/70">{desc}</p>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Editable prompts and rules</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> Multilingual output</li>
                    <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-400" /> API + CMS integrations</li>
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="relative py-20 sm:py-24 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.6 }}>
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Loved by product and marketing teams</h2>
              <p className="mt-4 text-white/70">Real results from teams who ship faster with stronger messaging.</p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {[{
                quote: 'We cut time-to-publish by 70%. Describify nails our tone every release.',
                name: 'Maya Patel', role: 'Head of Product Marketing, Fluxio'
              }, {
                quote: 'Our PDPs finally sound consistent across regions. SEO lifts followed.',
                name: 'Lucas Meyer', role: 'Ecommerce Director, Lumenix'
              }, {
                quote: 'The style rules are a game changer. Less editing, more launching.',
                name: 'Ana Sousa', role: 'Content Lead, NovaOps'
              }].map((t) => (
                <div key={t.name} className="rounded-xl border border-white/10 bg-white/[0.04] p-6">
                  <Quote className="h-5 w-5 text-violet-400" />
                  <p className="mt-3 text-white/90">{t.quote}</p>
                  <div className="mt-5 text-sm text-white/60">
                    <p className="font-medium text-white/80">{t.name}</p>
                    <p>{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing / CTA */}
      <section id="pricing" className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Start free. Upgrade when you scale.</h2>
            <p className="mt-4 text-white/70">Try the full experience for 14 days. No credit card needed.</p>
          </div>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-medium">Starter</h3>
              <p className="mt-2 text-white/70 text-sm">For solo creators and small teams shipping fast.</p>
              <div className="mt-6 text-3xl font-semibold">$19<span className="text-base text-white/60">/mo</span></div>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-emerald-400 rounded-full" /> 5 brand rules</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-emerald-400 rounded-full" /> 50 generations/mo</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-emerald-400 rounded-full" /> Basic SEO suggestions</li>
              </ul>
              <a href="#" className="mt-6 inline-flex items-center justify-center rounded-md border border-white/10 px-4 py-2 text-sm hover:bg-white/5">Choose Starter</a>
            </div>
            <div className="rounded-xl border border-violet-400/30 bg-gradient-to-b from-violet-500/10 to-white/[0.04] p-6 ring-1 ring-inset ring-violet-500/20">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-2 py-1 text-[10px] text-violet-200">Most Popular</div>
              <h3 className="mt-2 text-xl font-medium">Growth</h3>
              <p className="mt-2 text-white/70 text-sm">For growing teams that need consistency at scale.</p>
              <div className="mt-6 text-3xl font-semibold">$59<span className="text-base text-white/60">/mo</span></div>
              <ul className="mt-6 space-y-3 text-sm text-white/80">
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-emerald-400 rounded-full" /> Unlimited brand rules</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-emerald-400 rounded-full" /> 500 generations/mo</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-emerald-400 rounded-full" /> Advanced SEO + integrations</li>
                <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 bg-emerald-400 rounded-full" /> Priority support</li>
              </ul>
              <a href="#" className="mt-6 inline-flex items-center justify-center rounded-md bg-violet-500 hover:bg-violet-400 transition-colors px-4 py-2 text-sm">Choose Growth</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
