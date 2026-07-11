import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/donate")({
  head: () => ({
    meta: [
      { title: "Donate — The Community Farm" },
      { name: "description", content: "Your gift funds feed, veterinary care, and scholarships for therapeutic riders." },
      { property: "og:title", content: "Support The Community Farm" },
      { property: "og:description", content: "Give today and help keep our programs accessible to everyone." },
    ],
  }),
  component: Donate,
});

const tiers = [
  { amount: "$25", covers: "One week of hay for a rabbit or goat" },
  { amount: "$100", covers: "A month of grain and bedding for one horse" },
  { amount: "$500", covers: "A full scholarship for a therapeutic riding rider" },
  { amount: "$1,000", covers: "Annual vet care for one program animal" },
];

function Donate() {
  return (
    <PageShell>
      <PageHero eyebrow="Support" title={<>Give what keeps the <span className="italic text-farm-earth">farm running</span>.</>} intro="Every gift funds daily animal care and keeps our therapeutic and educational programs accessible — regardless of family income." />
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-4">
          {tiers.map((t) => (
            <div key={t.amount} className="p-8 border border-farm-ink/10 rounded-xl bg-white/60 flex items-baseline justify-between gap-6">
              <span className="font-display text-4xl text-farm-earth">{t.amount}</span>
              <span className="text-sm text-farm-ink/70 text-right">{t.covers}</span>
            </div>
          ))}
        </div>
        <div className="max-w-md mx-auto mt-12 text-center">
          <a href="#" className="inline-block px-10 py-4 bg-farm-earth text-farm-cream font-semibold rounded-lg text-lg">Donate Now</a>
          <p className="text-xs text-farm-ink/60 mt-4">The Community Farm is a registered 501(c)(3). All donations are tax-deductible.</p>
        </div>
      </section>
    </PageShell>
  );
}