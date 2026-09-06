"use client";

import { useEffect, useState } from "react";

// TEMPORARY: bypassed while testing the live test card publicly.
// Restore the sessionStorage check below before the next redeploy.
const BYPASS_FOR_TESTING = true;

// Mirrors the admin login flag set in src/app/admin/page.tsx after a successful password check.
export const AdminOnly = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(BYPASS_FOR_TESTING);

  useEffect(() => {
    if (!BYPASS_FOR_TESTING) {
      setIsAdmin(sessionStorage.getItem("adminAuth") === "1");
    }
  }, []);

  if (!isAdmin) return null;
  return <>{children}</>;
};
