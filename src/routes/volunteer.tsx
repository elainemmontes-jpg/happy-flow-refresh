import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import volunteerHands from "@/assets/volunteer-hands.jpg";

export const Route = createFileRoute("/volunteer")({
  head: () => ({
    meta: [
      { title: "Volunteer — The Community Farm" },
      { name: "description", content: "Join a weekend crew or ongoing role. The farm runs on the strength of our volunteers." },
      { property: "og:title", content: "Volunteer at The Community Farm" },
      { property: "og:description", content: "Ways to help — from barn chores to event support." },
    ],
  }),
  component: Volunteer,
});

const opps = [
  { title: "Barn & Grounds", copy: "Mucking, grooming, feeding — the daily rhythm of the farm.", commitment: "Weekly, 2-3 hrs" },
  { title: "Therapeutic Sidewalker", copy: "Support riders during therapeutic sessions. Training provided.", commitment: "Weekly, 90 min" },
  { title: "Events Crew", copy: "Help run seasonal festivals, tours, and open houses.", commitment: "Ad-hoc" },
  { title: "Program Assistant", copy: "Assist an instructor with lessons and small-animal programs.", commitment: "Weekly, flexible" },
];

function Volunteer() {
  return (
    <PageShell>
      <PageHero eyebrow="Get Involved" title={<>Join the crew that <span className="italic text-farm-earth">keeps it running</span>.</>} intro="Our farm depends on volunteers of every age and background. Pick a role that fits your schedule — training and mentorship provided." />
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-16 items-start">
          <div className="grid sm:grid-cols-2 gap-4">
            {opps.map((o) => (
              <div key={o.title} className="p-6 border border-farm-ink/10 rounded-xl bg-white/60">
                <h3 className="font-display text-2xl mb-2">{o.title}</h3>
                <p className="text-sm text-farm-ink/70 mb-4">{o.copy}</p>
                <p className="text-xs uppercase tracking-widest font-bold text-farm-earth">{o.commitment}</p>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            <img src={volunteerHands} alt="Hands holding soil" loading="lazy" className="w-full aspect-[4/3] object-cover rounded-2xl" />
            <a href="/contact" className="inline-block w-full text-center px-6 py-4 bg-farm-earth text-farm-cream font-semibold rounded-lg">Apply to Volunteer</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}