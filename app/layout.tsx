import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={
          "min-h-screen grid grid-rows-[auto,1fr,auto] p-10 " + inter.className
        }
      >
        <header>
          <h1 className="text-5xl font-bold">ContentCrafter Inc.</h1>
          <nav className="mt-4">
            <Link
              className="hover:font-semibold underline decoration-2 hover:decoration-teal-500"
              href="/"
            >
              Home
            </Link>
          </nav>
        </header>
        <main className="mt-10">{children}</main>
        <footer className="mt-10">
          Copyright © {new Date().getFullYear()} ContentCrafter Inc.
        </footer>
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s | ContentCrafter Inc.",
    default: "ContentCrafter Inc.",
  },
  description: "From Worldly Wonders to Polished Perfection - Crafting Content That Captivates and Converts",
}
