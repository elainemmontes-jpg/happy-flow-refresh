import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import programHorse from "@/assets/program-horse.jpg";
import programCritters from "@/assets/program-critters.jpg";
import therapeuticRiding from "@/assets/therapeutic-riding.jpg";

export const Route = createFileRoute("/programs/")({
  head: () => ({
    meta: [
      { title: "Farm Programs — The Community Farm" },
      { name: "description", content: "Horse riding, therapeutic riding, goat, and rabbit programs at The Community Farm." },
      { property: "og:title", content: "Farm Programs" },
      { property: "og:description", content: "Explore our horse, therapeutic riding, goat, and rabbit programs." },
    ],
  }),
  component: ProgramsIndex,
});

const programs = [
  { to: "/programs/horse-riding" as const, title: "Horse Riding Program", img: programHorse, copy: "Group and private lessons for riders of every level, taught by certified instructors." },
  { to: "/programs/therapeutic-riding" as const, title: "Therapeutic Riding Program", img: therapeuticRiding, copy: "Adaptive equine-assisted sessions supporting physical, cognitive, and emotional growth." },
  { to: "/programs/goat" as const, title: "Goat Program", img: programCritters, copy: "Care, handling, and learning with our herd of Nigerian Dwarf goats." },
  { to: "/programs/rabbit" as const, title: "Rabbit Program", img: programCritters, copy: "A gentle entry point for young children — daily care and handling of our rabbits." },
];

function ProgramsIndex() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Programs"
        title={<>Four programs, <span className="italic text-farm-earth">one working farm</span>.</>}
        intro="Members can join a program, run their own, or lease an animal to deepen their connection to the farm."
      />
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
          {programs.map((p) => (
            <Link to={p.to} key={p.title} className="group block">
              <div className="aspect-[16/10] rounded-2xl overflow-hidden mb-5 outline outline-1 -outline-offset-1 outline-black/5">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500" />
              </div>
              <h3 className="font-display text-3xl mb-2">{p.title}</h3>
              <p className="text-farm-ink/70">{p.copy}</p>
              <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-farm-earth border-b-2 border-farm-earth pb-1">
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  );
}