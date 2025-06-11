import Image from "next/image";
import styles from "./page.module.css";
import { organizationInfo } from "@/data/organization";

export default function Organization() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{organizationInfo.title}</h1>
        <p className={styles.description}>{organizationInfo.description}</p>

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
                      width={member.image.width}
                      height={member.image.height}
                      className={styles.memberImage}
                    />
                  </div>
                  <h3 className={styles.memberName}>{member.name}</h3>
                  <p className={styles.memberRole}>{member.role}</p>
                  <p className={styles.memberInstitution}>{member.institution}</p>
                 </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
} 