import styles from '../styles/shared.module.css';
import { conferences } from '@/data/conferences';
import EventIcon from '@mui/icons-material/Event';
import GroupsIcon from '@mui/icons-material/Groups';

export default function Program() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>Program</h1>
        
        <section className={styles.section}>
          <div className={styles.card}>
            <div className={styles.flex} style={{ alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <EventIcon style={{ fontSize: '2rem', color: 'var(--primary)' }} />
              <h2 className={styles.sectionTitle} style={{ margin: 0 }}>
                Conference Dates: June 29 - July 3, 2026
              </h2>
            </div>
            <p className={styles.subtitle}>
              The Festival of Learning 2026 brings together three premier conferences in educational technology and learning sciences. 
              Each conference will host its own sessions while also participating in shared events and sessions.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.flex} style={{ alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <GroupsIcon style={{ fontSize: '2rem', color: 'var(--primary)' }} />
              <h2 className={styles.sectionTitle} style={{ margin: 0 }}>
                Shared Sessions & Events
              </h2>
            </div>
            <p className={styles.subtitle}>
              In addition to individual conference sessions, we are planning several shared events and sessions 
              that will bring together participants from all three conferences. These shared activities will 
              provide unique opportunities for cross-conference collaboration and networking.
            </p>
            <div className={styles.alert}>
              <p>
                Detailed program schedule including shared sessions and events will be announced in early 2026.
              </p>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Participating Conferences</h2>
            <div className={`${styles.grid} ${styles.gridCols3}`}>
              {conferences.map((conference) => (
                <div key={conference.id} className={styles.card} style={{ backgroundColor: 'var(--background-alt)' }}>
                  <h3 className={styles.sectionTitle} style={{ fontSize: '1.25rem' }}>
                    {conference.name}
                  </h3>
                  <p className={styles.subtitle} style={{ marginBottom: 0 }}>
                    Individual conference sessions and workshops will be announced by each conference.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 