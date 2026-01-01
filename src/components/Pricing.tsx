import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import styles from './Pricing.module.css';

const plans = [
    {
        id: 'basic',
        title: 'Basic Plan',
        price: '$90',
        description: 'Work closely with clients to understand their business goals, target audience.',
        features: [
            'Our Community support system',
            'Unlimited Social Media Management',
            'SEO management & copywriting',
            'Web Design & Development',
            'Priority email & phone support'
        ],
        buttonText: 'Get Started Now',
        isPopular: false
    },
    {
        id: 'business',
        title: 'Business Plan',
        price: '$100',
        description: 'Work closely with clients to understand their business goals, target audience.',
        features: [
            'Our Community support system',
            'Unlimited Social Media Management',
            'SEO management & copywriting',
            'Web Design & Development',
            'Priority email & phone support'
        ],
        buttonText: 'Purchase Now',
        isPopular: true
    },
    {
        id: 'premium',
        title: 'Premium Plan',
        price: '$187',
        description: 'Work closely with clients to understand their business goals, target audience.',
        features: [
            'Our Community support system',
            'Unlimited Social Media Management',
            'SEO management & copywriting',
            'Web Design & Development',
            'Priority email & phone support'
        ],
        buttonText: 'Purchase Now',
        isPopular: false
    }
];

export const Pricing = () => {
    return (
        <section className={styles.section}>
            <div className={`container`}>
                <div className={styles.header}>
                    <span className={styles.label}>View Plan</span>
                    <h2 className={styles.title}>View Our Pricing Plan And Start Your Project</h2>
                </div>

                <div className={styles.grid}>
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className={`${styles.card} ${plan.isPopular ? styles.businessCard : ''}`}
                        >
                            <div className={styles.cardHeader}>
                                <h3>{plan.title}</h3>
                                <p className={`${styles.description} ${plan.isPopular ? styles.businessDescription : ''}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className={styles.priceWrapper}>
                                <span className={styles.price}>{plan.price}</span>
                                <span className={styles.period}>/Month</span>
                            </div>

                            <button
                                className={`${styles.button} ${plan.isPopular ? styles.businessButton : styles.basicButton}`}
                            >
                                {plan.buttonText} <ArrowUpRight size={18} />
                            </button>

                            <span className={styles.featuresLabel}>What's Included In Plan:</span>
                            <ul className={styles.featureList}>
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className={styles.featureItem}>
                                        <Check className={styles.checkIcon} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
