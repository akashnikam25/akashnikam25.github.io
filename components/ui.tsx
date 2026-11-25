import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export const LINKS = {
  github: "https://github.com/akashnikam25",
  linkedin: "https://www.linkedin.com/in/akash-nikam-profile/",
  resume: "/Akash_Nikam_Resume.pdf",
  email: "akashvnikam@gmail.com",
};

type Vars = CSSProperties & Record<`--${string}`, string | number>;

/** Stagger index for CSS transitions (`--i`). */
export const idx = (i: number): Vars => ({ "--i": i });

export function SectionHead({
  eyebrow,
  title,
  note,
}: {
  eyebrow: string;
  title: ReactNode;
  note?: ReactNode;
}) {
  return (
    <div className="section-head reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {note && <p className="section-note">{note}</p>}
    </div>
  );
}

/** A left-to-right flow of steps. Nodes light up in order on scroll. */
export function Flow({ label, steps }: { label: string; steps: string[] }) {
  return (
    <ol className="flow" aria-label={label}>
      {steps.map((step, i) => (
        <li key={step} style={idx(i)}>
          {i > 0 && <span className="flow-link" aria-hidden="true" />}
          <span className="flow-node">{step}</span>
        </li>
      ))}
    </ol>
  );
}

/**
 * Before/after bar for a percentage that improved. The grey part is the
 * starting value; the blue part grows from it to the new value.
 */
export function Delta({ before, after, label }: { before: number; after: number; label: string }) {
  const style: Vars = {
    "--before": `${before}%`,
    "--after": `${after}%`,
    "--before-n": before,
    "--after-n": after,
  };
  return (
    <div className="delta" style={style} role="img" aria-label={`${label}: ${before}% before, ${after}% after`}>
      <span className="delta-after" />
      <span className="delta-before" />
    </div>
  );
}

export function Tags({ items }: { items: string[] }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}

export function Header({ home = true }: { home?: boolean }) {
  const p = home ? "" : "/";
  return (
    <header className="site-header">
      <Link href={home ? "#top" : "/"} className="brand">
        <span className="brand-name">Akash Nikam</span>
        <span className="brand-role">AI Engineer</span>
      </Link>
      <nav aria-label="Main" className="site-nav">
        <a href={`${p}#work`}>Work</a>
        <a href={`${p}#open-source`}>Open source</a>
        <a href={`${p}#experience`}>Experience</a>
        <a href={`${p}#contact`}>Contact</a>
        <a href={LINKS.resume} className="btn btn-small btn-outline-ink">
          Resume (PDF)
        </a>
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <span>© {new Date().getFullYear()} Akash Nikam</span>
      <span>Pune, India</span>
    </footer>
  );
}
