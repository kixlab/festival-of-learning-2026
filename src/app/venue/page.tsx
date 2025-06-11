import styles from '../styles/shared.module.css';
import Image from 'next/image';
import MapIcon from '@mui/icons-material/Map';
import LanguageIcon from '@mui/icons-material/Language';

export default function Venue() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>Venue</h1>

        <section className={styles.section}>
          <div className={styles.card}>
            <div className={`${styles.grid} ${styles.gridCols2}`}>
              <div>
                <h2 className={styles.sectionTitle}>COEX Convention & Exhibition Center</h2>
                <p className={styles.subtitle}>
                  513, Yeongdong-daero, Gangnam-gu<br />
                  Seoul 06164, Republic of Korea
                </p>
                <div className={styles.card}>
                  <h3 className={styles.sectionTitle}>Getting There</h3>
                  <p className={styles.subtitle}>
                    <a 
                      href="https://maps.app.goo.gl/J4oP8X1AiPsfyPWr5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <MapIcon className={styles.icon} /> View on Google Maps
                    </a>
                  </p>
                  <p className={styles.subtitle}>
                    <a 
                      href="https://www.coexcenter.com/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      <LanguageIcon className={styles.icon} /> Visit COEX Website
                    </a>
                  </p>
                </div>
              </div>
              <div className={styles.flex}>
                <div className={styles.itemsCenter}>
                  <Image
                    src="/festival-of-learning-2026/images/venue/coex.jpg"
                    alt="COEX Convention & Exhibition Center"
                    width={500}
                    height={281}
                    quality={75}
                    priority
                    className={styles.venueImage}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 