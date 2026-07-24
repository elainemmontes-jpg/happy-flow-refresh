import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import programPoultry from "@/assets/program-poultry.jpg";

export const Route = createFileRoute("/programs/poultry")({
  head: () => ({
    meta: [
      { title: "Poultry Program — The Community Farm" },
      { name: "description", content: "Care for our heritage flock of chickens and ducks — daily chores, egg collection, and coop management." },
      { property: "og:title", content: "Poultry Program" },
      { property: "og:description", content: "Hands-on care for our heritage flock of chickens and ducks." },
    ],
  }),
  component: Poultry,
});

function Poultry() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Program"
        title="Poultry Program"
        intro="Meet our heritage flock — a mix of laying hens, roosters, and ducks that anchor daily life on the farm."
      />
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <img src={programPoultry} alt="Heritage chickens on the farm" loading="lazy" className="w-full rounded-2xl aspect-[4/3] object-cover mb-10" />
        <div className="space-y-6 text-lg text-farm-ink/80 leading-relaxed">
          <p>Members learn safe handling, feeding routines, coop cleaning, and egg collection. Sessions run year-round with morning and evening chore shifts available.</p>
          <p>A great fit for families, homeschool groups, and anyone curious about small-flock stewardship.</p>
        </div>
      </section>
    </PageShell>
  );
}