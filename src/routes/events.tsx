import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events Calendar — The Community Farm" },
      { name: "description", content: "Upcoming festivals, workshops, and community events at The Community Farm." },
      { property: "og:title", content: "Events at The Community Farm" },
      { property: "og:description", content: "Seasonal festivals, workshops, and open houses." },
    ],
  }),
  component: Events,
});

const events = [
  { date: ["OCT", "12"], title: "Autumn Harvest Festival", copy: "Cider, communal lunch, and animal meet-and-greets.", tag: "Open to Public", time: "10 AM — 3 PM" },
  { date: ["OCT", "22"], title: "Intro to Horse Care Workshop", copy: "Hands-on session for new volunteers.", tag: "Volunteers", time: "9 AM — 12 PM" },
  { date: ["NOV", "04"], title: "Therapeutic Riding Open House", copy: "Meet the therapy team, tour the arena.", tag: "Families", time: "1 PM — 4 PM" },
  { date: ["NOV", "18"], title: "Full Moon Trail Ride", copy: "Guided evening ride for intermediate members.", tag: "Members", time: "6 PM — 8 PM" },
  { date: ["DEC", "07"], title: "Winter Barn Warming", copy: "Annual member and donor celebration.", tag: "Members & Donors", time: "5 PM — 9 PM" },
];

function Events() {
  return (
    <PageShell>
      <PageHero eyebrow="Calendar" title={<>What's happening <span className="italic text-farm-earth">on the farm</span>.</>} intro="From seasonal festivals to hands-on workshops, our events are open to families, volunteers, and members alike." />
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto divide-y divide-farm-ink/10 border-y border-farm-ink/10">
          {events.map((e) => (
            <article key={e.title} className="grid md:grid-cols-[100px_1fr_auto] gap-6 md:gap-10 items-center py-8">
              <div className="text-center md:text-left">
                <span className="block text-xs font-bold text-farm-earth uppercase tracking-widest">{e.date[0]}</span>
                <span className="font-display text-4xl leading-none">{e.date[1]}</span>
              </div>
              <div className="min-w-0">
                <h3 className="font-display text-2xl mb-1">{e.title}</h3>
                <p className="text-sm text-farm-ink/70">{e.copy}</p>
                <p className="text-xs text-farm-ink/50 mt-2">{e.time}</p>
              </div>
              <span className="text-xs font-semibold uppercase tracking-widest text-farm-ink/60 border border-farm-ink/15 px-3 py-1 rounded-full justify-self-start md:justify-self-end">{e.tag}</span>
            </article>
          ))}
        </div>
      </section>
    </PageShell>
  );
}