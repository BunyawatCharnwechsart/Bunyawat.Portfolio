type Project = {
  title: string;
  url?: string;
  demo?: string;
  addLine ?: string;
  desc: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "EasyClassPay",
    url: "https://github.com/BunyawatCharnwechsart/EasyClassPay",
    desc: "เป็นเว็บแอปพลิเคชั่นสำหรับการหารตังค์กับเพื่อนในการใช้จ่ายต่างๆ",
    tags: ["Vue", "Node.js", "JavaScript"],
  },
  {
    title: "Easycook",
    url: "https://github.com/BunyawatCharnwechsart/Easycook",
    demo: "https://easycook-three.vercel.app/app/main",
    desc: "Easy Cook เป็นแพลตฟอร์มสำหรับค้นหาและเผยแพร่สูตรอาหาร",
    tags: ["Vue", "TypeScript", "Express", "Cloudflare D1"],
  },
  {
    title: "Nutri Journey (กำลังพัฒนา)",
    url: "https://github.com/BunyawatCharnwechsart/Nutri-Journey",
    addLine: "https://lin.ee/6rm9OFF",
    desc:"Nutri Journey เป็นเว็บแอปพลิเคชั่นสำหรับการทำ IF ที่สามารถบันทึกการทำ IF ได้และแสดงผลการทำ IF เช่น สถิติการทำ IF รวมถึงมีระบบการแจ้งเตือนการ Line ",
    tags: ["Next.js","Tailwind CSS", "TypeScript", "Supabase",],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white transition-colors duration-300">
          My <span className="text-neon">Projects</span>
        </h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-gray-50 dark:bg-white/5 transition-colors duration-300 flex flex-col"
            >
              <h2 className="text-lg font-bold text-black dark:text-white transition-colors duration-300">
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-neon transition-colors duration-200 inline-flex items-center gap-1.5"
                  >
                    {p.title}
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  p.title
                )}
                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-neon transition-colors duration-200"
                  >
                    Link Demo
                  </a>
                )}
                {
                  p.addLine && (
                    <a
                      href={p.addLine}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-2 text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-neon transition-colors duration-200"
                    >
                      Add Line
                    </a>
                  )
                }
              </h2>
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex-1">
                {p.desc}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-neon/20 text-black dark:text-neon"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}