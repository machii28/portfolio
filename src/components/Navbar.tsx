import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-sm">
      <nav className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 md:px-10">
        <Link
          href="/"
          className="font-sans text-lg font-extrabold tracking-tight text-ink"
        >
          Mark Cornelio
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/projects"
            className="font-sans text-sm font-semibold text-steel transition-colors duration-200 hover:text-signal"
          >
            Projects
          </Link>
          <a
            href="/Mark%20Cornelio%20-%20Resume.pdf"
            download
            className="border border-ink px-4 py-1.5 font-sans text-sm font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
          >
            Résumé
          </a>
        </div>
      </nav>
    </header>
  );
}
