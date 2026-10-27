const servicesData = [
  {
    title: "Web application development",
    description:
      "Build and maintain robust web applications using PHP, Laravel, and JavaScript.",
  },
  {
    title: "API development and integration",
    description:
      "Design and develop APIs for seamless data exchange and integration with third-party services.",
  },
  {
    title: "Frontend development",
    description:
      "Create responsive, user-friendly interfaces using Vue, Angular, React, Bootstrap, and Tailwind.",
  },
  {
    title: "Backend architecture and server management",
    description:
      "Plan and design scalable backend architectures, implement server-side logic, and manage MySQL, PostgreSQL, and SQLite databases.",
  },
  {
    title: "E-commerce solutions",
    description:
      "Develop and maintain Shopify apps, Magento websites, and custom e-commerce builds.",
  },
  {
    title: "Consulting and project management",
    description:
      "Advise on development best practices, help teams set coding standards, and manage projects.",
  },
  {
    title: "Custom tools and extensions",
    description:
      "Design and develop custom tools, browser extensions, and internal applications.",
  },
  {
    title: "Microcontroller programming and IoT",
    description:
      "Build projects on Arduino and other microcontroller platforms, integrating hardware with software.",
  },
  {
    title: "Education and training",
    description:
      "Run training sessions and workshops on Laravel and other technologies, and speak at universities and events.",
  },
  {
    title: "Open source and community",
    description:
      "Contribute to and manage open-source projects, and engage with the developer community through talks and workshops.",
  },
];

export default function Services() {
  return (
    <section className="border-t border-line py-16 md:py-24">
      <h2 className="max-w-3xl font-sans text-3xl font-extrabold leading-tight tracking-tight text-ink md:text-5xl">
        From lines on paper to final projects.
      </h2>
      <p className="mt-5 max-w-measure text-lg italic text-steel">
        Everything I can take off your plate, from first concept to running
        software.
      </p>

      <div className="mt-14 grid gap-x-16 md:grid-cols-2">
        {servicesData.map((service) => (
          <div key={service.title} className="border-t border-line py-6">
            <h3 className="font-sans text-base font-bold text-ink">
              {service.title}
            </h3>
            <p className="mt-2 max-w-measure text-[15px] leading-relaxed text-steel">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
