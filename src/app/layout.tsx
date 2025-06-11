import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import styles from "./styles/shared.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Festival of Learning 2026",
  description: "Festival of Learning 2026 - Seoul, Korea",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
                <Link href="/program" className={styles.navLink}>
                  Program
                </Link>
                <Link href="/conferences" className={styles.navLink}>
                  Participating Conferences
                </Link>
                <Link href="/venue" className={styles.navLink}>
                  Venue
                </Link>
                <Link href="/organization" className={styles.navLink}>
                  Organization
                </Link>
                <Link href="/contact" className={styles.navLink}>
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className={styles.footer}>
          <div className={styles.container}>
            <p className={styles.footerText}>
              © 2026 Festival of Learning. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
