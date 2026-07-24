import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/volunteer-signup")({
  head: () => ({
    meta: [
      { title: "Volunteer Sign Up — The Community Farm" },
      { name: "description", content: "Join our volunteer email list and hear first about upcoming opportunities on the farm." },
      { property: "og:title", content: "Volunteer Sign Up" },
      { property: "og:description", content: "Sign up to hear about volunteer opportunities at The Community Farm." },
    ],
  }),
  component: VolunteerSignup,
});

const interests = ["Barn & Grounds", "Therapeutic Riding", "Events Crew", "Program Assistant", "Youth Mentor"];

function VolunteerSignup() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell>
      <PageHero
        eyebrow="Get Involved"
        title={<>Join the <span className="italic text-farm-earth">volunteer list</span></>}
        intro="Add your name and we'll email you when new volunteer opportunities open up — from weekend barn crews to seasonal events."
      />
      <section className="px-6 py-16">
        <div className="max-w-2xl mx-auto">
          {submitted ? (
            <div className="p-8 bg-white/60 border border-farm-ink/10 rounded-2xl text-center space-y-3">
              <h2 className="font-display text-2xl">You're on the list.</h2>
              <p className="text-farm-ink/80">We'll reach out as soon as opportunities matching your interests come up.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="space-y-6 p-8 bg-white/60 border border-farm-ink/10 rounded-2xl"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block text-sm">
                  <span className="font-semibold">First name</span>
                  <input required type="text" className="mt-1 w-full px-3 py-2 border border-farm-ink/20 rounded-md bg-white" />
                </label>
                <label className="block text-sm">
                  <span className="font-semibold">Last name</span>
                  <input required type="text" className="mt-1 w-full px-3 py-2 border border-farm-ink/20 rounded-md bg-white" />
                </label>
              </div>
              <label className="block text-sm">
                <span className="font-semibold">Email address</span>
                <input required type="email" className="mt-1 w-full px-3 py-2 border border-farm-ink/20 rounded-md bg-white" />
              </label>
              <label className="block text-sm">
                <span className="font-semibold">Phone (optional)</span>
                <input type="tel" className="mt-1 w-full px-3 py-2 border border-farm-ink/20 rounded-md bg-white" />
              </label>
              <fieldset className="space-y-2">
                <legend className="text-sm font-semibold">Areas of interest</legend>
                <div className="grid sm:grid-cols-2 gap-2">
                  {interests.map((i) => (
                    <label key={i} className="flex items-center gap-2 text-sm">
                      <input type="checkbox" name="interest" value={i} className="rounded border-farm-ink/30" />
                      {i}
                    </label>
                  ))}
                </div>
              </fieldset>
              <label className="block text-sm">
                <span className="font-semibold">Anything else we should know? (optional)</span>
                <textarea rows={3} className="mt-1 w-full px-3 py-2 border border-farm-ink/20 rounded-md bg-white" />
              </label>
              <button type="submit" className="w-full px-6 py-3 bg-farm-earth text-farm-cream font-semibold rounded-lg">
                Add me to the list
              </button>
              <p className="text-xs text-farm-ink/60 text-center">
                We only email about volunteer opportunities. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </section>
    </PageShell>
  );
}