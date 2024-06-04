const servicesData = [
  {
    title: 'Web Application Developer',
    description: 'Build and maintain robust web applications using PHP, Laravel and Javascript',
  },
  {
    title: 'API Development and Integration',
    description: 'Design and develop APIs for seamless data exchange and integration with third-party services.',
  },
  {
    title: 'Frontend Development',
    description: 'Create responsive and user-friendly interfaces using VueJS, Angular, React, Bootstrap, Tailwind',
  },
  {
    title: 'Backend Development and Server Management',
    description: 'Plan and Design scalable backend architectures. Implement server-side logic and manage databases (MySQL, PostgreSQL, SQLite)',
  },
  {
    title: 'E-Commerce Solutions',
    description: 'Develop and maintain Shopify apps, Magento websites, and custom e-commerce',
  },
  {
    title: 'Consulting and Project Management',
    description: 'Provide expert advice on software development best practices. Assist teams in setting coding standards and managing development projects',
  },
  {
    title: 'Custom Tool and Extension Development',
    description: 'Design and develop custom tools, browser extensions, and internal applications',
  },
  {
    title: 'Microcontroller Programming and IoT Solutions',
    description: 'Develop projects using Arduino and other microcontroller platforms. Integrate hardware with software for innovative IoT solutions',
  },
  {
    title: 'Education and Training',
    description: 'Provide training sessions and workshops on Laravel and other technologies. Speaker experience at universities and events.',
  },
  {
    title: 'Open Source Development and Community Contributions',
    description: 'Contribute to and manage open-source projects. Engage with the developer community through talks, workshops, and contributions.'
  }
];

export default function Services() {
  return (
    <section className="lg:mb-20">
      <div>
        <h1
          className="font-semibold text-gray-800 text-2xl md:text-3xl xl:text-5xl text-center leading-tight mb-20 xl:mb-40">
          From initial concepts to polished code, <br/>
          Crafting robust solutions from <br />
          <span className="text-cyan-600"> lines on the paper to <br/> final projects</span>
        </h1>
        <div className="flex flex-col xl:flex-row gap-16">
          <div className="grid grid-cols-2 text-center xl:text-left xl:gap-x-24 mt-10">
            {servicesData.map((service, index) => (
              <div key={index} className="mb-16 xl:mb-0">
                <h4 className="font-semibold text-gray-800 text-md md:text-lg mb-5">{service.title}</h4>
                <p className="font-normal text-gray-500 text-xs md:text-sm mb-5">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}