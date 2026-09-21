const skillCategories = [
  {
    title: "Languages",
    items: ["Java", "TypeScript", "Python","SQL"],
  },
  {
    title: "Frontend",
    items: ["Vue.js", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "Supabase"],
  },
  {
    title: "DevOps",
    items: ["Docker", "CI/CD", "Linux"],
  },
  {
    title: "Tools",
    items: ["Git", "Figma", "VS Code", "Postman"],
  },
];

const iconPaths: Record<string, string> = {
  "Vue.js": "/icons/vue-svgrepo-com.svg",
  "Next.js": "/icons/next-dot-js-svgrepo-com.svg",
  TypeScript: "/icons/typescript-svgrepo-com.svg",
  "Tailwind CSS": "/icons/tailwindcss-svgrepo-com.svg",
  "Node.js": "/icons/node-js-svgrepo-com.svg",
  Express: "/icons/express-svgrepo-com.svg",
  Python: "/icons/python-svgrepo-com.svg",
  Supabase: "/icons/supabase-svgrepo-com.svg",
  Docker: "/icons/docker-svgrepo-com.svg",
  "CI/CD": "/icons/cicd-svgrepo-com.svg",
  Linux: "/icons/linux-svgrepo-com.svg",
  Git: "/icons/git-svgrepo-com.svg",
  Figma: "/icons/figma-svgrepo-com.svg",
  "VS Code": "/icons/vscode-svgrepo-com.svg",
  Postman: "/icons/postman-svgrepo-com.svg",
  Java: "/icons/java-svgrepo-com.svg",
  SQL: "/icons/sql-svgrepo-com.svg",
};

function TechIcon({ name }: { name: string }) {
  const src = iconPaths[name];
  return (
    <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-white dark:bg-white transition-colors duration-300 shrink-0">
      {src ? (
        <img src={src} alt={name} className="w-5 h-5 shrink-0" />
      ) : (
        <span className="w-5 h-5 rounded bg-gray-300 dark:bg-gray-600 flex items-center justify-center text-[9px] font-bold text-white">
          {name[0]}
        </span>
      )}
    </span>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white transition-colors duration-300">
          My <span className="text-neon">Skills</span>
        </h1>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-gray-50 dark:bg-white/5 transition-colors duration-300"
            >
              <h2 className="text-sm font-semibold uppercase tracking-widest text-neon mb-5">
                {cat.title}
              </h2>
              <ul className="space-y-3">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-black dark:text-white text-sm font-medium transition-colors duration-300"
                  >
                    <TechIcon name={item} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}