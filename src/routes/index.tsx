import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import heroHorse from "@/assets/hero-horse.jpg";
import programHorse from "@/assets/program-horse.jpg";
import programCritters from "@/assets/program-critters.jpg";
import programGarden from "@/assets/program-garden.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <PageShell>
      <section className="relative px-6 py-12 md:py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block mb-4 px-3 py-1 bg-farm-green/10 text-farm-green text-xs font-bold uppercase tracking-widest rounded">
              Est. 1994 • Community Owned
            </span>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mb-6 text-farm-ink text-balance">
              Where people and <span className="italic text-farm-earth">animals</span> grow stronger together.
            </h1>
            <p className="text-lg text-farm-ink/70 mb-8 max-w-md leading-relaxed">
              A community oasis for therapeutic riding, animal leasing, volunteer stewardship,
              and educational programs — rooted in responsible care of the land.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/programs"
                className="px-8 py-4 bg-farm-green text-farm-cream font-semibold rounded-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Explore Programs
              </Link>
              <Link
                to="/volunteer"
                className="px-8 py-4 border border-farm-ink/20 font-semibold rounded-lg hover:bg-farm-ink/5 transition-all"
              >
                Volunteer Today
              </Link>
            </div>
          </div>
          <div className="relative">
            <img
              src={heroHorse}
              alt="A child gently brushing a horse at sunset on the community farm"
              width={1200}
              height={1400}
              className="w-full aspect-[4/5] object-cover rounded-2xl outline outline-1 -outline-offset-1 outline-black/5"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl max-w-[220px] hidden md:block">
              <p className="text-xs font-bold uppercase tracking-widest text-farm-earth mb-1">Next Event</p>
              <p className="font-display text-lg leading-tight">Autumn Harvest Festival</p>
              <p className="text-xs text-farm-ink/60 mt-2">Oct 12 • 10:00 AM</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-farm-green text-farm-cream py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["42", "Rescued Animals"],
            ["1.2k", "Annual Riders"],
            ["150+", "Active Volunteers"],
            ["24", "Acres of Sanctuary"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className="font-display text-4xl md:text-5xl mb-1">{n}</p>
              <p className="text-xs uppercase tracking-widest opacity-70">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12">
            <div>
              <h2 className="font-display text-4xl md:text-5xl mb-2">Our Programs</h2>
              <p className="text-farm-ink/60">Hands-on healing and outdoor education for all ages.</p>
            </div>
            <Link to="/programs" className="text-sm font-bold uppercase tracking-widest border-b-2 border-farm-earth pb-1 self-start">
              View All Programs
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: programHorse, to: "/programs/horse" as const, title: "Horse Programs", copy: "Riding lessons, horsemanship, and adaptive therapeutic riding for every level." },
              { img: programCritters, to: "/programs/goat" as const, title: "Goat Programs", copy: "Care and handling sessions with our herd of Nigerian Dwarf goats." },
              { img: programGarden, to: "/programs/poultry" as const, title: "Poultry Programs", copy: "Daily chores and coop stewardship with our heritage flock of chickens and ducks." },
            ].map((p) => (
              <Link to={p.to} key={p.title} className="group">
                <div className="w-full aspect-[4/5] rounded-xl mb-6 overflow-hidden outline outline-1 -outline-offset-1 outline-black/5">
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={1000} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-[1.02]" />
                </div>
                <h3 className="font-display text-2xl mb-2">{p.title}</h3>
                <p className="text-farm-ink/70 text-sm leading-relaxed">{p.copy}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-farm-ink text-farm-cream">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl mb-12 text-balance max-w-2xl">
            Four ways to <span className="italic text-farm-earth">be part of it</span>.
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
            {[
              { to: "/programs" as const, title: "Lease an Animal", copy: "Partner with a specific horse or program animal and share in their daily care.", cta: "Learn More", hover: "hover:bg-farm-earth" },
              { to: "/volunteer" as const, title: "Volunteer", copy: "From barn chores to event planning, your time makes a real difference.", cta: "Sign Up", hover: "hover:bg-farm-green" },
              { to: "/programs" as const, title: "Run a Program", copy: "Members can host their own educational programs on the farm.", cta: "Get Started", hover: "hover:bg-farm-earth" },
              { to: "/donate" as const, title: "Donate", copy: "Support feed, veterinary care, and scholarships for therapeutic riders.", cta: "Give Today", hover: "hover:bg-farm-green" },
            ].map((b) => (
              <Link to={b.to} key={b.title} className={`p-12 border border-farm-cream/10 flex flex-col justify-between aspect-square group transition-colors duration-300 ${b.hover}`}>
                <h4 className="font-display text-3xl">{b.title}</h4>
                <div>
                  <p className="text-sm opacity-70 mb-6">{b.copy}</p>
                  <span className="text-xs font-bold uppercase tracking-widest">{b.cta} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6 mb-12 border-b border-farm-ink/10 pb-8">
            <h2 className="font-display text-4xl md:text-5xl">Upcoming at the Farm</h2>
            <Link to="/events" className="text-sm font-bold uppercase tracking-widest border-b-2 border-farm-earth pb-1 self-start">
              Full Calendar
            </Link>
          </div>
          <div className="divide-y divide-farm-ink/10">
            {[
              { date: ["OCT", "12"], title: "Autumn Harvest Festival", copy: "Cider, communal lunch, and animal meet-and-greets in the main arena.", tag: "Open to Public" },
              { date: ["OCT", "22"], title: "Intro to Horse Care Workshop", copy: "Hands-on session for new volunteers — safety, grooming, and basic behavior.", tag: "Volunteers" },
              { date: ["NOV", "04"], title: "Therapeutic Riding Open House", copy: "Meet our therapy horses and instructors. Program enrollment info available.", tag: "Families" },
            ].map((e) => (
              <div key={e.title} className="group flex flex-col md:flex-row md:items-center md:justify-between gap-6 py-8">
                <div className="flex items-center gap-8">
                  <div className="text-center shrink-0 min-w-[60px]">
                    <span className="block text-xs font-bold text-farm-earth uppercase tracking-widest">{e.date[0]}</span>
                    <span className="font-display text-3xl leading-none">{e.date[1]}</span>
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-display text-2xl mb-1">{e.title}</h4>
                    <p className="text-sm text-farm-ink/60 max-w-xl">{e.copy}</p>
                  </div>
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-farm-ink/60 border border-farm-ink/15 px-3 py-1 rounded-full self-start md:self-auto">
                  {e.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}