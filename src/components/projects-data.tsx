import Image from "next/image";
import Link from "next/link";

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
};

export const projects: Project[] = [
  {
    slug: "surveygizmo",
    title: "Laravel Survey Gizmo",
    category: "PHP Composer package",
    description:
      "A PHP library that wraps the API of SurveyGizmo (now Alchemer).",
    image: "/projects/SurveyGizmo.png",
  },
  {
    slug: "shopify-client",
    title: "Shopify Client",
    category: "PHP Composer package",
    description:
      "A PHP library providing a fluent interface to the Shopify API, built on top of osiset/Basic-Shopify-API.",
    image: "/projects/Shopify-client.png",
  },
  {
    slug: "pokedex",
    title: "Pokemon App",
    category: "Mobile app",
    description:
      "A Pokemon app built with React and Next.js, with a Python backend and LLM integration planned for building competitive teams.",
    image: "/projects/Pokedex.png",
    link: "https://pokedex-8hzq-git-main-mark-cornelios-projects-bd6166d2.vercel.app",
  },
  {
    slug: "cyclista",
    title: "Cyclista",
    category: "Mobile app",
    description:
      "A bike app built with Vue and Lumen, with Leaflet JS integration.",
    image: "/projects/Cyclista.png",
  },
  {
    slug: "daparoo",
    title: "Daparoo",
    category: "E-commerce web app",
    description: "An e-commerce website built with Laravel and Vue.",
    image: "/projects/Daparoo.png",
  },
  {
    slug: "lingochingoo",
    title: "LingoChingoo",
    category: "Social networking app",
    description: "A social networking web app built with Laravel and Vue.",
    image: "/projects/LingoChingoo.png",
  },
  {
    slug: "thera-game",
    title: "Thera Game with Arduino Glove Controller",
    category: "Unity game and Arduino device",
    description:
      "A glove controller that lets the user control a Unity game — hardware and software working together.",
    image: "/projects/TAC.png",
  },
];

export function ProjectFigure({ project }: { project: Project }) {
  const image = (
    <Image
      src={project.image}
      alt={`${project.title} screenshot`}
      width={700}
      height={420}
      className="h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
    />
  );

  return (
    <figure className="group">
      <div className="fig-frame overflow-hidden p-3 transition-colors duration-300 group-hover:border-signal">
        {project.link ? (
          <a href={project.link} target="_blank" rel="noreferrer">
            {image}
          </a>
        ) : (
          image
        )}
      </div>
      <figcaption className="fig-caption transition-colors duration-300 group-hover:text-ink">
        {project.category}
      </figcaption>
    </figure>
  );
}
