export default function ContactSection() {
  return (
    <section id="contact" className="bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white transition-colors duration-300">
          Contact <span className="text-neon">Me</span>
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-md">
          สามารถติดต่อผมได้ตามช่องทางการติดต่อ
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Facebook */}
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-gray-50 dark:bg-white/5 transition-colors duration-300 flex flex-col items-center text-center">
            <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4 shrink-0">
              <rect width="24" height="24" rx="4" fill="#1877F2" />
              <text x="12" y="17" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="bold" fontFamily="sans-serif">f</text>
            </svg>
            <h2 className="text-lg font-bold text-black dark:text-white transition-colors duration-300">
              Facebook
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              mon.bunyawat.5
            </p>
            <a
              href="https://www.facebook.com/mon.bunyawat.5"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold bg-neon text-black px-5 py-2 rounded-full hover:brightness-110 transition-all duration-300"
            >
              Visit Profile
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Instagram */}
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-gray-50 dark:bg-white/5 transition-colors duration-300 flex flex-col items-center text-center">
            <img src="/icons/instagram-2-1-logo-svgrepo-com.svg" alt="Instagram" className="w-12 h-12 mb-4 shrink-0" />
            <h2 className="text-lg font-bold text-black dark:text-white transition-colors duration-300">
              Instagram
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              m.chws
            </p>
            <a
              href="https://www.instagram.com/m.chws/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold bg-neon text-black px-5 py-2 rounded-full hover:brightness-110 transition-all duration-300"
            >
              Visit Profile
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* GitHub */}
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-gray-50 dark:bg-white/5 transition-colors duration-300 flex flex-col items-center text-center">
            <svg viewBox="0 0 24 24" className="w-12 h-12 mb-4 shrink-0">
              <rect width="24" height="24" rx="4" fill="#333" />
              <path d="M12 4C7.58 4 4 7.58 4 12c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0020 12c0-4.42-3.58-8-8-8z" fill="#fff" />
            </svg>
            <h2 className="text-lg font-bold text-black dark:text-white transition-colors duration-300">
              GitHub
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              BunyawatCharnwechsart
            </p>
            <a
              href="https://github.com/BunyawatCharnwechsart"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold bg-neon text-black px-5 py-2 rounded-full hover:brightness-110 transition-all duration-300"
            >
              Visit Profile
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}