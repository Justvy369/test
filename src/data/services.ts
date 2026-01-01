export interface Service {
    id: string;
    slug: string;
    subtitle: string;
    title: string;
    image: string;
    description: string;
    additionalText?: string;
}

export const services: Service[] = [
    {
        id: '01',
        slug: 'marketing-strategy',
        subtitle: 'OPTIMIZATION',
        title: 'Marketing Strategy',
        image: '/about-team.png',
        description: 'A strong online presence begins with a well-designed website. Agencies offer web development and design services to create user-friendly, responsive, and visually appealing websites that convert visitors into customers. Data is the backbone of digital marketing. Agencies use various analytics tools to track campaign performance.',
        additionalText: 'Analyze user behavior, and make data-driven decisions to optimize strategies continually. They offer a diverse set of services designed to increase online visibility, attract and engage customers, and ultimately drive business growth in the highly competitive online marketplace. These agencies are continually adapting to evolving digital trends and technologies.'
    },
    {
        id: '02',
        slug: 'web-development',
        subtitle: 'DEVELOPMENT',
        title: 'Web Development',
        image: '/service-code.png',
        description: 'Our web development service focuses on building robust, scalable, and secure web applications. We use the latest technologies to ensure your website is fast, SEO-friendly, and provides an excellent user experience across all devices.',
        additionalText: 'From simple landing pages to complex e-commerce platforms, our team has the expertise to bring your vision to life. We prioritize clean code, performance optimization, and intuitive design to ensure your website stands out in the digital landscape.'
    },
    {
        id: '03',
        slug: 'business-strategy',
        subtitle: 'STRATEGY',
        title: 'Business Strategy',
        image: '/hero-team.png',
        description: 'We help businesses define their vision, mission, and strategic goals. Our experts analyze market trends, competitive landscape, and internal capabilities to develop comprehensive strategies that drive growth and profitability.',
        additionalText: 'Our approach focuses on identifying new opportunities, optimizing operations, and enhancing organizational performance. We work closely with key stakeholders to ensure alignment and effective execution of strategic initiatives.'
    },
    {
        id: '04',
        slug: 'email-marketing',
        subtitle: 'MARKETING',
        title: 'Email Marketing',
        image: '/service-code.png',
        description: 'Email marketing remains one of the most effective channels for checking customer engagement. We create personalized email campaigns that deliver the right message to the right audience at the right time.',
        additionalText: 'Our services include list segmentation, template design, automation, and performance tracking. We help you build lasting relationships with your customers and drive conversions through targeted email communications.'
    },
    {
        id: '05',
        slug: 'app-development',
        subtitle: 'DEVELOPMENT',
        title: 'App Development',
        image: '/hero-team.png',
        description: 'In the mobile-first era, having a dedicated app can significantly enhance customer engagement. We develop nativ and cross-platform mobile applications that offer seamless performance and intuitive user interfaces.',
        additionalText: 'We handle the entire development lifecycle, from concept to deployment. Our team ensures your app is secure, scalable, and optimized for both iOS and Android platforms, providing a superior mobile experience for your users.'
    },
    {
        id: '06',
        slug: 'marketing-analysis',
        subtitle: 'ANALYSIS',
        title: 'Marketing Analysis',
        image: '/service-analysis.png',
        description: 'Understanding the effectiveness of your marketing efforts is crucial for optimization. We provide detailed marketing analysis services to measure ROI, track KPIs, and identify areas for improvement.',
        additionalText: 'Using advanced analytics tools, we generate actionable insights that help you refine your marketing strategies. Our reports provide a clear view of campaign performance, audience behavior, and conversion funnels.'
    },
];
