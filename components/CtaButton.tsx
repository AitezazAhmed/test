import type { CSSProperties } from "react";
import styles from "./CtaButton.module.css";

type Props = {
  href: string;
  label: string;
  /** Outer width in px, taken from the Figma frame. */
  width: number;
  className?: string;
};

export default function CtaButton({ href, label, width, className }: Props) {
  return (
    <a
      href={href}
      className={`${styles.cta} ${className ?? ""}`}
      style={{ "--cta-width": `${width}px` } as CSSProperties}
    >
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.label}>{label}</span>
      <span className={styles.icon} aria-hidden="true">
        <svg width="14" height="14" viewBox="1691.1 41 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1703.58 41L1704.54 41.9906L1704.43 42.0986C1701.66 45.0122 1701.76 48.9776 1703.59 50.8714L1702.62 51.8562C1701.11 50.2962 1700.57 47.8741 1701.11 45.4621L1693.05 53.6371L1692.1 52.6476L1700.16 44.4691C1697.8 45.002 1695.44 44.4296 1693.93 42.8684L1694.9 41.8824C1696.75 43.8001 1700.7 43.9228 1703.58 41Z" fill="#fff" />
        </svg>
      </span>
    </a>
  );
}
