import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.decorativeLine}></div>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span className={styles.logoIcon}>🎵</span>
              <div>
                <h3 className={styles.logoTitle}>मधुकंस</h3>
                <p className={styles.logoSubtitle}>Madhukauns</p>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Promoting Indian Classical Music through competitive excellence, 
              in association with Gandharva Mahavidyalaya, Pune.
            </p>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <Link href="/" className={styles.footerLink}>Home</Link>
            <Link href="/competitions" className={styles.footerLink}>Competitions</Link>
            <Link href="/rules" className={styles.footerLink}>Rules & Regulations</Link>
            <Link href="/prizes" className={styles.footerLink}>Prizes</Link>
            <Link href="/contact" className={styles.footerLink}>Contact Us</Link>
          </div>

          {/* Competitions */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Competitions</h4>
            <span className={styles.footerText}>Hindustani Classical Vocal</span>
            <span className={styles.footerText}>Tabla Solo</span>
            <span className={styles.footerText}>Kathak Dance</span>
            <span className={styles.footerText}>Harmonium Solo</span>
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4 className={styles.columnTitle}>Contact Us</h4>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📍</span>
              <span>B-2, Mangalmurty Complex, Sinhagad Road, Pune – 411030</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>📞</span>
              <span>+91 98814 25448 / +91 98500 82435</span>
            </div>
            <div className={styles.contactItem}>
              <span className={styles.contactIcon}>✉️</span>
              <a href="mailto:madhukauns@gmail.com">madhukauns@gmail.com</a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.ornament}>
            <span className={styles.ornamentLine}></span>
            <span className={styles.ornamentDiamond}></span>
            <span className={styles.ornamentLine}></span>
          </div>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Madhukauns. All rights reserved. All legal matters under Pune Jurisdiction only.
          </p>
          <p className={styles.venue}>
            Venue: Vishnu Vinayak Swarmandir, Gandharva Mahavidyalaya, Shaniwar Peth, Near Prabhat Talkies, Pune – 411030
          </p>
        </div>
      </div>
    </footer>
  );
}
