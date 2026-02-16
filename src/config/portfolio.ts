/**
 * Portfolio Configuration Template
 * ================================
 * Edit this file to personalize your portfolio
 * All portfolio data is centralized here for easy management
 */

// ===== PERSONAL INFO =====
export const PORTFOLIO_DATA = {
    // Your name
    name: 'David Abolarinwa Favor',
    // Your job title
    title: 'Full Stack Developer',
    // Short intro
    intro: 'I craft beautiful, accessible web applications using React, Angular, Typescript and JavaScript for the frontend And I use C#, NodeJs, Sql Server, MongoDb, Express.js For the backend ',
    // Longer description
    description: 'Passionate about clean code, intuitive UI design, and solving complex problems with elegant solutions. Currently exploring AI integration and advanced web performance optimization.',
    // Email
    email: 'davidabolarinwa4@gmail.com',

    // ===== SOCIAL LINKS =====
    socials: {
        github: 'https://github.com/Favortech',
        linkedin: 'https://www.linkedin.com/in/david-favor2005',
        twitter: 'https://twitter.com/Abolarinwa2005',
    },

    // ===== ABOUT SECTION =====
    about: {
        paragraph1: `I'm a Full Stack Developer with 3+ years of professional experience building responsive, user-centered web applications.
         I specialize in React, Angular,Node Js, TypeScript, C#, ASP.NET and Javascript, with strong expertise in modern web development practices.
          I thrive at the intersection of design and engineering, creating digital experiences that are both beautiful and functional.`,
        paragraph2: ` My journey in tech started with a curiosity about how things work, which evolved into a passion 
            for building scalable applications. I'm committed to writing clean, maintainable code and staying 
            current with emerging technologies. When I'm not coding, I'm contributing to open-source projects,learning new technologies, 
            exploring creative design patterns or mentoring junior developers.`,
    },

    // ===== SKILLS =====
    skills: [
        'React',
        'Angular',
        'C#',
        'ASP.Net',
        'SQL Server',
        'TypeScript',
        'JavaScript',
        'CSS/SCSS',
        'HTML',
        'Node.js',
        'Express.js',
        'MongoDB',
        'Tailwind CSS',
        'Git & GitHub',
        'REST APIs',
        'Web Accessibility',
    ],

    // ===== EXPERIENCE =====
    experience: [
        {
            company: 'Fintrak Software',
            position: 'Frontend Engineer',
            period: '2025 - Present',
            description: 'Lead development of customer-facing applications serving 500K+ users. Architected component library and design system, reducing development time by 40%. established code review standards, Collaborated with UI/UX team and Backend Team to improve user experience and accessibility',
            technologies: ['Angular', 'TypeScript', 'SCSS', 'BootStrap'],
        },
        {
            company: 'Novas Enterprises',
            position: 'Full Stack Developer',
            period: '2023 - 2025',
            description: 'Developed and maintained web applications for enterprise clients. optimized database queries reducing load time by 50%. Collaborated with UX team to improve user experience and accessibility.',
            technologies: ['React', 'Angular', 'Node.js', 'C#', 'MongoDB', 'SQL Server', 'Express'],
        },
    ],

    // ===== PROJECTS =====
    projects: [
        {
            id: 1,

            title: 'Hostel Management System',
            description: 'Student hostel management platform for managing room allocations, student records, attendance tracking, and maintenance requests. Includes online room booking, fee payment integration, and automated notifications for students and administrators.',
            imageUrl: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=400&h=250&fit=crop',
            technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB', 'Express.js'],
            githubUrl: 'https://github.com/Favortech',
            liveUrl: '',
        },
        {
            id: 2,
            title: 'E-Learning System',
            description: 'A comprehensive e-learning platform built with Angular. Features include course management, interactive lessons, progress tracking, and student dashboard. Designed with modern UI principles for an engaging learning experience.',
            imageUrl: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=250&fit=crop',
            technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'Angular CLI'],
            githubUrl: 'https://github.com/Favortech/E-LearningSystem',
            liveUrl: '',
        },
        {
            id: 3,
            title: 'Restaurant Website',
            description: 'Full-featured restaurant website with user authentication and wishlist functionality. Includes customer authentication, forgot password feature, menu management, and responsive design. Built with Angular for a seamless user experience.',
            imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=250&fit=crop',
            technologies: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Authentication'],
            githubUrl: 'https://github.com/Favortech/restaurant-website-',
            liveUrl: '',
        },
        {
            id: 4,
            title: 'Angular Responsive Sidebar',
            description: 'A reusable Angular component library featuring a responsive sidebar navigation system. Created with StackBlitz for rapid prototyping. Demonstrates component-based architecture and responsive design principles.',
            imageUrl: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&h=250&fit=crop',
            technologies: ['Angular', 'HTML', 'CSS', 'Responsive Design', 'StackBlitz'],
            githubUrl: 'https://github.com/Favortech/Angular-Responsive-Sidebar',
            liveUrl: '',
        },
        {
            id: 5,
            title: 'Hotel Management System',
            description: 'Comprehensive hotel management solution with room booking, guest check-in/check-out, billing system, and staff management. Features real-time room availability tracking, automated invoicing, and reporting dashboards. Built for efficient hotel operations.',
            imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=250&fit=crop',
            technologies: ['Angular', 'TypeScript', 'C#', 'ASP.NET', 'REST API'],
            githubUrl: 'https://github.com/Favortech',
            liveUrl: '',
        },
        {
            id: 6,
            title: 'SimpleApp Api',
            description: 'A clean and scalable RESTful API built with C# and ASP.NET Core. Implements Clean Architecture principles and uses MediatR for CQRS pattern. Demonstrates best practices in API design, separation of concerns, and maintainable code structure.',
            imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop',
            technologies: ['C#', 'ASP.NET Core', 'Clean Architecture', 'MediatR', 'CQRS'],
            githubUrl: 'https://github.com/Favortech/SimpleApp.Api',
            liveUrl: '',
        },

    ],
}

export default PORTFOLIO_DATA
