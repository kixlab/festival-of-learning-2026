import Link from 'next/link';
import styles from '../styles/shared.module.css';

export default function Navigation() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <Link href="/" className={styles.logo}>
            Festival of Learning 2026
          </Link>
          <div className={styles.navLinks}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
            <Link href="/program" className={styles.navLink}>
              Program
            </Link>
            <Link href="/venue" className={styles.navLink}>
              Venue
            </Link>
            <Link href="/participating-conferences" className={styles.navLink}>
              Participating Conferences
            </Link>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 