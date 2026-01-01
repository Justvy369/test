import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './HeroModern.module.css';

export const HeroModern = () => {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <div className={styles.badge}>Digital Marketing Agency</div>

                    <h1 className={styles.title}>
                        Digital Marketing Solution For Your Business
                    </h1>

                    <p className={styles.description}>
                        Digital marketing agencies often run paid advertising campaigns for themselves.
                        This includes creating compelling ad copy for platforms like Google Ads, Facebook Ads, and LinkedIn Ads.
                    </p>

                    <div>
                        <button className={styles.ctaButton}>
                            Schedule a Free Consultation
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                <div className={styles.imageWrapper}>
                    <Image
                        src="/hero-modern-team.png"
                        alt="Creative team brainstorming"
                        fill
                        className={styles.image}
                        priority
                    />
                </div>
            </div>
        </section>
    );
};
