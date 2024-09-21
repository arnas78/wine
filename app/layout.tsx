"use client";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import { usePathname } from "next/navigation"; // Use Next.js' usePathname hook

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname(); // Get the current route

  const getBackgroundColor = () => {
    if (pathname === "/wine") {
      return "bg-secondary";
    } else {
      return "bg-background";
    }
  };

  return (
    <html lang="en">
      <body className={`${getBackgroundColor()} min-h-screen`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
