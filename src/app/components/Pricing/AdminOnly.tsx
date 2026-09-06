"use client";

import { useEffect, useState } from "react";

// Mirrors the admin login flag set in src/app/admin/page.tsx after a successful password check.
export const AdminOnly = ({ children }: { children: React.ReactNode }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    setIsAdmin(sessionStorage.getItem("adminAuth") === "1");
  }, []);

  if (!isAdmin) return null;
  return <>{children}</>;
};
