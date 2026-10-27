import Link from "next/link";
import { projects, ProjectFigure } from "./projects-data";

export default function SelectedWork() {
  const featured = projects.slice(0, 3);

  return (
    <section className="border-t border-line py-16 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <h2 className="max-w-3xl font-sans text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
          Selected projects
        </h2>
        <Link
          href="/projects"
          className="font-sans text-sm font-semibold text-steel underline decoration-signal decoration-2 underline-offset-4 transition-colors duration-200 hover:text-ink"
        >
          All projects
        </Link>
      </div>

      <div className="mt-14 space-y-16">
        {featured.map((project) => (
          <div
            key={project.slug}
            className="grid items-center gap-8 md:grid-cols-12"
          >
            <div className="md:col-span-7">
              <ProjectFigure project={project} />
            </div>
            <div className="md:col-span-5">
              <h3 className="font-sans text-2xl font-extrabold tracking-tight text-ink">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors duration-200 hover:text-signal"
                  >
                    {project.title}
                  </a>
                ) : (
                  project.title
                )}
              </h3>
              <p className="mt-4 max-w-measure leading-relaxed text-steel">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
