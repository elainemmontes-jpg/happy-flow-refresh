import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import programHorse from "@/assets/program-horse.jpg";
import programCritters from "@/assets/program-critters.jpg";

export const Route = createFileRoute("/animals")({
  head: () => ({
    meta: [
      { title: "Meet the Animals — The Community Farm" },
      { name: "description", content: "Meet the horses, goats, and rabbits who live and work at The Community Farm." },
      { property: "og:title", content: "Meet the Animals" },
      { property: "og:description", content: "The residents of our community farm — horses, goats, and rabbits." },
    ],
  }),
  component: Animals,
});

const residents = [
  { name: "Barnaby", role: "Therapeutic Riding Lead", years: "14 years on the farm", img: programHorse },
  { name: "Willow", role: "Beginner Lessons", years: "9 years on the farm", img: programHorse },
  { name: "Pippin & Clover", role: "Goat Program", years: "3 years on the farm", img: programCritters },
  { name: "Snow", role: "Education Rabbit", years: "5 years on the farm", img: programCritters },
];

function Animals() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Herd"
        title={<>Meet the <span className="italic text-farm-earth">residents</span>.</>}
        intro="Each animal on the farm has a name, a story, and a role. Say hello to the herd."
      />
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {residents.map((a) => (
            <div key={a.name} className="group">
              <div className="w-full aspect-square rounded-xl overflow-hidden mb-5 outline outline-1 -outline-offset-1 outline-black/5">
                <img src={a.img} alt={a.name} loading="lazy" width={800} height={800} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
              </div>
              <h3 className="font-display text-2xl">{a.name}</h3>
              <p className="text-sm text-farm-earth uppercase tracking-widest font-semibold mt-1">{a.role}</p>
              <p className="text-sm text-farm-ink/60 mt-1">{a.years}</p>
            </div>
          ))}
        </div>
      </section>
    </PageShell>
  );
}