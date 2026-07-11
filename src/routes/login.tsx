import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Member Login — The Community Farm" },
      { name: "description", content: "Program members sign in to access dashboard, lease details, billing, and resources." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Login,
});

function Login() {
  return (
    <PageShell>
      <section className="px-6 py-24">
        <div className="max-w-md mx-auto">
          <h1 className="font-display text-4xl mb-2">Member Login</h1>
          <p className="text-farm-ink/70 mb-8">Access your dashboard, lease details, and billing.</p>
          <form className="space-y-4 bg-white/60 border border-farm-ink/10 rounded-2xl p-8" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="text-xs uppercase tracking-widest font-bold block mb-2">Email</label>
              <input type="email" className="w-full px-4 py-3 rounded-lg border border-farm-ink/15" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest font-bold block mb-2">Password</label>
              <input type="password" className="w-full px-4 py-3 rounded-lg border border-farm-ink/15" />
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-farm-green text-farm-cream font-semibold rounded-lg">Sign In</button>
            <p className="text-sm text-farm-ink/60 text-center pt-2">
              New here? <Link to="/contact" className="text-farm-earth font-semibold">Ask about membership</Link>
            </p>
          </form>
          <p className="mt-6 text-xs text-farm-ink/50 text-center">Accounts &amp; member dashboards are coming online — connect Lovable Cloud to enable sign-in.</p>
        </div>
      </section>
    </PageShell>
  );
}