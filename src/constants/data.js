/*
    File: data.js
    Author: Baron Gobi
    Copyright: 2024 - Baron Gobi
    Version: 1.0
*/

import * as Icons from "../components/Icons";

export const navMenu = [
    {
        id: 'Home',
        href: '/',
    },
    // {
    //     id: 'Services',
    //     href: '/services',
    // },
    {
        id: 'About',
        href: '/about',
    },
    {
        id: 'Resume',
        href: '/resume',
    },
]

export const projects = [
    {
        title: 'Amasty Advanced Review Integration on Rareseeds',
        src: './assets/images/projects/Rareseeds.webp',
        altText: 'Screenshot of Rareseeds Product Review',
        ariaLabel: "Opens modal window with more information about the Amasty Advanced Review on Rareseeds project",
        details: {
            description: "Amasty Advanced Review has not been supporting ScandiPWA (PWA react based) " + 
            "for its implementation on Rareseeds project. My responsibility here is to provide compatibility " +
            "between Amasty Advanced Review with ScandiPWA via GraphQL and invent new endpoint to support the " + 
            "needs on FE implementation such as query etc. Besides, creation of component and container via " +
            "plugin have been done to present the data from BE. Implement compatibility feature such as filtering, vote up/down, " +
            "write a comment on specific product review, upload images on review, star summary calculation",
            technologies: [
                {
                    title: 'HTML',
                    Icon: Icons.HtmlIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
                {
                    title: 'Magento 2',
                    Icon: Icons.MagentoIcon,
                },
                {
                    title: 'PHP',
                    Icon: Icons.PHPIcon,
                },
                {
                    title: 'MySQL',
                    Icon: Icons.MySQLIcon,
                },
                {
                    title: 'React',
                    Icon: Icons.ReactIcon,
                },
                {
                    title: 'Docker',
                    Icon: Icons.DockerIcon,
                },
                {
                    title: 'Ubuntu Linux',
                    Icon: Icons.UbuntuIcon,
                },
                {
                    title: 'ElasticSearch',
                    Icon: Icons.ElasticSearchIcon,
                },
                {
                    title: 'SCSS',
                    Icon: Icons.ScssIcon,
                },
                {
                    title: 'API',
                    Icon: Icons.APIIcon,
                },
                {
                    title: 'AWS',
                    Icon: Icons.AwsIcon,
                },
            ],
            url: 'https://www.rareseeds.com/ageratum-leda',
            githubUrl: null,
        },
    },
    {
        title: 'Image Optimization on vaping.com project',
        src: './assets/images/projects/pagespeed.webp',
        altText: 'Screenshot of Vaping.com PageSpeed Results',
        ariaLabel: "Opens modal window with more information about the vaping web project",
        details: {
            description: "There is a need to optimize load images on this project. The use of the Fastly CDN "+ 
            "and lazy load have been taken a place. As a result of my contribution in optimizing image load on "+
            "desktop device, it is resulting 90+ score on Google pageload speed",
            technologies: [
                {
                    title: 'HTML',
                    Icon: Icons.HtmlIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
                {
                    title: 'Magento 2',
                    Icon: Icons.MagentoIcon,
                },
                {
                    title: 'PHP',
                    Icon: Icons.PHPIcon,
                },
                {
                    title: 'MySQL',
                    Icon: Icons.MySQLIcon,
                },
                {
                    title: 'React',
                    Icon: Icons.ReactIcon,
                },
                {
                    title: 'Docker',
                    Icon: Icons.DockerIcon,
                },
                {
                    title: 'Ubuntu Linux',
                    Icon: Icons.UbuntuIcon,
                },
                {
                    title: 'ElasticSearch',
                    Icon: Icons.ElasticSearchIcon,
                },
                {
                    title: 'SCSS',
                    Icon: Icons.ScssIcon,
                },
            ],
            url: 'https://vaping.com/',
            githubUrl: null,
        },
    },
    {
        title: 'PPI Edufest 2022',
        src: './assets/images/projects/ppi-edufest-2022.webp',
        altText: 'Screenshot of PPI Edufest 2022 home page',
        ariaLabel: "Opens modal window with more information about the PPI Edufest 2022 web project",
        details: {
            description: "An event registration website designed using Bootstrap, HTML, PHP Laravel, JavaScript, and a hint of jQuery. This project involves the integration of Google API (Gdrive and Gform), and provide the REST API endpoint to be consumed by any of Frontend. Now the project has been dropped due to management has been replaced. However, the documentation has been uploaded via Youtube, the link has been attached",
            technologies: [
                {
                    title: 'HTML',
                    Icon: Icons.HtmlIcon,
                },
                {
                    title: 'CSS',
                    Icon: Icons.CSSIcon,
                },
                {
                    title: 'JavaScript',
                    Icon: Icons.JavascriptIcon,
                },
                {
                    title: 'jQuery',
                    Icon: Icons.JQueryIcon,
                },
                {
                    title: 'PHP',
                    Icon: Icons.PHPIcon,
                },
                {
                    title: 'Laravel',
                    Icon: Icons.LaravelIcon,
                },
                {
                    title: 'MySQL',
                    Icon: Icons.MySQLIcon,
                },
                {
                    title: 'Navicat',
                    Icon: Icons.NavicatIcon,
                },
                {
                    title: 'Bootstrap',
                    Icon: Icons.BootstrapIcon,
                },
                {
                    title: 'Postman',
                    Icon: Icons.PostmanIcon,
                },
                {
                    title: 'REST API',
                    Icon: Icons.RestAPIIcon,
                },
            ],
            url: "https://youtu.be/dVHelEadSYQ?si=dHKC_o9tuZze2J24",
            githubUrl: "https://github.com/Barongobber/ppi_edufest_2022",
        },
    },
]

export const testimonials = [
    {
        quote: "Baron was an outstanding member of our team when he served as the project lead for our PPI Edufest website. His exceptional skills and dedication were noticeable when working in our team, especially in the creation of a very good website that exceeded our expectations. Baron is also known for his diligence as he consistently met the deadlines and ensured the success of our projects. His commitment is remarkable and his work ethic is the key factor that sets him apart from the other team members. Overall, Baron is a very good team player and a friend which would make him an invaluable asset wherever he works.",
        name: 'Zafran Akhmadery Arif',
        title: 'Secretary-General of PPI Se-Dunia',
        src: './assets/images/testimonials/zafran.webp',
        altText: 'Profile of Zafran.',
    }
]

export const socialMedias = [
    {
        href: 'mailto:barongobirn@gmail.com',
        ariaLabel: 'Compose an email to Baron',
        title: 'Write an Email to Baron',
        Icon: Icons.EmailIcon,
    },
    {
        href: 'https://www.linkedin.com/in/barongobirn/',
        ariaLabel: 'Goes to Baron&apos;s LinkedIn profile',
        title: 'LinkedIn Profile',
        Icon: Icons.LinkedInIcon,
    },
    {
        href: 'https://github.com/Barongobber',
        ariaLabel: 'Goes to Baron&apos;s GitHub profile',
        title: 'GitHub Profile',
        Icon: Icons.GitHubIcon,
    },
];

export const techSkills = [
    {
        category: 'Front-End Development',
        skills: [
            {
                title: 'HTML',
                Icon: Icons.HtmlIcon,
            },
            {
                title: 'CSS',
                Icon: Icons.CSSIcon,
            },
            {
                title: 'Bootstrap',
                Icon: Icons.BootstrapIcon,
            },
            {
                title: 'JavaScript',
                Icon: Icons.JavascriptIcon,
            },
            {
                title: 'React',
                Icon: Icons.ReactIcon,
            },
            {
                title: 'jQuery',
                Icon: Icons.JQueryIcon,
            },
            {
                title: 'Angular',
                Icon: Icons.AngularIcon,
            },
            {
                title: 'SCSS',
                Icon: Icons.ScssIcon,
            },
        ],
    },
    {
        category: 'Back-End Development',
        skills: [
            {
                title: 'PHP',
                Icon: Icons.PHPIcon,
            },
            {
                title: 'Magento 2',
                Icon: Icons.MagentoIcon,
            },
            {
                title: 'MySQL',
                Icon: Icons.MySQLIcon,
            },
            {
                title: 'Laravel',
                Icon: Icons.LaravelIcon,
            },
            {
                title: 'ElasticSearch',
                Icon: Icons.ElasticSearchIcon,
            },
        ],
    },
    {
        category: 'Programming Languages',
        skills: [
            {
                title: 'Java',
                Icon: Icons.JavaIcon,
            },
            {
                title: 'C++',
                Icon: Icons.CplusplusIcon,
            },
            {
                title: 'Typescript',
                Icon: Icons.TypescriptIcon,
            },
            {
                title: 'Javascript',
                Icon: Icons.JavascriptIcon,
            },
            {
                title: 'PHP',
                Icon: Icons.PHPIcon,
            },
        ],
    },
    {
        category: 'Content Management Systems',
        skills: [
            {
                title: 'WordPress',
                Icon: Icons.WordPressIcon,
            },
            {
                title: 'Magento 2',
                Icon: Icons.MagentoIcon,
            },
        ],
    },
    {
        category: 'Build Tools, Frameworks, and Versioning',
        skills: [
            {
                title: 'Git',
                Icon: Icons.GitIcon,
            },
            {
                title: 'Docker',
                Icon: Icons.DockerIcon,
            },
            {
                title: 'GitHub',
                Icon: Icons.GitHubIcon,
            },
            {
                title: 'Navicat',
                Icon: Icons.NavicatIcon,
            },
            {
                title: 'Laravel',
                Icon: Icons.LaravelIcon,
            },
            {
                title: 'Angular',
                Icon: Icons.AngularIcon,
            },
            {
                title: 'React',
                Icon: Icons.ReactIcon,
            },
            {
                title: 'Postman',
                Icon: Icons.PostmanIcon,
            },
            {
                title: 'Linux Ubuntu',
                Icon: Icons.UbuntuIcon,
            },
            {
                title: 'Jira',
                Icon: Icons.JiraIcon,
            },
        ],
    },
    {
        category: 'Design and Prototyping',
        skills: [
            {
                title: 'Responsive Design',
                Icon: Icons.ResponsiveDesignIcon,
            },
            {
                title: 'Figma',
                Icon: Icons.FigmaIcon,
            },
            {
                title: 'Bootstrap Studio',
                Icon: Icons.BootstrapIcon,
            },
        ],
    },
    {
        category: 'Others',
        skills: [
            {
                title: 'APIs',
                Icon: Icons.APIIcon,
            },
            {
                title: 'REST APIs',
                Icon: Icons.RestAPIIcon,
            },
        ],
    },
];

export const softSkills = [
    {
        title: 'Creativity',
        Icon: Icons.BrightIdeaIcon,
    },
    {
        title: 'Teamwork',
        Icon: Icons.TeamworkIcon,
    },
    {
        title: 'Public Speaking',
        Icon: Icons.PublicSpeakingIcon,
    },
    {
        title: 'Time Management',
        Icon: Icons.ScheduleIcon,
    },
];

export const workExp = [
    {
        company: 'Tomato. Co., Ltd',
        location: 'Tokyo, Japan',
        positions: [
            {
                title: 'Website Developer',
                startDate: new Date(2024, 3),
                endDate: 'present',
            },
        ],
        tasks: [
            "Attending practical Angular training",
        ],
    },
    {
        company: 'Scandiweb',
        location: 'Remote, Riga, Latvia',
        positions: [
            {
                title: 'Web Developer',
                startDate: new Date(2022, 2),
                endDate: new Date(2024, 1),
            },
        ],
        tasks: [
            "Improved PWA (using ScandiPWA, that is based on React.JS) utilization in PHP Magento 2 application which resulted in an increment in Google Page Speed Insight from 65+ to 90+ for mobile and desktop",
            "Established new order stuck reminder feature in PHP Magento 2 which made the store customer service receives the emails to proceed with stuck orders manually on the production",
            "Worked using CMA (Create Magento Application) that runs docker containers for all prerequisites of the Magento 2 application (Including Redis, Elasticsearch, Nginx, MariaDB)",
            "Developed Frontend PWA compatibilities for 3rd party-extension module such as Amasty Shop by Brand, Amasty Product Labels, Amasty Advanced Review, Mageplaza Free Gift into and published it on the marketplace",
            "Maximized the use of Fastly CDN to generate desired photo size based on the user device, resulting 5-10% improvement in loading time and data consumption efficiencyDemonstrate expertise in designing custom WordPress themes and plugins, enhancing website functionality and user interactivity",
        ],
    },
    {
        company: 'OISAA - Edufest',
        location: 'Jakarta, Indonesia',
        positions: [
            {
                title: 'Full-Stack Developer & Head of IT Division',
                startDate: new Date(2020, 11),
                endDate: new Date(2022, 5),
            },
        ],
        tasks: [
            "Initialized Education Festival registration website procurement and integrated it with Google services such as Gform and GDrive which made this event known and accessible to residents in all regions of Indonesia",
            "Designed MySQL database using Navicat up to the external level and generated it using PHP Laravel Eloquent, resulting in various users can see the database in different ways depending on their roles in the event.",
            "Launched an event registration website system built primarily using Bootstrap, JQuery, HTML, PHP Laravel, and MySQL that can hold 40+ agendas along with 100+ speakers and recorded 8000+ registrants",
            "Created an Artificial Intelligence service utilizing Google API and PHP library which generated a list of participants who are eligible for a certificate based on attendance at the online event and tested 100% reliable",
            "Supervised a team of 4 members to execute website development and produced budgeting, resulting 90% on-time deliverables utilizing JIRA Kanban boards and 80% cost-saving using Github Student Developer Pack privileges"
        ],
    },
];

export const extracurriculars = [
    {
        company: 'International Student Society of Indonesia UTM',
        location: 'Johor Bahru, Malaysia',
        positions: [
            {
                title: 'Director of Event of Computing Test Preparation',
                startDate: new Date(2019, 9),
                endDate: new Date(2020, 1),
            },
        ],
        tasks: [
            "Led a committee of the event and collaborated with final year students to do mentoring session that making 90% of attendees passed subject being taught",
            "Spearhead event information among Indonesian students in the campus using Instagram and wall magazine as main platform, resulting 100+ registrants and 60+ attendees all Indonesians",
            "Mentored freshmen and sophomore year students in digital logic and programming technique subjects which decreasing number of the Indonesian students repeating mentioned subjects by 80%",
        ],
    },
];

export const educations = [
    {
        degree: 'BCs in Software Engineering',
        school: 'University Technology of Malaysia',
        startDate: new Date(2019, 1),
        endDate: new Date(2024, 2),
        location: 'Johor Bahru, Malaysia',
        grade: '3.88/4',
    },
];

export const dessertImages = [
    {
        src: './assets/images/desserts/oreo-cupcakes.webp',
        altText: 'Oreo cupcakes with the toastmasters club 10th anniversary cupcake topper',
        value: 'oreo-cupcakes',
        label: 'Oreo cupcakes',
    },
    {
        src: './assets/images/desserts/bagel-cake.webp',
        altText: 'Large cake decorated to look like an everything bagel',
        value: 'bagel-cake',
        label: 'Everything bagel cake',
    },
    {
        src: './assets/images/desserts/souffle.webp',
        altText: 'Cheese souffle in a ramekin',
        value: 'souffle',
        label: 'Cheese souffle',
    },
    {
        src: './assets/images/desserts/cookies.webp',
        altText: 'Plate of chocolate chip cookies',
        value: 'cookies',
        label: 'Chocolate chip cookies',
    },
    {
        src: './assets/images/desserts/macaron-cupcake.webp',
        altText: 'Red velvet cupcake with cream cheese frosting with a strawberry macaron on top',
        value: 'macaron-cupcakes',
        label: 'Red velvet cupcake',
    },
    {
        src: './assets/images/desserts/cannoli-cupcakes.webp',
        altText: 'Cannoli cupcakes with chocolate chips on top',
        value: 'cannoli-cupcakes',
        label: 'Cannoli cupcakes',
    },
];

export const generalServices = [
    {
        title: 'Consulting and Strategy',
        description: "I work closely alongside you to understand your goals, target audience, and business objectives. Using this insight, I develop a strategic plan designed to seamlessly transform your goals into a captivating digital presence.",
        Icon: Icons.HandshakeIcon,
    },
    {
        title: 'Branding',
        description: "Let's craft a distinctive visual identity that resonates with your brand. An identity that not only establishes a strong visual presence, but also forges a profound connection with your audience, fostering a sense of trust and authenticity.",
        Icon: Icons.BrightIdeaIcon,
    },
    {
        title: 'Competitor Analysis',
        description: "Through my competitor analysis service, I delve deep into the strategies employed within your industry or niche. Armed with this insight, you gain a distinct advantage, positioning yourself uniquely from others.",
        Icon: Icons.TargetIcon,
    },
    {
        title: 'Front-End Development',
        description: "Infusing artistry into functionality, my web design prowess creates visually stunning and intuitive interfaces that captivate your audience. Aesthetics and usability should go hand in hand.",
        Icon: Icons.WebDesignIcon,
    },
    {
        title: 'Back-End Development',
        description: "Fueling your website's functionality behind the scenes, I create dynamic processes that bridge your business requirements and your website. Expect nothing less than efficient, user-friendly functionality that adds value to their experience.",
        Icon: Icons.ServerIcon,
    },
    {
        title: 'Responsive Design',
        description: "Your website will be flawlessly showcased across all screens for optimal viewing experience. Responsive design ensures your online presence adapts seamlessly to devices of all sizes.",
        Icon: Icons.DesktopMobileIcon,
    },
];

export const specialties = [
    {
        title: 'Web Hosting and Deployment',
        Icon: Icons.DatabaseIcon,
    },
    {
        title: 'API Development and Integration',
        Icon: Icons.APIIcon,
    },
    {
        title: 'Custom Web Applications',
        Icon: Icons.ProgrammingIcon,
    },
    {
        title: 'Portfolio Websites',
        Icon: Icons.PortfolioIcon,
    },
    {
        title: 'CMS Development and Customization',
        Icon: Icons.WebContentIcon,
    },
    {
        title: 'Web Performance Optimization',
        Icon: Icons.RocketIcon,
    },
    {
        title: 'Website Maintenance',
        Icon: Icons.ToolsIcon,
    },
    {
        title: 'Website Migration',
        Icon: Icons.LeftRightArrowsIcon,
    },
];