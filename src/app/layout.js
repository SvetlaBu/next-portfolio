import { Inter } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import FireFliesBackground from "@/components/FireFliesBackground";
import Sound from "@/components/Sound";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: {
    template:
      "Next.js Portfolio Created with Three.js and Tailwind CSS",
    default:
      "Next.js Portfolio Created with Three.js and Tailwind CSS",
  },
  description:
    "Уникальный творческий проект, разработанный на передовых технологиях: Next.js, Tailwind CSS, Three.js и Framer Motion. Испытайте удовольствие от современной веб-разработки из первых рук.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body
        className={clsx(
          inter.variable,
          "bg-background text-foreground font-inter"
        )}
      >
        {children}
        <FireFliesBackground />
        <Sound />
        <div id="my-modal" />
      </body>
    </html>
  );
}
