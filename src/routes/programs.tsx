import { createFileRoute, Outlet, useMatches } from "@tanstack/react-router";

export const Route = createFileRoute("/programs")({
  component: () => <Outlet />,
});

// Note: index at /programs is defined in programs.index.tsx
export { useMatches };