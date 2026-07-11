import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import therapeuticRiding from "@/assets/therapeutic-riding.jpg";

export const Route = createFileRoute("/programs/therapeutic-riding")({
  head: () => ({
    meta: [
      { title: "Therapeutic Riding Program — The Community Farm" },
      { name: "description", content: "Adaptive equine-assisted sessions supporting physical, cognitive, and emotional growth." },
      { property: "og:title", content: "Therapeutic Riding Program" },
      { property: "og:description", content: "Adaptive horse-based therapy at The Community Farm." },
    ],
  }),
  component: TherapeuticRiding,
});

function TherapeuticRiding() {
  return (
    <PageShell>
      <PageHero eyebrow="Program" title={<>Therapeutic <span className="italic text-farm-earth">Riding</span></>} intro="Adaptive equine-assisted sessions designed with families, therapists, and certified instructors — supporting physical, cognitive, and emotional growth." />
      <section className="px-6 py-16">
        <img src={therapeuticRiding} alt="Therapeutic riding session" loading="lazy" className="w-full max-w-6xl mx-auto rounded-2xl aspect-[16/9] object-cover" />
        <div className="max-w-3xl mx-auto mt-16 space-y-6 text-lg text-farm-ink/80 leading-relaxed">
          <p>Our therapeutic riding program pairs each rider with a horse and a small team of trained volunteers. Sessions are gentle, structured, and designed around individual goals.</p>
          <p>Financial assistance is available. No family is turned away for inability to pay.</p>
        </div>
      </section>
    </PageShell>
  );
}