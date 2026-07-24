import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-farm-ink/5 bg-farm-cream">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <span className="font-display text-3xl font-bold text-farm-green block mb-6">
            The Community Farm
          </span>
          <p className="text-farm-ink/60 max-w-sm mb-8 italic">
            "A community oasis where people and animals grow stronger together."
          </p>
          <p className="text-sm text-farm-ink/60">
            A registered 501(c)(3) non-profit.
            <br />
            hello@communityfarmus.com
          </p>
        </div>
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest mb-6 text-farm-ink">Quick Links</h5>
          <ul className="space-y-3 text-sm text-farm-ink/70">
            <li><Link to="/programs" className="hover:text-farm-earth">Programs</Link></li>
            <li><Link to="/events" className="hover:text-farm-earth">Events</Link></li>
            <li><Link to="/tcf-waiver" className="hover:text-farm-earth">TCF Waiver</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-xs uppercase tracking-widest mb-6 text-farm-ink">Get Involved</h5>
          <ul className="space-y-3 text-sm text-farm-ink/70">
            <li><Link to="/volunteer" className="hover:text-farm-earth">Volunteer</Link></li>
            <li><Link to="/donate" className="hover:text-farm-earth">Donate</Link></li>
            <li><Link to="/contact" className="hover:text-farm-earth">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-farm-ink/5 flex flex-col md:flex-row justify-between gap-4">
        <p className="text-[10px] text-farm-ink/40 uppercase tracking-widest">
          © {new Date().getFullYear()} The Community Farm. All rights reserved.
        </p>
        <div className="flex gap-6 text-[10px] text-farm-ink/40 uppercase tracking-widest">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
