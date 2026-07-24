import { createFileRoute, Outlet, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import { useMember } from "@/lib/mockAuth";
import { PageShell } from "@/components/site/PageShell";

export const Route = createFileRoute("/member")({
  head: () => ({
    meta: [
      { title: "Member Dashboard — The Community Farm" },
      { name: "description", content: "Your programs, RSVPs, and profile at The Community Farm." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: MemberLayout,
});

function MemberLayout() {
  const { member, hydrated } = useMember();
  const navigate = useNavigate();

  useEffect(() => {
    if (hydrated && !member) navigate({ to: "/login", replace: true });
  }, [hydrated, member, navigate]);

  if (!hydrated || !member) {
    return (
      <PageShell>
        <div className="px-6 py-24 text-center text-farm-ink/50 text-sm uppercase tracking-widest">Loading…</div>
      </PageShell>
    );
  }

  return <Outlet />;
}