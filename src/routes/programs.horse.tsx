import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import programHorse from "@/assets/program-horse.jpg";
import therapeuticRiding from "@/assets/therapeutic-riding.jpg";

export const Route = createFileRoute("/programs/horse")({
  head: () => ({
    meta: [
      { title: "Horse Programs — The Community Farm" },
      { name: "description", content: "Riding lessons, horsemanship, and therapeutic riding at The Community Farm." },
      { property: "og:title", content: "Horse Programs" },
      { property: "og:description", content: "Group lessons, private instruction, and adaptive therapeutic riding." },
    ],
  }),
  component: Horse,
});

function Horse() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Program"
        title={<>Horse <span className="italic text-farm-earth">Programs</span></>}
        intro="From the first time in the saddle to seasoned rider — group lessons, private instruction, and adaptive therapeutic riding, rooted in horsemanship, safety, and trust."
      />
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <img src={programHorse} alt="Horse riding" loading="lazy" className="rounded-2xl w-full aspect-[4/5] object-cover" />
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl mb-2">Riding Lessons</h3>
              <ul className="space-y-2 text-farm-ink/80 list-disc pl-5">
                <li>Weekly group or private lessons</li>
                <li>All safety equipment provided</li>
                <li>Progress tracking through certified instructors</li>
                <li>Optional participation in seasonal events</li>
              </ul>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-2">Ages & Levels</h3>
              <p className="text-farm-ink/80">Riders age 6+ welcome. Beginner through advanced tracks available.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="px-6 py-16 bg-farm-stone/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="font-display text-3xl">Therapeutic Riding</h3>
            <p className="text-farm-ink/80 leading-relaxed">Adaptive equine-assisted sessions designed with families, therapists, and certified instructors — supporting physical, cognitive, and emotional growth. Each rider is paired with a horse and a small team of trained volunteers.</p>
            <p className="text-farm-ink/80 leading-relaxed">Financial assistance is available. No family is turned away for inability to pay.</p>
            <a href="/contact" className="inline-block px-6 py-3 bg-farm-green text-farm-cream font-semibold rounded-lg">Enroll or ask a question</a>
          </div>
          <img src={therapeuticRiding} alt="Therapeutic riding session" loading="lazy" className="rounded-2xl w-full aspect-[4/3] object-cover order-1 md:order-2" />
        </div>
      </section>
    </PageShell>
  );
}