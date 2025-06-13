import styles from '../styles/shared.module.css';
import { organizationInfo } from '@/data/organization';
import Image from 'next/image';

export default function Organization() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        <h1 className={styles.title}>Organization</h1>
        <p className={styles.subtitle}>
          
        </p>

        {organizationInfo.sections.map((section, index) => (
          <section key={index} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <div className={styles.membersGrid}>
              {section.members.map((member, memberIndex) => (
                <div key={memberIndex} className={styles.memberCard}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={member.image.src}
                      alt={member.image.alt}
                      fill
                      sizes="150px"
                      style={{ 
                        objectFit: 'cover',
                        objectPosition: 'center'
                      }}
                      priority={index === 0 && memberIndex === 0}
                      className={styles.memberImage}
                    />
                  </div>
                  <h3 className={styles.memberName} style={{ textAlign: 'center' }}>{member.name}</h3>
                  <p className={styles.memberRole} style={{ textAlign: 'center' }}>{member.role}</p>
                  <p className={styles.memberInstitution} style={{ textAlign: 'center' }}>{member.institution}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
} 