import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero } from "@/components/site/PageShell";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — The Community Farm" },
      { name: "description", content: "Get in touch with The Community Farm — general questions, program enrollment, and volunteer inquiries." },
      { property: "og:title", content: "Contact — The Community Farm" },
      { property: "og:description", content: "Reach out about programs, volunteering, or visiting the farm." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <PageShell>
      <PageHero eyebrow="Say Hello" title="Get in touch" intro="For program enrollment, volunteer inquiries, media requests, or a friendly hello." />
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs uppercase tracking-widest font-bold block mb-2">Name</label>
              <input required className="w-full px-4 py-3 rounded-lg border border-farm-ink/15 bg-white/60 focus:outline-none focus:ring-2 focus:ring-farm-earth" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest font-bold block mb-2">Email</label>
              <input required type="email" className="w-full px-4 py-3 rounded-lg border border-farm-ink/15 bg-white/60 focus:outline-none focus:ring-2 focus:ring-farm-earth" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest font-bold block mb-2">Message</label>
              <textarea required rows={5} className="w-full px-4 py-3 rounded-lg border border-farm-ink/15 bg-white/60 focus:outline-none focus:ring-2 focus:ring-farm-earth resize-y" />
            </div>
            <button type="submit" className="px-8 py-3 bg-farm-green text-farm-cream font-semibold rounded-lg">Send message</button>
          </form>
          <div className="space-y-8 text-farm-ink/80">
            <div>
              <h3 className="font-display text-2xl mb-2">Visit</h3>
              <p>The Community Farm<br />Open weekends 10 AM – 4 PM</p>
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