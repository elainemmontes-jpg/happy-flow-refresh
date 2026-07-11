import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-farm-cream text-farm-ink flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
}) {
  return (
    <section className="px-6 pt-16 pb-12 md:pt-24 md:pb-16 border-b border-farm-ink/5">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block mb-5 px-3 py-1 bg-farm-green/10 text-farm-green text-xs font-bold uppercase tracking-widest rounded">
          {eyebrow}
        </span>
        <h1 className="font-display text-5xl md:text-6xl leading-[1.05] text-farm-ink mb-6 text-balance">
          {title}
        </h1>
        {intro && <p className="text-lg text-farm-ink/70 max-w-2xl leading-relaxed">{intro}</p>}
      </div>
    </section>
  );
}
