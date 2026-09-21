import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-10 px-4 sm:px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column - Profile */}
        <div className="relative flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full opacity-10 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #1EF4A8 0%, transparent 70%)",
            }}
          />
          <div className="relative w-full max-w-sm lg:max-w-md aspect-[2157/2636] rounded-none border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden">
            <Image
              src="/Profile.JPG"
              alt="Bunyawat Charnwechsart"
              fill
              priority
              sizes="(min-width: 1024px) 448px, (min-width: 640px) 384px, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column - Text */}
        <div className="flex flex-col">
          <p className="text-neon text-lg md:text-xl font-medium tracking-wide">
            สวัสดีครับผม นายบุณยวัจน์ ชาญเวชศาสตร์
          </p>

          <h1 className="flex flex-col">
            <span className="text-[11vw] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black uppercase leading-none tracking-tight text-black dark:text-white transition-colors duration-300">
              SOFTWARE
            </span>
            <span className="text-[11vw] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-black uppercase leading-none tracking-tight text-black dark:text-white transition-colors duration-300">
              ENGINEERING
            </span>
          </h1>

          <p className="text-gray-500 max-w-md text-base md:text-lg leading-relaxed">
            ผมสร้างสรรค์เว็บแอปพลิเคชัน
          </p>

          <div className="mt-10">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-neon text-black font-semibold text-sm md:text-base px-8 py-3.5 rounded-full hover:brightness-110 transition-all duration-300 animate-[neon-pulse_3s_ease-in-out_infinite]"
            >
              Contact Me
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
