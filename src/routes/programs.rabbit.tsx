import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SponsorVolunteer } from "@/components/site/SponsorVolunteer";
import programCritters from "@/assets/program-critters.jpg";

export const Route = createFileRoute("/programs/rabbit")({
  head: () => ({
    meta: [
      { title: "Rabbit Program — The Community Farm" },
      { name: "description", content: "A gentle entry point for young children — care and handling of our rabbits." },
      { property: "og:title", content: "Rabbit Program" },
      { property: "og:description", content: "Daily rabbit care and handling for young learners." },
    ],
  }),
  component: Rabbits,
});

function Rabbits() {
  return (
    <PageShell>
      <PageHero eyebrow="Program" title="Rabbit Program" intro="Our rabbits are often the first hands-on introduction to animal care for young children." />
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <img src={programCritters} alt="Farm rabbit" loading="lazy" className="w-full rounded-2xl aspect-[4/3] object-cover mb-10" />
        <p className="text-lg text-farm-ink/80 leading-relaxed">Weekly small-group sessions cover safe handling, grooming, feeding, and habitat care.</p>
      </section>
      <SponsorVolunteer />
    </PageShell>
  );
}