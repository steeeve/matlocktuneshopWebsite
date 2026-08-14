import { MountainRange } from "./icons";

const stats = [
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "Local Shredder" },
  { value: "1:1", label: "Hands-On Service" },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden border-t border-white/10 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[40%] text-white/[0.06]">
        <MountainRange className="h-full w-full" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
            The technician
          </p>
          <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
            Meet Kyle
          </h2>
          <div className="mt-6 space-y-5 text-white/70">
            <p>
              Kyle is a Calgary-based tune shop technician with over 15 years of
              experience turning beat-up boards into fresh-riding machines.
              He learned the craft the hard way — on his own gear, in his own
              garage, chasing better days on the hill.
            </p>
            <p>
              Every board that comes through the shop is treated like his own.
              No production line, no shortcuts — just careful, honest work from
              someone who knows exactly how a board should feel under your feet.
            </p>
            <p className="font-medium text-white">
              Get your board serviced by a local shredder you can trust.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-center"
            >
              <span className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {s.value}
              </span>
              <span className="mt-2 text-[0.65rem] font-semibold uppercase tracking-widest text-white/50">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
