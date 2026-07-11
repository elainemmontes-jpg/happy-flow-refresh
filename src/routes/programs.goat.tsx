import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import programCritters from "@/assets/program-critters.jpg";

export const Route = createFileRoute("/programs/goat")({
  head: () => ({
    meta: [
      { title: "Goat Program — The Community Farm" },
      { name: "description", content: "Learn care and handling with our herd of Nigerian Dwarf goats." },
      { property: "og:title", content: "Goat Program" },
      { property: "og:description", content: "Care and handling sessions with our farm goats." },
    ],
  }),
  component: Goats,
});

function Goats() {
  return (
    <PageShell>
      <PageHero eyebrow="Program" title="Goat Program" intro="Get to know our herd of Nigerian Dwarf goats — from daily care to weekend visits." />
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <img src={programCritters} alt="Goats on the farm" loading="lazy" className="w-full rounded-2xl aspect-[4/3] object-cover mb-10" />
        <p className="text-lg text-farm-ink/80 leading-relaxed">Perfect for families and young learners. Members can sign up for care shifts, hosted classes, or drop-in weekend visits.</p>
      </section>
    </PageShell>
  );
}