import styles from '../styles/shared.module.css';
import EmailIcon from '@mui/icons-material/Email';

export default function Contact() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>Contact</h1>

        <section className={styles.section}>
          <div className={styles.card}>
            <div className={styles.flex} style={{ alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
              <EmailIcon style={{ fontSize: '2rem', color: 'var(--primary)' }} />
              <h2 className={styles.sectionTitle} style={{ margin: 0 }}>
                General Inquiries
              </h2>
            </div>
            <p className={styles.subtitle} style={{ textAlign: 'left' }}>
              For any questions about the Festival of Learning 2026, please contact:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'flex-start' }}>
              <a 
                href="mailto:juhokim@kaist.ac.kr"
                className={styles.link}
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  fontSize: '1.1rem'
                }}
              >
                <EmailIcon style={{ fontSize: '1.2rem' }} />
                juhokim@kaist.ac.kr
              </a>
              <a 
                href="mailto:alice.oh@kaist.edu"
                className={styles.link}
                style={{ 
                  display: 'inline-flex', 
                  alignItems: 'center', 
                  gap: '0.5rem',
                  fontSize: '1.1rem'
                }}
              >
                <EmailIcon style={{ fontSize: '1.2rem' }} />
                alice.oh@kaist.edu
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 