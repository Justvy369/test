import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import styles from './ContactInfo.module.css';

export const ContactInfo = () => {
    return (
        <section className={styles.section}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <Mail size={24} />
                    </div>
                    <div className={styles.content}>
                        <h4>Email Address</h4>
                        <p>info@gmail.com</p>
                        <p>helloinfo@gmail.com</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <MapPin size={24} />
                    </div>
                    <div className={styles.content}>
                        <h4>Our Location</h4>
                        <p>1234 East 27th Street,</p>
                        <p>New York, NY 101010</p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.iconWrapper}>
                        <Phone size={24} />
                    </div>
                    <div className={styles.content}>
                        <h4>Phone Number</h4>
                        <p>+74 73422 9342</p>
                        <p>+34 9433 04323</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
