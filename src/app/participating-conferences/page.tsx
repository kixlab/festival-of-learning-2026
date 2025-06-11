import styles from '../styles/shared.module.css';
import { conferences } from '@/data/conferences';
import SchoolIcon from '@mui/icons-material/School';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import DescriptionIcon from '@mui/icons-material/Description';
import EventIcon from '@mui/icons-material/Event';

export default function ParticipatingConferences() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>Participating Conferences</h1>
        <p className={styles.subtitle} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          Join us for four premier conferences in educational technology and learning sciences
        </p>

        <section className={styles.section}>
          <div className={`${styles.grid} ${styles.gridCols2}`}>
            {conferences.map((conference) => (
              <div key={conference.id} className={styles.card} style={{ height: '100%' }}>
                <div className={styles.iconContainer} style={{ backgroundColor: 'var(--primary-light)', marginBottom: '1.5rem' }}>
                  <SchoolIcon style={{ fontSize: '2rem', color: 'white' }} />
                </div>
                <h2 className={styles.sectionTitle} style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                  {conference.name}
                </h2>
                <p className={styles.subtitle} style={{ marginBottom: '2rem' }}>
                  {conference.description}
                </p>
                <div className={styles.card} style={{ backgroundColor: 'var(--background-alt)' }}>
                  <h3 className={styles.sectionTitle} style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>
                    Important Dates
                  </h3>
                  <ul className={styles.list} style={{ margin: 0 }}>
                    <li className={styles.listItem} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <DescriptionIcon style={{ color: 'var(--primary)' }} />
                      <div>
                        <strong>Paper Submission:</strong>
                        <div>{conference.dates.paperSubmission}</div>
                      </div>
                    </li>
                    <li className={styles.listItem} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <CalendarMonthIcon style={{ color: 'var(--primary)' }} />
                      <div>
                        <strong>Notification:</strong>
                        <div>{conference.dates.notification}</div>
                      </div>
                    </li>
                    <li className={styles.listItem} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <DescriptionIcon style={{ color: 'var(--primary)' }} />
                      <div>
                        <strong>Camera Ready:</strong>
                        <div>{conference.dates.cameraReady}</div>
                      </div>
                    </li>
                    <li className={styles.listItem} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <EventIcon style={{ color: 'var(--primary)' }} />
                      <div>
                        <strong>Conference:</strong>
                        <div>{conference.dates.conference}</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
} 