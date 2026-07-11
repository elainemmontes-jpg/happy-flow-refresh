import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import programHorse from "@/assets/program-horse.jpg";

export const Route = createFileRoute("/programs/horse-riding")({
  head: () => ({
    meta: [
      { title: "Horse Riding Program — The Community Farm" },
      { name: "description", content: "Group and private horse riding lessons for beginners through advanced riders." },
      { property: "og:title", content: "Horse Riding Program" },
      { property: "og:description", content: "Riding lessons and horsemanship at The Community Farm." },
    ],
  }),
  component: HorseRiding,
});

function HorseRiding() {
  return (
    <PageShell>
      <PageHero eyebrow="Program" title="Horse Riding Program" intro="From the first time in the saddle to seasoned rider — instruction rooted in horsemanship, safety, and trust." />
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <img src={programHorse} alt="Horse riding" loading="lazy" className="rounded-2xl w-full aspect-[4/5] object-cover" />
          <div className="space-y-8">
            <div><h3 className="font-display text-2xl mb-2">What's included</h3><ul className="space-y-2 text-farm-ink/80 list-disc pl-5"><li>Weekly group or private lessons</li><li>All safety equipment provided</li><li>Progress tracking through certified instructors</li><li>Optional participation in seasonal events</li></ul></div>
            <div><h3 className="font-display text-2xl mb-2">Ages & Levels</h3><p className="text-farm-ink/80">Riders age 6+ welcome. Beginner through advanced tracks available.</p></div>
            <a href="/contact" className="inline-block px-6 py-3 bg-farm-green text-farm-cream font-semibold rounded-lg">Enroll or ask a question</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}