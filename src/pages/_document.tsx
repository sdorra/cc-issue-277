
import Link from "next/link";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={
          "min-h-screen grid grid-rows-[auto,1fr,auto] p-10"
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
        <main className="mt-10">
          <Main />
        </main>
        <footer className="mt-10">
          Copyright © {new Date().getFullYear()} ContentCrafter Inc.
        </footer>
        <NextScript />
      </body>
    </Html>
  );
}
