import Image from "next/image";
import Link from "next/link";

const facts = [
  { value: "10+ years", label: "building for the web" },
  { value: "PHP · Laravel · JavaScript", label: "core stack" },
  { value: "Open to work", label: "client projects and permanent roles" },
];

export default function Header() {
  return (
    <header className="grid gap-12 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
      <div className="lg:col-span-7">
        <h1 className="reveal reveal-1 font-sans text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-5xl md:text-7xl">
          Web applications that hold up in production.
        </h1>
        <p className="reveal reveal-2 mt-8 max-w-measure text-lg leading-relaxed text-steel">
          I&apos;m Mark Cornelio, a Laravel developer with a decade of
          experience across web applications, APIs, and e-commerce — with the
          occasional Arduino project on the side. If you need someone to build
          robust software and explore new technologies with you, let&apos;s
          talk.
        </p>
        <div className="reveal reveal-3 mt-10 flex flex-wrap gap-4">
          <a
            href="/Mark%20Cornelio%20-%20Resume.pdf"
            download
            className="bg-signal px-8 py-3 font-sans text-base font-bold text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
          >
            Download résumé
          </a>
          <Link
            href="/projects"
            className="border border-ink px-8 py-3 font-sans text-base font-semibold text-ink transition-colors duration-200 hover:bg-ink hover:text-paper"
          >
            See selected projects
          </Link>
        </div>
      </div>

      <figure className="reveal reveal-4 lg:col-span-5">
        <div className="fig-frame p-3">
          <Image
            src="/profile-picture.jpg"
            alt="Mark Cornelio"
            width={440}
            height={440}
            className="h-auto w-full"
            priority
          />
        </div>
        <figcaption className="fig-caption">
          Fig. 01 — Mark Cornelio, Laravel developer.
        </figcaption>
      </figure>

      <dl className="reveal reveal-5 grid gap-6 border-t border-line pt-8 sm:grid-cols-3 lg:col-span-12">
        {facts.map((fact) => (
          <div key={fact.value}>
            <dt className="font-sans text-base font-bold text-ink">
              {fact.value}
            </dt>
            <dd className="mt-1 text-sm italic text-steel">{fact.label}</dd>
          </div>
        ))}
      </dl>
    </header>
  );
}
