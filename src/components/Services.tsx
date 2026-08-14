type Service = {
  title: string;
  description: string;
  tag: string;
};

const services: Service[] = [
  {
    title: "Base Repair",
    description:
      "P-tex fills, core shots, and edge work to bring damaged bases back to life and keep you riding fast.",
    tag: "Repair",
  },
  {
    title: "Same-Day Waxing",
    description:
      "Hot wax tuned to current snow conditions so your base glides clean all day. Drop it off, ride it out.",
    tag: "Speed",
  },
  {
    title: "Top Sheet Repair",
    description:
      "Cracked or chipped top sheets sealed and smoothed to protect your board's structure and looks.",
    tag: "Restore",
  },
  {
    title: "Base Grinding",
    description:
      "Precision structure grinding flattens the base and lays down a fresh pattern for maximum glide.",
    tag: "Flatten",
  },
];

export function Services() {
  return (
    <section id="services" className="relative border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/50">
            What we do
          </p>
          <h2 className="mt-4 text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
            Services
          </h2>
          <p className="mt-6 text-white/70">
            Every board gets hands-on attention from a technician who actually rides.
            From quick waxes to full base rebuilds, your setup is in good hands.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-background p-8 transition-colors hover:bg-white/[0.03] sm:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  {s.tag}
                </span>
                <span className="h-2 w-2 rounded-full bg-white/30 transition-colors group-hover:bg-white" />
              </div>
              <h3 className="mt-6 text-2xl font-bold uppercase tracking-tight">
                {s.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/60">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
