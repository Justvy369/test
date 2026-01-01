import React from 'react';
import { Hexagon } from 'lucide-react';

export const Footer = () => {
    return (
        <footer style={{
            backgroundColor: '#050D0C',
            padding: '80px 0 40px',
            color: 'white',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '24px', fontWeight: 'bold', marginBottom: '20px' }}>
                        <Hexagon fill="var(--primary)" stroke="none" size={24} />
                        Kulan
                    </div>
                    <p style={{ color: '#B0B0B0', lineHeight: '1.6' }}>
                        We help your business grow stronger with our digital marketing expertise.
                    </p>
                </div>

                <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: '#B0B0B0' }}>
                        <li>About Us</li>
                        <li>Our Services</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div>
                    <h4 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '20px' }}>Contact</h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', color: '#B0B0B0' }}>
                        <li>contact@kulan.agency</li>
                        <li>+1 (555) 123-4567</li>
                        <li>123 Digital Ave, Tech City</li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{ marginTop: '60px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: '#555' }}>
                © 2024 Kulan Agency. All rights reserved.
            </div>
        </footer>
    );
};
