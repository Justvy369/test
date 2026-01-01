export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    image: string;
    category: string;
    content: string;
}

export const blogs: BlogPost[] = [
    {
        id: '1',
        slug: 'seo-analytics-growth',
        title: 'How SEO Analytics Can Help Your Business Growth',
        excerpt: 'SEO analytics provide valuable insights into your audience and website performance...',
        date: 'Oct 24, 2024',
        author: 'John Doe',
        image: '/hero-team.png', // Using existing images for now
        category: 'SEO',
        content: 'SEO analytics is the process of collecting, tracking, and analyzing data about your website\'s organic search performance. By understanding how users find and interact with your site, you can make informed decisions to improve your rankings and drive more traffic. Key metrics to track include organic traffic, keyword rankings, bounce rate, and conversion rate. Implementing a robust SEO analytics strategy allows you to identify opportunities for growth, optimize your content, and stay ahead of the competition. Regular analysis helps in understanding the effectiveness of your SEO efforts and ROI.'
    },
    {
        id: '2',
        slug: 'digital-marketing-trends-2025',
        title: 'Top Digital Marketing Trends to Watch in 2025',
        excerpt: 'Stay ahead of the curve with these emerging digital marketing trends for the upcoming year...',
        date: 'Nov 02, 2024',
        author: 'Jane Smith',
        image: '/service-analysis.png',
        category: 'Marketing',
        content: 'As we approach 2025, the digital marketing landscape continues to evolve rapidly. Artificial Intelligence (AI) is becoming more integrated into marketing strategies, offering hyper-personalization and automated customer service. Video content, particularly short-form video, remains dominant across social platforms. Voice search optimization is gaining importance as smart speakers become ubiquitous. Sustainability and ethical marketing are also influencing consumer choices. Marketers must adapt to these trends to remain relevant and connect with their target audience effectively.'
    },
    {
        id: '3',
        slug: 'importance-of-web-design',
        title: 'Why Professional Web Design Matters for Your Brand',
        excerpt: 'Your website is often the first interaction customers have with your brand. Make it count...',
        date: 'Nov 15, 2024',
        author: 'Mike Johnson',
        image: '/service-code.png',
        category: 'Web Design',
        content: 'First impressions matter, and in the digital world, your website is your storefront. A professional web design establishes credibility and trust with your visitors. It ensures your site is responsive, mobile-friendly, and easy to navigate, providing a positive user experience. Good design also supports your SEO efforts and improves conversion rates. investing in professional web design is investing in your brand\'s long-term success and online visibility.'
    },
    {
        id: '4',
        slug: 'email-marketing-strategies',
        title: 'Effective Email Marketing Strategies for 2024',
        excerpt: 'Email marketing remains a powerful tool. Learn how to maximize your open and click-through rates...',
        date: 'Nov 20, 2024',
        author: 'Sarah Lee',
        image: '/hero-modern-team.png',
        category: 'Email Marketing',
        content: 'Despite the rise of social media, email marketing continues to deliver one of the highest ROIs. To succeed, personalization is key—segment your audience and tailor your messages to their specific needs. Automation sequences can nurture leads and drive sales on autopilot. optimizing subject lines and using engaging visuals can significantly boost open rates. Remember to ensure your emails are mobile-optimized and comply with privacy regulations. Consistent testing and analysis will help you refine your strategy over time.'
    },
    {
        id: '5',
        slug: 'social-media-engagement',
        title: 'Boosting Social Media Engagement Organically',
        excerpt: 'Unlock the secrets to growing your social media presence without spending a fortune on ads...',
        date: 'Dec 01, 2024',
        author: 'David Chen',
        image: '/about-team.png',
        category: 'Social Media',
        content: 'Organic social media growth requires consistency and genuine interaction. Focus on creating high-quality, shareable content that resonates with your audience. Engage with your followers by responding to comments and messages promptly. Use hashtags strategically to increase discoverability. Collaborating with influencers or other brands can also expand your reach. Storytelling is a powerful way to connect emotionally with your audience. By building a community around your brand, you foster loyalty and advocacy.'
    },
    {
        id: '6',
        slug: 'content-marketing-101',
        title: 'Content Marketing 101: A Guide for Beginners',
        excerpt: 'Everything you need to know to start a successful content marketing campaign...',
        date: 'Dec 05, 2024',
        author: 'Emily White',
        image: '/case-study-1.png',
        category: 'Content',
        content: 'Content marketing is about creating and distributing valuable, relevant, and consistent content to attract and retain a clearly defined audience. It builds expertise, authority, and trust. Start by defining your goals and understanding your target audience. Create a content calendar to maintain consistency. formats can range from blog posts and videos to infographics and podcasts. Promotion is just as important as creation—share your content across various channels. Measure your results to understand what works and adjust your strategy accordingly.'
    },
    {
        id: '7',
        slug: 'ppc-advertising-basics',
        title: 'PPC Advertising: A Quick Guide',
        excerpt: 'Learn the basics of Pay-Per-Click advertising and how it can drive instant traffic...',
        date: 'Dec 10, 2024',
        author: 'Chris Green',
        image: '/case-study-2.png',
        category: 'PPC',
        content: 'Pay-Per-Click (PPC) advertising is a model where advertisers pay a fee each time one of their ads is clicked. It allows you to bid for ad placement in a search engine\'s sponsored links. Google Ads is the most popular PPC platform. Successful PPC campaigns require careful keyword research, compelling ad copy, and optimized landing pages. Budget management is crucial to ensure a positive ROI. Regular monitoring and A/B testing help refine your ads and improve performance.'
    },
    {
        id: '8',
        slug: 'brand-identity-essentials',
        title: 'Building a Strong Brand Identity',
        excerpt: 'Your brand is more than just a logo. Discover the essential elements of a strong brand identity...',
        date: 'Dec 15, 2024',
        author: 'Anna Brown',
        image: '/case-study-3.png',
        category: 'Branding',
        content: 'Brand identity encompasses the visual elements of your brand, such as color palette, typography, and logo, as well as your brand voice and values. A strong brand identity sets you apart from the competition and makes your brand memorable. Consistency is key across all touchpoints, from your website to your social media profiles. Understanding your target audience helps in shaping an identity that resonates with them. A well-defined brand identity fosters trust and loyalty among your customers.'
    }
];
