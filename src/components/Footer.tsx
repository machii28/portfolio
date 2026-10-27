import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faFacebook,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const clients = [
  { src: "/mindarc.png", name: "MindArc" },
  { src: "/Circlelink Health.png", name: "CircleLink Health" },
  { src: "/one-network.jpg", name: "One Network" },
  { src: "/beestripe.webp", name: "BeeStripe" },
  { src: "/cafe-24.png", name: "Cafe 24" },
  { src: "/senditoutlogo.jpeg", name: "Send It Out" },
  { src: "/Xiklab-Logo.jpg", name: "Xiklab" },
];

const contactLinks = [
  {
    href: "https://linkedin.com/in/markcornelio",
    icon: faLinkedinIn,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/machii28",
    icon: faGithub,
    label: "GitHub",
  },
  {
    href: "https://www.facebook.com/28machii",
    icon: faFacebook,
    label: "Facebook",
  },
  {
    href: "mailto:markcornelio28@gmail.com",
    icon: faEnvelope,
    label: "markcornelio28@gmail.com",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line py-16 md:py-24">
      <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
        {clients.map((client) => (
          <div key={client.name} className="relative h-9 w-28">
            <Image
              src={client.src}
              alt={`${client.name} logo`}
              fill
              sizes="112px"
              className="object-contain opacity-75 grayscale transition-opacity duration-200 hover:opacity-100"
            />
          </div>
        ))}
      </div>

      <div className="mt-20 grid gap-10 border-t border-line pt-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="font-sans text-4xl font-extrabold leading-tight tracking-tight text-ink md:text-6xl">
            Let&apos;s build something.
          </h2>
          <p className="mt-6 max-w-measure text-lg leading-relaxed text-steel">
            I&apos;m currently taking on client work and permanent roles. Tell
            me what you&apos;re building and I&apos;ll tell you how I can help.
          </p>
          <a
            href="mailto:markcornelio28@gmail.com"
            className="mt-8 inline-block font-sans text-xl font-bold text-ink underline decoration-signal decoration-2 underline-offset-8 transition-colors duration-200 hover:text-signal md:text-2xl"
          >
            markcornelio28@gmail.com
          </a>
        </div>

        <nav aria-label="Contact links" className="md:col-span-5">
          <ul className="space-y-1">
            {contactLinks.map((link) => (
              <li key={link.label} className="border-t border-line">
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 py-4 font-sans text-sm font-semibold text-steel transition-colors duration-200 hover:text-ink"
                >
                  <FontAwesomeIcon
                    icon={link.icon}
                    className="w-5 text-ink transition-colors duration-200 group-hover:text-signal"
                  />
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <p className="mt-16 border-t border-line pt-6 text-sm italic text-steel">
        Mark Cornelio — Laravel developer. Set in Archivo and Source Serif.
      </p>
    </footer>
  );
}
