import { createFileRoute, Link } from "@tanstack/react-router";
import {
  useMember,
  setRsvp,
  signOut,
  requestOwnerAccess,
  cancelOwnerRequest,
  devApproveOwner,
  devRevokeOwner,
} from "@/lib/mockAuth";
import { PageShell } from "@/components/site/PageShell";
import { useNavigate } from "@tanstack/react-router";
import { Calendar, MapPin, Clock, CheckCircle2, Star, LogOut, User, Users, ShieldCheck, Hourglass, Sprout } from "lucide-react";

export const Route = createFileRoute("/member/")({
  component: MemberHome,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric" });
}
function formatTime(iso: string) {
  return new Date(iso).toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
}
function formatSince(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, { month: "long", year: "numeric" });
}

function MemberHome() {
  const { member } = useMember();
  const navigate = useNavigate();
  if (!member) return null;

  const firstName = member.name.split(" ")[0];
  const { participant, owner } = member.tiers;

  function handleSignOut() {
    signOut();
    navigate({ to: "/" });
  }

  return (
    <PageShell>
      {/* Welcome header */}
      <section className="border-b border-farm-ink/10 bg-farm-stone/40">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-farm-earth mb-3">Member Dashboard</p>
            <h1 className="font-display text-4xl md:text-5xl text-farm-ink">Welcome back, {firstName}.</h1>
            <p className="text-farm-ink/70 mt-2">Here's what's happening around the farm this week.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {participant && (
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-farm-green/10 text-farm-green border border-farm-green/20">
                  <Sprout className="size-3.5" /> Program Participant
                </span>
              )}
              {owner === "approved" && (
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-farm-earth/10 text-farm-earth border border-farm-earth/20">
                  <ShieldCheck className="size-3.5" /> Program Owner
                </span>
              )}
              {owner === "pending" && (
                <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-farm-ink/5 text-farm-ink/70 border border-farm-ink/15">
                  <Hourglass className="size-3.5" /> Owner Application Pending
                </span>
              )}
            </div>
          </div>
          <button
            onClick={handleSignOut}
            className="inline-flex items-center gap-2 self-start md:self-auto text-xs font-semibold uppercase tracking-widest px-4 py-2 border border-farm-ink/15 rounded-full hover:bg-farm-ink hover:text-farm-cream transition-all"
          >
            <LogOut className="size-3.5" /> Sign out
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-8 lg:grid-cols-[1fr_320px]">
        <div className="space-y-10">
          {/* Program Owner section */}
          {owner === "approved" && (
            <div>
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="font-display text-2xl">Programs I Lead</h2>
                <span className="text-xs uppercase tracking-widest font-semibold text-farm-earth">Owner tier</span>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {member.ownedPrograms.map((p) => (
                  <div key={p.id} className="bg-farm-ink text-farm-cream rounded-2xl p-6">
                    <h3 className="font-display text-lg">{p.name}</h3>
                    <div className="mt-4 space-y-1.5 text-sm text-farm-cream/80">
                      <div className="flex items-center gap-2"><Users className="size-4" /> {p.participants} enrolled participants</div>
                      <div className="flex items-center gap-2"><Calendar className="size-4" /> Next session {formatDate(p.nextSession)} · {formatTime(p.nextSession)}</div>
                    </div>
                    <div className="mt-5 flex gap-3 text-xs uppercase tracking-widest font-semibold">
                      <Link to={p.href} className="text-farm-cream hover:underline">Manage →</Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* My programs */}
          <div>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="font-display text-2xl">Programs I'm Enrolled In</h2>
              <Link to="/programs" className="text-xs uppercase tracking-widest font-semibold text-farm-earth hover:underline">
                Browse all
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {member.programs.map((p) => (
                <div key={p.id} className="bg-white/70 border border-farm-ink/10 rounded-2xl p-6">
                  <h3 className="font-display text-lg text-farm-ink">{p.name}</h3>
                  <div className="mt-4 space-y-1.5 text-sm text-farm-ink/70">
                    <div className="flex items-center gap-2"><Calendar className="size-4 text-farm-green" /> {formatDate(p.nextSession)}</div>
                    <div className="flex items-center gap-2"><Clock className="size-4 text-farm-green" /> {formatTime(p.nextSession)}</div>
                    <div className="flex items-center gap-2"><MapPin className="size-4 text-farm-green" /> {p.location}</div>
                  </div>
                  <Link to={p.href} className="mt-5 inline-block text-xs uppercase tracking-widest font-semibold text-farm-earth hover:underline">
                    Program details →
                  </Link>
                </div>
              ))}
              {member.programs.length === 0 && (
                <p className="text-farm-ink/60 text-sm">You're not enrolled in any programs yet. <Link to="/programs" className="text-farm-earth font-semibold">Explore programs →</Link></p>
              )}
            </div>
          </div>

          {/* Upcoming events */}
          <div>
            <div className="flex items-baseline justify-between mb-4">
              <h2 className="font-display text-2xl">Upcoming Events</h2>
              <Link to="/events" className="text-xs uppercase tracking-widest font-semibold text-farm-earth hover:underline">
                Full calendar
              </Link>
            </div>
            <ul className="divide-y divide-farm-ink/10 border border-farm-ink/10 rounded-2xl bg-white/70 overflow-hidden">
              {member.events.map((e) => (
                <li key={e.id} className="p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div className="flex-1">
                    <p className="font-display text-lg text-farm-ink">{e.title}</p>
                    <p className="text-sm text-farm-ink/60 mt-1">
                      {formatDate(e.date)} · {formatTime(e.date)} · {e.location}
                    </p>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <button
                      onClick={() => setRsvp(e.id, e.rsvp === "going" ? null : "going")}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-2 rounded-full border transition-all ${
                        e.rsvp === "going"
                          ? "bg-farm-green text-farm-cream border-farm-green"
                          : "border-farm-ink/15 hover:border-farm-green"
                      }`}
                    >
                      <CheckCircle2 className="size-3.5" /> Going
                    </button>
                    <button
                      onClick={() => setRsvp(e.id, e.rsvp === "interested" ? null : "interested")}
                      className={`inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest px-3 py-2 rounded-full border transition-all ${
                        e.rsvp === "interested"
                          ? "bg-farm-earth text-farm-cream border-farm-earth"
                          : "border-farm-ink/15 hover:border-farm-earth"
                      }`}
                    >
                      <Star className="size-3.5" /> Interested
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Profile summary */}
        <aside className="space-y-6">
          <div className="bg-farm-ink text-farm-cream rounded-2xl p-6">
            <div className="flex items-center gap-3">
              <div className="size-12 rounded-full bg-farm-earth flex items-center justify-center font-display text-xl">
                {firstName[0]?.toUpperCase()}
              </div>
              <div className="min-w-0">
                <p className="font-display text-lg truncate">{member.name}</p>
                <p className="text-xs text-farm-cream/70 truncate">{member.email}</p>
              </div>
            </div>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-farm-cream/60 uppercase tracking-widest text-[10px]">Member since</dt>
                <dd className="font-medium">{formatSince(member.memberSince)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-farm-cream/60 uppercase tracking-widest text-[10px]">Tiers</dt>
                <dd className="font-medium text-right">
                  {[participant && "Participant", owner === "approved" && "Owner"].filter(Boolean).join(" + ") || "—"}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-farm-cream/60 uppercase tracking-widest text-[10px]">Programs</dt>
                <dd className="font-medium">{member.programs.length} active</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-farm-cream/60 uppercase tracking-widest text-[10px]">RSVPs</dt>
                <dd className="font-medium">{member.events.filter((e) => e.rsvp).length}</dd>
              </div>
            </dl>
          </div>

          {/* Owner tier card */}
          <div className="bg-white/70 border border-farm-ink/10 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="size-4 text-farm-earth" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-farm-earth">Program Owner tier</p>
            </div>
            {owner === "none" && (
              <>
                <p className="text-sm text-farm-ink/70 mb-4">
                  Lead your own program on the farm. Owner access requires approval from the farm office and a signed facilitator agreement.
                </p>
                <button
                  onClick={requestOwnerAccess}
                  className="w-full text-xs font-semibold uppercase tracking-widest px-4 py-2.5 bg-farm-earth text-farm-cream rounded-full hover:bg-farm-earth/90 transition-all"
                >
                  Request Owner Access
                </button>
              </>
            )}
            {owner === "pending" && (
              <>
                <p className="text-sm text-farm-ink/70 mb-4">
                  Your application is with the farm office. We'll reach out within 5–7 days to schedule an intake conversation.
                </p>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={cancelOwnerRequest}
                    className="w-full text-xs font-semibold uppercase tracking-widest px-4 py-2.5 border border-farm-ink/15 rounded-full hover:bg-farm-ink hover:text-farm-cream transition-all"
                  >
                    Withdraw Application
                  </button>
                  <button
                    onClick={devApproveOwner}
                    className="w-full text-[10px] font-semibold uppercase tracking-widest px-4 py-2 text-farm-ink/50 hover:text-farm-earth"
                    title="Preview only — simulates approval by the farm office"
                  >
                    (Preview: simulate approval)
                  </button>
                </div>
              </>
            )}
            {owner === "approved" && (
              <>
                <p className="text-sm text-farm-ink/70 mb-4">
                  You're approved to lead programs on the farm. You still have full Participant access for programs you enroll in.
                </p>
                <button
                  onClick={devRevokeOwner}
                  className="w-full text-[10px] font-semibold uppercase tracking-widest px-4 py-2 text-farm-ink/50 hover:text-farm-earth"
                  title="Preview only — resets your owner status"
                >
                  (Preview: reset owner status)
                </button>
              </>
            )}
          </div>

          <div className="bg-white/70 border border-farm-ink/10 rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-farm-earth mb-3">Quick actions</p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/tcf-waiver" className="hover:text-farm-earth">Sign the TCF Waiver</Link></li>
              <li><Link to="/volunteer" className="hover:text-farm-earth">Log volunteer hours</Link></li>
              <li><Link to="/donate" className="hover:text-farm-earth">Make a donation</Link></li>
              <li><Link to="/contact" className="hover:text-farm-earth">Contact the farm office</Link></li>
            </ul>
          </div>

          <div className="text-xs text-farm-ink/50 flex items-center gap-2">
            <User className="size-3.5" /> Preview mode — data is stored locally on this device.
          </div>
        </aside>
      </section>
    </PageShell>
  );
}