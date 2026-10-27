import { motion } from "motion/react";
import { Menu } from "lucide-react";
import { DoodleStar, ScribbleUnderline } from "../components/Doodles";

const LINKS = ["Home", "Projects", "About", "Contact"];

export function Nav() {
  return (
    <motion.header
      initial={{ opacity: 1, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5 md:px-12"
    >
      <a href="#top" data-cursor="grow" className="relative font-display text-xl font-extrabold tracking-tight">
        ADITYA<span className="text-(--color-accent)">.</span>
        <DoodleStar className="pointer-events-none absolute -right-4 -top-3 h-3.5 w-3.5 rotate-12 text-(--color-gold)" />
      </a>
      <nav className="hidden items-center gap-8 md:flex">
        {LINKS.map((link) => (
          <a
            key={link}
            href={link === "Home" ? "#top" : `#${link.toLowerCase()}`}
            data-cursor="grow"
            className="group relative text-sm font-medium text-(--color-ink)/80 transition-colors hover:text-(--color-accent)"
          >
            {link}
            <ScribbleUnderline className="absolute -bottom-2 left-0 h-2 w-full text-(--color-accent) opacity-0 transition-opacity group-hover:opacity-100" />
          </a>
        ))}
      </nav>
      <button
        data-cursor="grow"
        aria-label="Open menu"
        className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-dashed border-(--color-ink)/25 text-(--color-ink) md:hidden"
      >
        <Menu size={18} />
      </button>
    </motion.header>
  );
}
