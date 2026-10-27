import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { projects, ProjectFigure } from "@/components/projects-data";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects — Mark Cornelio</title>
        <meta
          name="description"
          content="Selected work by Mark Cornelio: PHP Composer packages, mobile apps, e-commerce builds, and an Arduino-controlled Unity game."
        />
      </Head>
      <Navbar />
      <main>
        <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
          <header className="border-b border-line pb-14 pt-10 md:pb-20">
            <h1 className="max-w-3xl font-sans text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-6xl">
              Selected work from ten years of building.
            </h1>
            <p className="mt-6 max-w-measure text-lg leading-relaxed text-steel">
              Open-source PHP packages, mobile and e-commerce apps, and one
              Arduino glove that controls a Unity game.
            </p>
          </header>

          <section className="divide-y divide-line">
            {projects.map((project) => (
              <article
                key={project.slug}
                className="grid items-center gap-8 py-14 md:grid-cols-12"
              >
                <div className="md:col-span-6">
                  <ProjectFigure project={project} />
                </div>
                <div className="md:col-span-6">
                  <h2 className="font-sans text-2xl font-extrabold tracking-tight text-ink md:text-3xl">
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
                  </h2>
                  <p className="mt-4 max-w-measure leading-relaxed text-steel">
                    {project.description}
                  </p>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-block font-sans text-sm font-semibold text-ink underline decoration-signal decoration-2 underline-offset-4 transition-colors duration-200 hover:text-signal"
                    >
                      Open live app
                    </a>
                  )}
                </div>
              </article>
            ))}
          </section>

          <Footer />
        </div>
      </main>
    </>
  );
}
