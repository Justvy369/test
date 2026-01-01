export interface Project {
    id: string;
    slug: string;
    title: string;
    category: string;
    image: string;
    client: string;
    date: string;
    description: string;
    challenge: string;
    solution: string;
}

export const projects: Project[] = [
    {
        id: '1',
        slug: 'modern-brand-identity',
        title: 'Modern Brand Identity',
        category: 'Branding',
        image: '/case-study-1.png',
        client: 'TechStart Inc.',
        date: 'September 2024',
        description: 'A complete rebranding project for a tech startup focused on AI solutions. The goal was to create a visual identity that reflects innovation, trust, and scalability.',
        challenge: 'The old brand identity was outdated and did not communicate the company\'s cutting-edge technology. They needed a fresh look to attract investors and top talent.',
        solution: 'We developed a minimalist logo, a vibrant color palette, and a comprehensive brand guideline. The new identity has helped them secure Series A funding and increase brand recognition.'
    },
    {
        id: '2',
        slug: 'e-commerce-platform',
        title: 'Luxury E-commerce Platform',
        category: 'Web Development',
        image: '/case-study-2.png',
        client: 'Velour Fashion',
        date: 'October 2024',
        description: 'A custom-built e-commerce platform for a high-end fashion brand. The site features a seamless checkout process, high-quality image galleries, and personalized recommendations.',
        challenge: 'The client needed a scalable platform that could handle high traffic during product drops while maintaining a premium user experience.',
        solution: 'We built the site using Next.js and Shopify Headless to ensure blazing fast performance and flexibility. The result was a 40% increase in conversion rates.'
    },
    {
        id: '3',
        slug: 'marketing-dashboard',
        title: 'Analytics Dashboard',
        category: 'App Development',
        image: '/case-study-3.png',
        client: 'DataFlow Systems',
        date: 'August 2024',
        description: 'An interactive dashboard for a marketing analytics tool. It visualizes complex data sets in an easy-to-understand format for marketing teams.',
        challenge: 'Users were finding the existing tools too complex and difficult to navigate. The client wanted a user-friendly interface that simplifies data analysis.',
        solution: 'We designed a intuitive UI/UX with customizable widgets and real-time data updates. User engagement increased by 60% after the launch.'
    },
    {
        id: '4',
        slug: 'social-media-campaign',
        title: 'Viral Social Campaign',
        category: 'Marketing',
        image: '/hero-team.png',
        client: 'EcoLife',
        date: 'July 2024',
        description: 'A social media campaign to promote sustainable living products. The campaign utilized influencer marketing and user-generated content.',
        challenge: 'The brand was struggling to reach a younger demographic and increase brand awareness on social platforms.',
        solution: 'We created a challenge-based campaign that encouraged users to share their eco-friendly habits. The campaign went viral, reaching over 1 million users organically.'
    },
    {
        id: '5',
        slug: 'corporate-website-redesign',
        title: 'Corporate Website Redesign',
        category: 'Web Design',
        image: '/service-analysis.png',
        client: 'Global Finance Group',
        date: 'November 2024',
        description: 'A tailored website redesign for a global financial firm. The new site focuses on accessibility, speed, and clear communication of services.',
        challenge: 'The legacy website was slow, non-responsive, and failed to comply with modern accessibility standards.',
        solution: 'We rebuilt the site from scratch using modern web technologies, ensuring WCAG compliance and mobile responsiveness. Bounce rates decreased by 35%.'
    },
    {
        id: '6',
        slug: 'mobile-banking-app',
        title: 'Mobile Banking App',
        category: 'App Design',
        image: '/service-code.png',
        client: 'NeoBank',
        date: 'June 2024',
        description: 'UI/UX design for a next-generation mobile banking application. The focus was on security, simplicity, and personalized financial insights.',
        challenge: 'Trust is crucial in banking. The design needed to feel secure and professional while also being approachable for younger users.',
        solution: 'We used biometric authentication flows and a clean, card-based interface. User testing showed a 9/10 satisfaction score for ease of use.'
    }
];
