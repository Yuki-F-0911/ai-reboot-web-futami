const academyStandaloneRoutes = new Set([
  "/briefing",
  "/events",
  "/voices",
  "/program",
]);

export const isAcademyPath = (pathname: string): boolean => {
  if (pathname === "/academy" || pathname.startsWith("/academy/")) {
    return true;
  }

  return academyStandaloneRoutes.has(pathname);
};
