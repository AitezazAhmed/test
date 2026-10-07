"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CtaButton from "./CtaButton";
import styles from "./Navbar.module.css";

const links = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className={styles.logo} aria-label="MAX design — home">
          <Image src="/images/logo.svg" alt="" width={157} height={56} priority />
        </Link>

        <nav
          id="primary-nav"
          aria-label="Primary"
          className={`${styles.nav} ${open ? styles.navOpen : ""}`}
        >
          <ul className={styles.list}>
            {links.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className={styles.link} onClick={() => setOpen(false)}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <CtaButton href="#contact" label="Book a Consultation" width={239} className={styles.cta} />

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="primary-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
