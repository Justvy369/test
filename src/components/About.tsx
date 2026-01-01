import React from 'react';
import Image from 'next/image';
import { Check, Trophy } from 'lucide-react';
import styles from './About.module.css';

export const About = () => {
    return (
        <section className={styles.section} id="about">
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <span className={styles.label}>Why Choose Kulan</span>
                    <h2 className={styles.title}>We Help Your Business To Grow Up More Stronger</h2>
                    <p className={styles.description}>
                        Digital marketing agencies often run paid advertising campaigns for themselves.
                        This includes creating compelling content.
                    </p>

                    <div className={styles.awardBox}>
                        <Trophy size={40} color="var(--primary)" />
                        <div className={styles.awardText}>
                            <h4>World Marketing Wining</h4>
                            <span>Awards 2023</span>
                        </div>
                        {/* Duplicate for visual match if needed, or stick to one clean one */}
                    </div>

                    <div className={styles.checklist}>
                        <div className={styles.checkItem}>
                            <Check size={18} className={styles.checkIcon} />
                            <p className={styles.checkText}>
                                Allow customers to choose from various payment methods and offer flexible billing options to accommodate their financial preferences.
                            </p>
                        </div>
                        <div className={styles.checkItem}>
                            <Check size={18} className={styles.checkIcon} />
                            <p className={styles.checkText}>
                                Deliver excellent customer service through various channels, including phone, email, live chat, and in-person assistance at physical locations.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <div className={styles.imageInner}>
                        <Image
                            src="/about-team.png"
                            alt="Team collaboration"
                            fill
                            className={styles.image}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
