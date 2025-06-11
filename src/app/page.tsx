import styles from "./page.module.css";
import { conferences } from "@/data/conferences";
import { organizationInfo } from "@/data/organization";
import { venueInfo } from "@/data/venue";
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

export default function Home() {
  const generalChairs = organizationInfo.sections[0].members;

  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>Festival of Learning 2026</h1>
            <p className={styles.location}>Seoul, Korea</p>
            <p className={styles.date}>June 29 - July 3, 2026</p>
          </div>
          <div className={styles.heroBackground}>
            <img
              src="/festival-of-learning-2026/images/seoul/seoul_4.jpg"
              alt="Seoul cityscape"
              className={styles.heroImage}
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
                  <div style={{ 
                    backgroundColor: 'var(--primary-light)', 
                    padding: '1rem',
                    borderRadius: '50%',
                    marginBottom: '1rem'
                  }}>
                    <SchoolIcon style={{ fontSize: '2rem', color: 'white' }} />
                  </div>
                  <h3 className={styles.cardTitle} style={{ 
                    fontSize: '1.25rem',
                    marginBottom: '0.75rem',
                    color: 'var(--primary)',
                    lineHeight: '1.4'
                  }}>
                    {conference.name}
                  </h3>
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
                    <img
                      src={chair.image.src}
                      alt={chair.image.alt}
                      className={styles.chairImage}
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
