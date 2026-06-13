import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Droplets, Menu, X } from "lucide-react";

const links = [
  { href: "#services", label: "Services" },
  { href: "#packages", label: "Packages" },
  { href: "#process", label: "Process" },
  { href: "#gallery", label: "Gallery" },
  { href: "#book", label: "Book" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "glass-card border-b" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-aqua glow-aqua">
            <Droplets className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold tracking-wider">
            AQUA<span className="text-gradient-aqua">DRIVE</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#book"
          className="hidden rounded-full bg-gradient-aqua px-5 py-2.5 text-sm font-semibold text-primary-foreground glow-aqua transition-transform hover:scale-105 md:inline-flex"
        >
          Book Now
        </a>

        <button
          className="rounded-lg p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="glass-card border-t md:hidden">
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-aqua px-5 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Book Now
            </a>
          </div>
        </div>
      )}
    </motion.header>
  );
}
