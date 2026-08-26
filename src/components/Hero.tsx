import { MountainRange, ArrowIcon } from "./icons";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] items-center justify-center overflow-hidden"
    >
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 30%, rgba(255,255,255,0.08), transparent 70%)",
        }}
      />
      {/* Mountain backdrop */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] translate-y-15 text-white/10">
        <MountainRange className="h-full w-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <p className="animate-fade-up text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
          Calgary, Alberta
        </p>
        <h1
          className="animate-fade-up mt-6 text-5xl font-extrabold uppercase leading-[0.95] tracking-tight sm:text-7xl md:text-8xl"
          style={{ animationDelay: "0.1s" }}
        >
          Matlock&apos;s
          <br />
          Tune Shop
        </h1>
        <p
          className="animate-fade-up mx-auto mt-8 max-w-xl text-base text-white/70 sm:text-lg"
          style={{ animationDelay: "0.2s" }}
        >
          Calgary-based snowboard tuning by Kyle — 15+ years of experience.
          Get your board serviced by a local shredder you can trust.
        </p>
        <div
          className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          style={{ animationDelay: "0.3s" }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-black transition-transform hover:scale-105"
          >
            Book a Tune
            <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-white/10"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}
