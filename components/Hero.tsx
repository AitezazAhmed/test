import CtaButton from "./CtaButton";
import HeroVideo from "./HeroVideo";
import ScrollGrow from "./ScrollGrow";
import PillMedia from "./PillMedia";
import styles from "./Hero.module.css";

/** Home artboard (1920 x 1017). Children (the navbar) sit on top of the texture. */
export function HomeStage({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={styles.outer}>
        <div className={styles.stage}>
          <div className={styles.textureClip} aria-hidden="true">
            <div className={styles.texture} />
          </div>
          {children}
        </div>
        <div className={styles.track} aria-hidden="true" />
      </div>
    </>
  );
}

export default function Hero() {
  return (
    <section id="home" aria-label="Hero" className={styles.hero}>
      <h1 className={styles.title}>
        <span className={styles.line}>Design That LEAVE</span>
        <span className={`${styles.line} ${styles.lineMiddle}`}>
          <PillMedia className={styles.pill} />
          <span className={styles.lasting}>a LASTING</span>
        </span>
        <span className={styles.line}>mark!</span>
      </h1>

      <p className={styles.lead}>
        Building brands from the ground up with strategy, creativity, and a clear purpose.
      </p>

      <CtaButton href="#contact" label="Let’s Connect" width={189} className={styles.connect} />

      {/* Wahi purani media div + HeroVideo, bas ScrollGrow se wrap */}
      <ScrollGrow className={styles.media}>
        <HeroVideo
          className={styles.video}
          sources={[
            { src: "/video/intro.webm", type: "video/webm" },
            { src: "/video/intro.mp4", type: "video/mp4" },
          ]}
          poster="/images/hero-video-poster.webp"
        />
      </ScrollGrow>
    </section>
  );
}