import type { Metadata, Viewport } from "next";
import { AppShell } from "@/components/AppShell";
import { IdentityProvider } from "@/components/IdentityProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "T-rex-Star — Secure global commerce", template: "%s | T-rex-Star" },
  description: "Programmable cross-border escrow, identity verification, and auditable settlement on Stellar.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#0b0e11" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body><IdentityProvider><AppShell>{children}</AppShell></IdentityProvider></body></html>;
}
