import { Link } from "@tanstack/react-router";

export function SponsorVolunteer() {
  return (
    <section className="px-6 py-16 bg-farm-cream border-t border-farm-ink/10">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <p className="text-xs uppercase tracking-widest font-bold text-farm-earth">Get Involved</p>
        <h2 className="font-display text-3xl md:text-4xl">Sponsor or Volunteer</h2>
        <p className="text-farm-ink/80 max-w-2xl mx-auto leading-relaxed">
          Our programs run on the generosity of sponsors and the hands of volunteers.
          Support an animal, fund a scholarship, or join a weekend crew — every contribution keeps the farm thriving.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-2">
          <Link
            to="/volunteer-signup"
            className="px-6 py-3 bg-farm-green text-farm-cream font-semibold rounded-lg"
          >
            Volunteer Sign Up
          </Link>
          <Link
            to="/donate"
            className="px-6 py-3 border border-farm-ink/20 text-farm-ink font-semibold rounded-lg"
          >
            Become a Sponsor
          </Link>
        </div>
      </div>
    </section>
  );
}