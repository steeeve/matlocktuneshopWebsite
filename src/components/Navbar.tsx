import { InstagramIcon, TikTokIcon } from "./icons";

const links = [
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center" aria-label="Matlock's Tune Shop home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-nav.png"
            alt="Matlock's Tune Shop"
            className="h-10 w-auto object-contain"
          />
        </a>
        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 text-sm font-medium uppercase tracking-wider text-white/70 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="transition-colors hover:text-white"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 text-white/70">
            <a
              href="https://www.instagram.com/matlockstuneshop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @matlockstuneshop"
              className="transition-colors hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@matlockstuneshop"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok @matlockstuneshop"
              className="transition-colors hover:text-white"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
