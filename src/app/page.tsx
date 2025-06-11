import styles from "./styles/shared.module.css";
import { conferences } from "@/data/conferences";
import { organizationInfo } from "@/data/organization";
import { venueInfo } from "@/data/venue";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Image from 'next/image';

export default function Home() {
  const generalChairs = organizationInfo.sections[0].members;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Festival of Learning 2026</h1>
            <p className={styles.heroLocation}>Seoul, Korea</p>
            <p className={styles.heroDate}>June 29 - July 3, 2026</p>
          </div>
          <div className={styles.heroBackground}>
            <Image
              src="/festival-of-learning-2026/images/seoul/seoul_4.jpg"
              alt="Seoul cityscape"
              className={styles.heroImage}
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </div>
        </section>

        {/* Venue and Date Section */}
        <section className={styles.infoSection}>
          <div className={styles.infoContainer}>
            <h2 className={styles.sectionTitle}>Venue and Date</h2>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <CalendarTodayIcon style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }} />
                <h2 className={styles.cardTitle}>{venueInfo.when.title}</h2>
                <p className={styles.cardText}>
                  {venueInfo.when.date}
                </p>
              </div>
              <div className={styles.infoCard}>
                <LocationOnIcon style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }} />
                <h2 className={styles.cardTitle}>{venueInfo.where.title}</h2>
                <p className={styles.cardText}>
                  {venueInfo.where.venue}<br />
                  <span className={styles.highlight}>{venueInfo.where.location}</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Participating Conferences Section */}
        <section className={styles.infoSection}>
          <div className={styles.infoContainer}>
            <h2 className={styles.sectionTitle}>Participating Conferences</h2>
            <div className={styles.infoGrid} style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(4, 1fr)', 
              gap: '1.5rem',
              maxWidth: '1200px',
              margin: '0 auto'
            }}>
              {conferences.map((conference, index) => (
                <div key={index} className={styles.infoCard} style={{
                  padding: '1.5rem',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}>
                  <h3 className={styles.cardTitle}>
                    {conference.name}
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'var(--secondary)',
                    marginBottom: '0.75rem'
                  }}>
                    {conference.abbreviation}
                  </p>
                  <p className={styles.highlight} style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)'
                  }}>
                    {conference.dates.conference}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* General Chairs Section */}
        <section className={styles.infoSection}>
          <div className={styles.infoContainer}>
            <h2 className={styles.sectionTitle}>General Chairs</h2>
            <div className={styles.infoGrid}>
              {generalChairs.map((chair, index) => (
                <div key={index} className={styles.infoCard}>
                  <div style={{ 
                    width: '200px', 
                    height: '200px', 
                    position: 'relative',
                    margin: '0 auto 1rem',
                    borderRadius: '50%',
                    overflow: 'hidden'
                  }}>
                    <Image
                      src={chair.image.src}
                      alt={chair.image.alt}
                      fill
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                  <h3 className={styles.cardTitle}>{chair.name}</h3>
                  <p className={styles.cardText}>{chair.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
