"use client";

import { useEffect, useRef, useState } from "react";

type Service = {
  title: string;
  description: string;
  tag: string;
  images: string[];
};

const services: Service[] = [
  {
    title: "Base Repair",
    description:
      "P-tex fills, core shots, and edge work to bring damaged bases back to life and keep you riding fast.",
    tag: "Repair",
    images: [
      "/services/baserepair.png",
      "/services/base-repair-before-after.png",
    ],
  },
  {
    title: "Same-Day Waxing",
    description:
      "Hot wax tuned to current snow conditions so your base glides clean all day. Drop it off, pick it up the same day.",
    tag: "Speed",
    images: [
      "/services/waxing.png",
      "/services/waxing2.png",
    ],
  },
  {
    title: "Top Sheet Repair",
    description:
      "Cracked or chipped top sheets sealed and smoothed to protect your board's structure and looks.",
    tag: "Restore",
    images: ["/services/top-sheet-before-after.png"],
  },
];

const GALLERY_INTERVAL = 3000;

function ServiceRow({ service }: { service: Service }) {
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const { images, title, description, tag } = service;
  const hasImages = images.length > 0;

  useEffect(() => {
    if (!hovered || images.length <= 1) return;
    timer.current = setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, GALLERY_INTERVAL);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [hovered, images.length]);

  return (
    <div
      className="group relative bg-background p-8 transition-colors hover:bg-white/[0.03] sm:p-10"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false);
        setActive(0);
      }}
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex flex-1 flex-col">
          <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
            {tag}
          </span>
          <h3 className="mt-6 text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            {title}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            {description}
          </p>
        </div>
      </div>

      {hasImages ? (
        <div
          className={`grid transition-all duration-500 ease-out ${
            hovered
              ? "mt-8 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="relative mx-auto w-fit max-w-full rounded-xl border border-white/10 bg-white/[0.02] p-1">
              {images.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={`${title} example ${i + 1}`}
                  className={`max-h-[240px] w-auto max-w-full object-contain transition-opacity duration-500 sm:max-h-[300px] ${
                    i === active
                      ? "relative block opacity-100"
                      : "absolute inset-0 h-full w-full opacity-0"
                  }`}
                />
              ))}
              {images.length > 1 && (
                <div className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                  {images.map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 w-1.5 rounded-full transition-colors ${
                        i === active ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
            {images.length > 1 && (
              <div className="mx-auto mt-3 flex max-w-2xl justify-center gap-2">
                {images.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={`Thumbnail ${i + 1}`}
                    onClick={() => setActive(i)}
                    aria-label={`View image ${i + 1}`}
                    className={`h-14 w-auto cursor-pointer rounded-lg object-contain transition-all duration-300 ${
                      i === active
                        ? "opacity-100 ring-2 ring-white"
                        : "opacity-40 hover:opacity-70"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div
          className={`grid transition-all duration-500 ease-out ${
            hovered
              ? "mt-8 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="flex aspect-[4/3] items-center justify-center rounded-lg border border-dashed border-white/15 bg-white/[0.02] text-white/20"
                >
                  <span className="text-[0.65rem] uppercase tracking-widest">
                    Photo {i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {!hovered && (
        <div className="mt-6">
          <span className="text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-white/25 transition-colors group-hover:text-white/40">
            {hasImages ? "Hover to expand gallery" : "Photos coming soon"}
          </span>
        </div>
      )}
    </div>
  );
}

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

        <div className="mt-16 overflow-hidden rounded-2xl border border-white/10">
          <div className="divide-y divide-white/10">
            {services.map((s) => (
              <ServiceRow key={s.title} service={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
