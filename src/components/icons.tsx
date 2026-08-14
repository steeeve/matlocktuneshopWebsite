type IconProps = {
  className?: string;
};

export function MountainRange({ className }: IconProps) {
  return (
    <svg
      viewBox="0 0 600 200"
      className={className}
      fill="none"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {/* Back ridge */}
        <path d="M0 150 L60 95 L95 120 L140 70 L185 110 L230 60 L280 105 L330 50 L385 100 L430 75 L490 115 L540 85 L600 130 L600 200 L0 200 Z" />
        {/* Front peaks */}
        <path d="M0 175 L70 120 L110 145 L160 90 L210 135 L265 80 L320 130 L370 95 L430 140 L480 100 L530 135 L600 110 L600 200 L0 200 Z" />
        {/* Hatch shading on peaks */}
        <line x1="160" y1="90" x2="160" y2="175" />
        <line x1="172" y1="98" x2="172" y2="170" />
        <line x1="184" y1="106" x2="184" y2="165" />
        <line x1="196" y1="114" x2="196" y2="160" />
        <line x1="208" y1="122" x2="208" y2="150" />
        <line x1="265" y1="80" x2="265" y2="175" />
        <line x1="278" y1="90" x2="278" y2="170" />
        <line x1="291" y1="100" x2="291" y2="165" />
        <line x1="304" y1="110" x2="304" y2="158" />
        <line x1="317" y1="120" x2="317" y2="150" />
        <line x1="370" y1="95" x2="370" y2="175" />
        <line x1="383" y1="105" x2="383" y2="168" />
        <line x1="396" y1="115" x2="396" y2="160" />
        <line x1="409" y1="125" x2="409" y2="152" />
        <line x1="422" y1="133" x2="422" y2="146" />
        <line x1="480" y1="100" x2="480" y2="175" />
        <line x1="493" y1="110" x2="493" y2="168" />
        <line x1="506" y1="120" x2="506" y2="160" />
        <line x1="519" y1="128" x2="519" y2="152" />
      </g>
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect
        x="2.5"
        y="2.5"
        width="19"
        height="19"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function TikTokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M14 3v9.2a3.3 3.3 0 1 1-2.4-3.18V6.7a6.1 6.1 0 0 0-1.1-.1A6.2 6.2 0 1 0 16.6 12V8.1a6.6 6.6 0 0 0 3.9 1.25V6.3a3.6 3.6 0 0 1-3.5-3.3H14Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <rect
        x="2.5"
        y="4.5"
        width="19"
        height="15"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M3.5 6.5 12 13l8.5-6.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
      <path
        d="M5 12h14M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
