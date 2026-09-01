const sections = [
  {
    title: "Education",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
      </svg>
    ),
    heading: "มหาวิทยาลัยพะเยา",
    description: "คณะเทคโนโลยีสารสนเทศและการสื่อสาร",
    items: ["สาขาวิศวกรรมซอฟต์แวร์"],
  },
  {
    title: "Experience",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    items: [
      "ออกแบบ พัฒนา และดีพลอยเว็บแอปพลิเคชัน",
      "สร้าง RESTful API",
      "ออกแบบระบบฐานข้อมูลเชิงสัมพันธ์",
    ],
  },
  {
    title: "Tools & Workflow",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    items: ["Git", "GitLab",  ],
  },
  {
    title: "Goals",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    items: [
      "มองหาตำแหน่งฝึกงาน Full-Stack Developer",
      "พัฒนาความเชี่ยวชาญด้านเทคนิค",
      "สั่งสมประสบการณ์ตรงในสภาพแวดล้อมการทำงานจริง",
    ],
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white transition-colors duration-300">
          About <span className="text-neon">Me</span>
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
          นักศึกษาสาขาวิศวกรรมซอฟต์แวร์ ชั้นปีที่ 3 ที่มีความหลงใหลในการพัฒนาเว็บแอปพลิเคชันแบบ Full-Stack
          และกำลังมองหาโอกาสฝึกงานเพื่อสั่งสมประสบการณ์จริง
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {sections.map((section) => (
            <div
              key={section.title}
              className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-gray-50 dark:bg-white/5 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-neon/20 text-neon shrink-0">
                  {section.icon}
                </span>
                <h2 className="text-sm font-semibold uppercase tracking-widest text-neon">
                  {section.title}
                </h2>
              </div>
              {section.heading && (
                <div className="mb-4">
                  <h3 className="text-black dark:text-white font-semibold text-base transition-colors duration-300">
                    {section.heading}
                  </h3>
                  {section.description && (
                    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                      {section.description}
                    </p>
                  )}
                </div>
              )}
              <ul className="space-y-3">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-black dark:text-white text-sm font-medium transition-colors duration-300"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neon shrink-0" />
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