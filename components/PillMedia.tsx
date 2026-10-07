import styles from "./PillMedia.module.css";

export default function PillMedia({ className = "" }: { className?: string }) {
  return (
    <span className={`${styles.pill} ${className}`} aria-hidden="true">
      <span className={styles.media} />
    </span>
  );
}