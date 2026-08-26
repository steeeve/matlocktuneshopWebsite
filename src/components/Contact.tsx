import { InstagramIcon, TikTokIcon, MailIcon, ArrowIcon } from "./icons";

const socials = [
  {
    label: "Instagram",
    handle: "@matlockstuneshop",
    href: "https://www.instagram.com/matlockstuneshop",
    Icon: InstagramIcon,
  },
  {
    label: "TikTok",
    handle: "@matlockstuneshop",
    href: "https://www.tiktok.com/@matlockstuneshop",
    Icon: TikTokIcon,
  },
  {
    label: "Email",
    handle: "matlockstuneshop@gmail.com",
    href: "mailto:matlockstuneshop@gmail.com",
    Icon: MailIcon,
  },
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-8 sm:p-14">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
                Get in touch
              </p>
              <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
                Book your tune
              </h2>
              <p className="mt-6 max-w-md text-white/70">
                Slide into the DMs, send an email, or tap a link below to get
                your board on the bench. Same-day waxing available.
              </p>
              <a
                href="https://ig.me/matlockstuneshop"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-black transition-transform hover:scale-105"
              >
                <InstagramIcon className="h-4 w-4" />
                DM Kyle
                <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <ul className="grid gap-4">
              {socials.map(({ label, handle, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-background p-5 transition-colors hover:border-white/30 hover:bg-white/[0.03]"
                  >
                    <span className="flex min-w-0 items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors group-hover:text-white">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs font-semibold uppercase tracking-widest text-white/40">
                          {label}
                        </span>
                        <span className="block break-all text-base font-semibold">
                          {handle}
                        </span>
                      </span>
                    </span>
                    <ArrowIcon className="h-5 w-5 shrink-0 text-white/40 transition-all group-hover:translate-x-1 group-hover:text-white" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-white/50 sm:flex-row">
        <p className="font-semibold uppercase tracking-widest">
          Matlock&apos;s Tune Shop
        </p>
        <p>Calgary, Alberta · Built by a local shredder</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.instagram.com/matlockstuneshop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="transition-colors hover:text-white"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.tiktok.com/@matlockstuneshop"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="transition-colors hover:text-white"
          >
            <TikTokIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
