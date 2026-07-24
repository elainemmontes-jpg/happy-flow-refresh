import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useMember } from "@/lib/mockAuth";

const nav = [
  { to: "/about", label: "About" },
  { to: "/animals", label: "Meet the Animals" },
  { to: "/programs", label: "Programs" },
  { to: "/volunteer", label: "Volunteer" },
  { to: "/events", label: "Events" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { member } = useMember();
  return (
    <nav className="sticky top-0 z-50 bg-farm-cream/90 backdrop-blur-md border-b border-farm-ink/5">
      <div className="max-w-7xl mx-auto px-6 py-4 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="flex min-w-0 items-center gap-8">
          <Link to="/" className="font-display text-2xl font-bold tracking-tight text-farm-green shrink-0">
            The Community Farm
          </Link>
          <div className="hidden lg:flex gap-6 text-[13px] font-medium uppercase tracking-wider text-farm-ink/70">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="hover:text-farm-earth transition-colors"
                activeProps={{ className: "text-farm-earth" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <Link
            to={member ? "/member" : "/login"}
            className="hidden sm:inline-flex text-xs font-semibold uppercase tracking-widest px-4 py-2 border border-farm-ink/15 rounded-full hover:bg-farm-ink hover:text-farm-cream transition-all"
          >
            {member ? "My Dashboard" : "Member Login"}
          </Link>
          <Link
            to="/donate"
            className="text-xs font-semibold uppercase tracking-widest px-5 py-2 bg-farm-earth text-farm-cream rounded-full hover:bg-farm-earth/90 transition-all"
          >
            Donate
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="lg:hidden p-2 -mr-2 text-farm-ink"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden border-t border-farm-ink/5 bg-farm-cream">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3 text-sm font-medium uppercase tracking-wider text-farm-ink/80">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-1 hover:text-farm-earth"
              >
                {item.label}
              </Link>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="py-1 hover:text-farm-earth">
              {member ? "My Dashboard" : "Member Login"}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
