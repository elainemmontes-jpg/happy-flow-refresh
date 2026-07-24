import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import { SponsorVolunteer } from "@/components/site/SponsorVolunteer";
import programHorse from "@/assets/program-horse.jpg";
import therapeuticRiding from "@/assets/therapeutic-riding.jpg";

export const Route = createFileRoute("/meet-the-horses")({
  head: () => ({
    meta: [
      { title: "Meet the Horses — The Community Farm" },
      { name: "description", content: "Get to know the herd — the horses that power our riding, therapeutic, and lease programs." },
      { property: "og:title", content: "Meet the Horses" },
      { property: "og:description", content: "Profiles of the horses at The Community Farm." },
    ],
  }),
  component: MeetTheHorses,
});

const horses = [
  { name: "Willow", breed: "Quarter Horse mare, 14", bio: "Steady and patient — our go-to partner for first-time riders and therapeutic sessions.", image: programHorse },
  { name: "Juniper", breed: "Haflinger gelding, 11", bio: "A gentle powerhouse with a soft eye. Loves trail work and confident intermediate riders.", image: therapeuticRiding },
  { name: "Cricket", breed: "Pony mare, 9", bio: "Small but mighty. Our youth riders' favorite for lessons and 4-H showmanship.", image: programHorse },
  { name: "Bear", breed: "Draft cross gelding, 17", bio: "The herd's elder statesman. Calm and unshakeable — perfect for adaptive lessons.", image: therapeuticRiding },
];

function MeetTheHorses() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The Herd"
        title={<>Meet the <span className="italic text-farm-earth">Horses</span></>}
        intro="Every horse at The Community Farm has a story. Get to know the partners behind our lessons, leases, and therapeutic programs."
      />
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {horses.map((h) => (
            <article key={h.name} className="bg-white/60 border border-farm-ink/10 rounded-2xl overflow-hidden">
              <img src={h.image} alt={h.name} loading="lazy" className="w-full aspect-[4/3] object-cover" />
              <div className="p-6 space-y-2">
                <h3 className="font-display text-2xl">{h.name}</h3>
                <p className="text-sm uppercase tracking-widest text-farm-earth font-bold">{h.breed}</p>
                <p className="text-farm-ink/80 leading-relaxed">{h.bio}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/programs/horse" className="text-farm-earth font-semibold underline underline-offset-4">
            ← Back to Horse Programs
          </Link>
        </div>
      </section>
      <SponsorVolunteer />
    </PageShell>
  );
}