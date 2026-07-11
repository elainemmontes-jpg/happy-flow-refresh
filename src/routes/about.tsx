import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";
import volunteerHands from "@/assets/volunteer-hands.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Community Farm" },
      { name: "description", content: "Our story, mission, and the people behind a community-owned farm dedicated to the bond between people and animals." },
      { property: "og:title", content: "About — The Community Farm" },
      { property: "og:description", content: "A community-owned non-profit farm rooted in stewardship, education, and therapeutic connection." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Story"
        title={<>A place where <span className="italic text-farm-earth">every hand</span> matters.</>}
        intro="The Community Farm has served as a working sanctuary for over three decades — a place where members care for animals they lease, volunteers keep the barns running, and families discover the quiet power of hands-on stewardship."
      />
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <img src={volunteerHands} alt="Hands holding soil and a seedling" loading="lazy" width={1200} height={900} className="w-full aspect-[4/3] object-cover rounded-2xl" />
          <div className="space-y-6 text-farm-ink/80 leading-relaxed">
            <h2 className="font-display text-3xl md:text-4xl text-farm-ink">Our mission</h2>
            <p>We cultivate meaningful engagement between people, animals, and the land — through therapeutic programs, member leasing, education, and volunteer stewardship.</p>
            <p>Every dollar donated and every hour volunteered keeps our programs accessible to families who need them most.</p>
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-farm-ink/10">
              <div><p className="font-display text-3xl text-farm-earth">30+</p><p className="text-xs uppercase tracking-widest text-farm-ink/60 mt-1">Years serving</p></div>
              <div><p className="font-display text-3xl text-farm-earth">4</p><p className="text-xs uppercase tracking-widest text-farm-ink/60 mt-1">Programs</p></div>
              <div><p className="font-display text-3xl text-farm-earth">501(c)(3)</p><p className="text-xs uppercase tracking-widest text-farm-ink/60 mt-1">Non-profit</p></div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}