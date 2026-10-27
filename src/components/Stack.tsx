type StackGroup = {
  label: string;
  items: { icon: string; name: string }[];
};

const groups: StackGroup[] = [
  {
    label: "Backend",
    items: [
      { icon: "devicon-php-plain", name: "PHP" },
      { icon: "devicon-laravel-original", name: "Laravel" },
      { icon: "devicon-lumen-original", name: "Lumen" },
      { icon: "devicon-codeigniter-plain", name: "CodeIgniter" },
      { icon: "devicon-mysql-plain", name: "MySQL" },
      { icon: "devicon-postgresql-plain", name: "PostgreSQL" },
    ],
  },
  {
    label: "Frontend",
    items: [
      { icon: "devicon-javascript-plain", name: "JavaScript" },
      { icon: "devicon-react-original", name: "React" },
      { icon: "devicon-nextjs-plain", name: "Next.js" },
      { icon: "devicon-vuejs-plain", name: "Vue" },
      { icon: "devicon-angularjs-plain", name: "Angular" },
      { icon: "devicon-livewire-plain-wordmark", name: "Livewire" },
      { icon: "devicon-alpinejs-original", name: "Alpine.js" },
      { icon: "devicon-tailwindcss-original", name: "Tailwind" },
    ],
  },
  {
    label: "Infrastructure",
    items: [
      { icon: "devicon-amazonwebservices-plain-wordmark", name: "AWS" },
      { icon: "devicon-digitalocean-original", name: "DigitalOcean" },
      { icon: "devicon-docker-plain", name: "Docker" },
      { icon: "devicon-git-plain", name: "Git" },
      { icon: "devicon-jira-plain", name: "Jira" },
    ],
  },
  {
    label: "Hardware and tools",
    items: [
      { icon: "devicon-arduino-plain", name: "Arduino" },
      { icon: "devicon-electron-original", name: "Electron" },
      { icon: "devicon-cplusplus-plain", name: "C++" },
      { icon: "devicon-html5-plain", name: "HTML" },
      { icon: "devicon-css3-plain", name: "CSS" },
    ],
  },
];

export default function Stack() {
  return (
    <section className="border-t border-line py-16 md:py-24">
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        {groups.map((group) => (
          <div key={group.label}>
            <h2 className="font-sans text-sm font-bold text-ink">
              {group.label}
            </h2>
            <ul className="mt-5 space-y-3">
              {group.items.map((item) => (
                <li
                  key={item.name}
                  className="flex items-center gap-3 text-sm text-steel transition-colors duration-200 hover:text-ink"
                >
                  <i
                    aria-hidden="true"
                    className={`${item.icon} w-6 text-center text-lg text-ink`}
                  ></i>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
