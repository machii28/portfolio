const stats = [
  { value: "10+", label: "years building for the web" },
  { value: "2", label: "open-source Composer packages" },
  { value: "7", label: "recommendations from past teams" },
  { value: "24", label: "technologies in the toolbox" },
];

const recommendations = [
  {
    name: "Clarisse Clemente",
    position: "Senior Project Manager at Therefore Interactive",
    recommendation:
      "Mark is a hardworking and dedicated developer who consistently produces high-quality work. He has a great ability to solve complex problems and is persistent in achieving the best results. He never shies away from big projects or tasks, and always goes above and beyond what is expected of him.",
  },
  {
    name: "Eric Lim",
    position: "Head of Development at VEEVUS",
    recommendation:
      "Mark is a joy to work with. He's proactive, self-motivated, and keeps his skills and knowledge up to date. He also writes elegant code and has very strong problem solving skills. I am certain that Mark will be a valuable asset to any company.",
  },
  {
    name: "Catherine Joy Tarzona Magalus",
    position: "Project Manager at MindArc",
    recommendation:
      "He is approachable, open to questions, and explains things well. When it comes to quality of work, he makes sure an issue is completely fixed and that the code structure is properly implemented so it prevents future problems.",
  },
  {
    name: "John Conrad Lumacad",
    position: "Lead Developer at Google",
    recommendation:
      "Mark is both very bright and quite motivated. He is a quick learner and has shown the ability to communicate and collaborate with the team. I would highly recommend Mark to be part of your team.",
  },
  {
    name: "Jeferson Mari",
    position: "Lead Frontend Engineer at Sprout Solutions",
    recommendation:
      "Mark is a talented web developer with great skills in back-end development. He works really hard with determination, grace and alacrity. He makes sure all deadlines are met, and that whatever project he is working on meets the highest standards.",
  },
  {
    name: "Jeremy Layson",
    position: "Fullstack Engineer at B1G1",
    recommendation:
      "'Unicorn programmer' is the only adjective I can use to summarize Mark. Dedicated, hardworking, clever and smart — but other than that, he's also cool to work with, helpful, and open to suggestion. If you're building a great team, Mark Cornelio is a great pick.",
  },
  {
    name: "Jireh June Nimes",
    position: "Technical Lead at Cebu Pacific Air",
    recommendation:
      "Mark is a well dedicated programmer, always with the desire to share his knowledge with others. He is also a cheerful co-employee — collaborative and a team player in terms of handling projects. He is the type of programmer that you want to work with.",
  },
];

export default function Recommendations() {
  return (
    <section className="bg-ink py-20 text-paper md:py-28">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <dl className="grid grid-cols-2 gap-y-10 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={
                index > 0 ? "md:border-l md:border-paper/15 md:pl-8" : ""
              }
            >
              <dt className="font-sans text-5xl font-extrabold tracking-tight text-paper md:text-6xl">
                {stat.value}
              </dt>
              <dd className="mt-2 max-w-[16ch] text-sm italic leading-snug text-paper/60">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-20 border-t border-paper/15 pt-16 md:mt-28">
          <h2 className="max-w-3xl font-sans text-3xl font-extrabold leading-tight tracking-tight md:text-5xl">
            Recommendations
          </h2>
          <p className="mt-5 max-w-measure text-lg italic text-paper/60">
            Words from project managers, leads, and clients I&apos;ve worked
            with over the years.
          </p>
        </div>

        <div className="mt-14 gap-12 md:columns-2">
          {recommendations.map((rec) => (
            <blockquote
              key={rec.name}
              className="mb-12 break-inside-avoid border-t-2 border-signal pt-6"
            >
              <p className="text-lg leading-relaxed text-paper/85">
                &ldquo;{rec.recommendation}&rdquo;
              </p>
              <footer className="mt-5">
                <p className="font-sans text-sm font-bold">{rec.name}</p>
                <p className="mt-0.5 text-sm italic text-paper/55">
                  {rec.position}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
