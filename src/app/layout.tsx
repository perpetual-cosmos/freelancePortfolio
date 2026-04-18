import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UniPick | Premier Digital Infrastructure",
  description: "Architectural-grade full-stack solutions for the modern enterprise. Specialized in cloud, AI, and scalable digital infrastructure.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
