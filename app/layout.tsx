import type { Metadata } from "next";
import { Kanit, Geist_Mono } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bunyawat | Full Stack Developer",
  description: "Portfolio of Bunyawat Charnwechsart — Full Stack Web Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${kanit.variable} ${geistMono.variable} dark`}
      suppressHydrationWarning
    >
      <body className="font-sans bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
