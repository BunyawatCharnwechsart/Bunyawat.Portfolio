export default function ContactSection() {
  return (
    <section id="contact" className="bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-20 pb-40">
        <h1 className="text-4xl md:text-5xl font-black text-black dark:text-white transition-colors duration-300">
          Contact <span className="text-neon">Me</span>
        </h1>
        <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl leading-relaxed">
          สามารถติดต่อผมได้ตามช่องทางการติดต่อ
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Gmail */}
          <div className="rounded-xl border border-black/10 dark:border-white/10 p-6 bg-gray-50 dark:bg-white/5 transition-colors duration-300 flex flex-col items-center text-center">
            <svg viewBox="0 0 48 48" className="w-12 h-12 mb-4 shrink-0">
              <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"/>
              <path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"/>
              <polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"/>
              <path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"/>
              <path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341c.745-.558,1.648-.859,2.578-.859h0C43.076,8,45,9.924,45,12.298z"/>
            </svg>
            <h2 className="text-lg font-bold text-black dark:text-white transition-colors duration-300">
              Gmail
            </h2>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 break-all">
              bunyawat.chws@gmail.com
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bunyawat.chws@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold bg-neon text-black px-5 py-2 rounded-full hover:brightness-110 transition-all duration-300"
            >
              Send Email
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