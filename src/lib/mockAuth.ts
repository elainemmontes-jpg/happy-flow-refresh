import { useEffect, useState } from "react";

export type MockMember = {
  email: string;
  name: string;
  memberSince: string; // ISO date
  programs: Array<{
    id: string;
    name: string;
    href: string;
    nextSession: string; // ISO datetime
    location: string;
  }>;
  events: Array<{
    id: string;
    title: string;
    date: string; // ISO datetime
    location: string;
    rsvp: "going" | "interested" | null;
  }>;
};

const KEY = "tcf.member.v1";

function seed(email: string): MockMember {
  const name = email.split("@")[0].replace(/[._-]+/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()) || "Farm Friend";
  const inDays = (d: number, h = 10) => {
    const dt = new Date();
    dt.setDate(dt.getDate() + d);
    dt.setHours(h, 0, 0, 0);
    return dt.toISOString();
  };
  return {
    email,
    name,
    memberSince: new Date(Date.now() - 1000 * 60 * 60 * 24 * 217).toISOString(),
    programs: [
      { id: "hr-101", name: "Horse Riding — Intermediate", href: "/programs/horse", nextSession: inDays(2, 9), location: "Main Arena" },
      { id: "gt-201", name: "Goat Handling Workshop", href: "/programs/goat", nextSession: inDays(6, 14), location: "Goat Barn" },
    ],
    events: [
      { id: "evt-fall-fest", title: "Fall Harvest Festival", date: inDays(9, 11), location: "The Meadow", rsvp: null },
      { id: "evt-volunteer-day", title: "Community Volunteer Day", date: inDays(16, 8), location: "Farm Entrance", rsvp: null },
      { id: "evt-lantern", title: "Lantern Walk & Bonfire", date: inDays(23, 18), location: "West Pasture", rsvp: null },
    ],
  };
}

export function getMember(): MockMember | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as MockMember) : null;
  } catch {
    return null;
  }
}

function write(m: MockMember | null) {
  if (typeof window === "undefined") return;
  if (m) window.localStorage.setItem(KEY, JSON.stringify(m));
  else window.localStorage.removeItem(KEY);
  window.dispatchEvent(new Event("tcf-auth-change"));
}

export function signIn(email: string): MockMember {
  const existing = getMember();
  const m = existing && existing.email === email ? existing : seed(email);
  write(m);
  return m;
}

export function signOut() {
  write(null);
}

export function updateMember(patch: Partial<MockMember>) {
  const m = getMember();
  if (!m) return;
  write({ ...m, ...patch });
}

export function setRsvp(eventId: string, rsvp: "going" | "interested" | null) {
  const m = getMember();
  if (!m) return;
  write({ ...m, events: m.events.map((e) => (e.id === eventId ? { ...e, rsvp } : e)) });
}

export function useMember() {
  const [member, setMember] = useState<MockMember | null>(null);
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setMember(getMember());
    setHydrated(true);
    const sync = () => setMember(getMember());
    window.addEventListener("tcf-auth-change", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("tcf-auth-change", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);
  return { member, hydrated };
}