'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const close = () => setMobileOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`} id="main-nav">
      <div className={styles.container}>
        <Link href="/" className={styles.logo} id="nav-logo">
          <div className={styles.logoImageWrap}>
            <Image
              src="/images/logo.jpg"
              alt="Madhukauns logo"
              width={44}
              height={44}
              className={styles.logoImage}
            />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoTitle}>Madhukauns</span>
            <span className={styles.logoSubtitle}>Classical Music</span>
          </div>
        </Link>

        <div className={`${styles.links} ${mobileOpen ? styles.linksOpen : ''}`}>
          <Link href="/" className={styles.link} id="nav-home" onClick={close}>Home</Link>
          <Link href="/competitions" className={styles.link} id="nav-competitions" onClick={close}>Competitions</Link>
          <Link href="/rules" className={styles.link} id="nav-rules" onClick={close}>Rules</Link>
          <Link href="/prizes" className={styles.link} id="nav-prizes" onClick={close}>Prizes</Link>
          <Link href="/contact" className={styles.link} id="nav-contact" onClick={close}>Contact</Link>
          <Link href="/competitions" className={`btn btn--gold btn--sm ${styles.ctaBtn}`} id="nav-register" onClick={close}>
            Register Now
          </Link>
        </div>

        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
          id="nav-hamburger"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}