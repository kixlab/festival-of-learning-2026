import Image from "next/image";
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
            <h1 className={styles.title} style={{ fontSize: '4rem', marginBottom: '1rem' }}>
              Festival of Learning 2026
            </h1>
            <p className={styles.location} style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>
              Seoul, Korea
            </p>
            <p className={styles.date} style={{ fontSize: '2rem', marginBottom: '2rem' }}>
              June 29 - July 3, 2026
            </p>
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
            <div className={styles.infoGrid}>
              {conferences.map((conference, index) => (
                <div key={index} className={styles.infoCard}>
                  <SchoolIcon style={{ fontSize: '2rem', color: 'var(--primary)', marginBottom: '1rem' }} />
                  <h3 className={styles.cardTitle}>{conference.name}</h3>
                  <p className={styles.highlight}>{conference.dates.conference}</p>
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
                  {'description' in chair && chair.description && (
                    <p className={styles.cardText}>{chair.description}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
