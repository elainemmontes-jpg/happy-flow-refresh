import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/tcf-waiver")({
  head: () => ({
    meta: [
      { title: "TCF Waiver — The Community Farm" },
      { name: "description", content: "Complete and submit the required participation waiver for The Community Farm programs, events, and volunteer activities." },
      { property: "og:title", content: "TCF Waiver — The Community Farm" },
      { property: "og:description", content: "Required participation waiver for The Community Farm programs and events." },
    ],
  }),
  component: TcfWaiver,
});

function TcfWaiver() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Participation Waiver"
        title={<>The Community Farm <span className="italic text-farm-earth">Waiver</span></>}
        intro="Please read carefully, complete all fields, and submit the form before participating in any farm program, event, or volunteer activity."
      />
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[1fr_320px] gap-16">
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-widest font-bold block mb-2">Participant First Name</label>
                <input required className="w-full px-4 py-3 rounded-lg border border-farm-ink/15 bg-white/60 focus:outline-none focus:ring-2 focus:ring-farm-earth" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest font-bold block mb-2">Participant Last Name</label>
                <input required className="w-full px-4 py-3 rounded-lg border border-farm-ink/15 bg-white/60 focus:outline-none focus:ring-2 focus:ring-farm-earth" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-widest font-bold block mb-2">Date of Birth</label>
                <input required type="date" className="w-full px-4 py-3 rounded-lg border border-farm-ink/15 bg-white/60 focus:outline-none focus:ring-2 focus:ring-farm-earth" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest font-bold block mb-2">Email</label>
                <input required type="email" className="w-full px-4 py-3 rounded-lg border border-farm-ink/15 bg-white/60 focus:outline-none focus:ring-2 focus:ring-farm-earth" />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest font-bold block mb-2">Phone</label>
              <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-farm-ink/15 bg-white/60 focus:outline-none focus:ring-2 focus:ring-farm-earth" />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="text-xs uppercase tracking-widest font-bold block mb-2">Emergency Contact Name</label>
                <input required className="w-full px-4 py-3 rounded-lg border border-farm-ink/15 bg-white/60 focus:outline-none focus:ring-2 focus:ring-farm-earth" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest font-bold block mb-2">Emergency Contact Phone</label>
                <input required type="tel" className="w-full px-4 py-3 rounded-lg border border-farm-ink/15 bg-white/60 focus:outline-none focus:ring-2 focus:ring-farm-earth" />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest font-bold block mb-2">If participant is under 18, parent / guardian name</label>
              <input className="w-full px-4 py-3 rounded-lg border border-farm-ink/15 bg-white/60 focus:outline-none focus:ring-2 focus:ring-farm-earth" />
            </div>

            <div className="bg-farm-stone/50 p-6 rounded-lg text-sm text-farm-ink/80 space-y-4 leading-relaxed">
              <p>
                I understand that participation in farm activities involves inherent risks, including but not limited to interaction with live animals, uneven terrain, and outdoor conditions. I voluntarily assume all risks associated with my / my child's participation.
              </p>
              <p>
                I release The Community Farm, its directors, employees, volunteers, and representatives from any and all liability, claims, demands, or causes of action arising from participation, except for gross negligence or willful misconduct.
              </p>
              <p>
                I consent to emergency medical treatment if necessary and confirm that the information provided above is accurate and complete.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <input required id="agree" type="checkbox" className="mt-1 h-4 w-4 rounded border-farm-ink/30 text-farm-earth focus:ring-farm-earth" />
              <label htmlFor="agree" className="text-sm text-farm-ink/80">
                I have read and agree to the terms above. I am at least 18 years old, or I am the parent/legal guardian of the participant named above.
              </label>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest font-bold block mb-2">Signature (type full name)</label>
              <input required className="w-full px-4 py-3 rounded-lg border border-farm-ink/15 bg-white/60 focus:outline-none focus:ring-2 focus:ring-farm-earth" />
            </div>

            <button type="submit" className="px-8 py-3 bg-farm-green text-farm-cream font-semibold rounded-lg hover:shadow-lg transition-all">
              Submit waiver
            </button>
          </form>

          <div className="space-y-8 text-farm-ink/80">
            <div>
              <h3 className="font-display text-2xl mb-2">Questions?</h3>
              <p>Contact us before signing if you have concerns about participation requirements or accessibility.</p>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-2">Email</h3>
              <p>hello@communityfarmus.com</p>
            </div>
            <div>
              <h3 className="font-display text-2xl mb-2">Phone</h3>
              <p>(555) 123-4567</p>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
