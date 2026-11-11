export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string[];
  tech: string[];
}

export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  links: {
    github: string;
    live: string;
  };
  featured: boolean;
  image: string;
  architecture: string;
  challenges: string;
  solutions: string;
  outcomes: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  link: string;
}

export const portfolioData = {
  personal: {
    name: 'HIRWA Christian',
    role: 'Full Stack Software Engineer',
    email: 'christianatsuh@gmail.com',
    location: 'Kigali, Rwanda',
    github: 'https://github.com/hirwa-christian',
    linkedin: 'https://linkedin.com/in/hirwa-christian-788396320',
    resumeUrl: '#',
    photoUrl: '/profile.png',
    summary:
    'With 2+ years of experience crafting robust, scalable, and elegant web applications. I specialize in React, Node.js, and cloud architectures, turning complex problems into maintainable solutions.',
    philosophy:
    'My technical philosophy centers around maintainability and performance. I believe that writing code is not just about making things work, but about creating systems that can grow, adapt, and be easily understood by other developers.'
  },
  stats: [
  { label: 'Years Experience', value: 2, suffix: '+' },
  { label: 'Projects Shipped', value: 15, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'Open Source', value: 50, suffix: '+' }],

  skills: [
  {
    title: 'Frontend',
    skills: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 88 },
    { name: 'Angular', level: 75 },
    { name: 'Tailwind CSS', level: 95 }]

  },
  {
    title: 'Backend',
    skills: [
    { name: 'Node.js', level: 85 },
    { name: 'Express', level: 88 },
    { name: 'REST APIs', level: 90 },
    { name: 'GraphQL', level: 70 }]

  },
  {
    title: 'Databases',
    skills: [
    { name: 'PostgreSQL', level: 85 },
    { name: 'MongoDB', level: 80 },
    { name: 'Redis', level: 65 },
    { name: 'MySQL', level: 80 }]

  },
  {
    title: 'DevOps & Tools',
    skills: [
    { name: 'Docker', level: 75 },
    { name: 'AWS', level: 70 },
    { name: 'CI/CD', level: 80 },
    { name: 'Git', level: 90 }]

  }] as
  SkillCategory[],
  experience: [
  {
    role: 'Full Stack Engineer (Freelance)',
    company: 'Various Clients',
    period: '2023 - Present',
    description: [
    'Architected and developed full-stack web applications using React, Node.js, and PostgreSQL.',
    'Improved application performance by 40% through code splitting and optimized database queries.',
    'Implemented CI/CD pipelines using GitHub Actions, reducing deployment time by 60%.'],

    tech: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS']
  },
  {
    role: 'Software Engineering Intern',
    company: 'Tech Innovators Inc.',
    period: '2022 - 2023',
    description: [
    'Collaborated with a team of 5 engineers to build a microservices-based inventory management system.',
    'Developed responsive frontend components using Angular and Tailwind CSS.',
    'Wrote comprehensive unit tests, achieving 85% code coverage across the frontend codebase.'],

    tech: ['Angular', 'Express', 'MongoDB', 'Jest']
  }] as
  Experience[],
  projects: [
  {
    title: 'Inkomoko Application',
    category: 'Full Stack',
    description:
    'A comprehensive enterprise application for managing business operations. Features include complex data visualization, role-based access control, and real-time updates.',
    tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    links: { github: '#', live: '#' },
    featured: true,
    image:
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    architecture:
    'Microservices architecture with a React frontend, Node.js/Express API gateway, and specialized Python services for data processing.',
    challenges:
    'Handling real-time data synchronization across hundreds of concurrent users without degrading performance.',
    solutions:
    'Implemented WebSocket connections with Redis pub/sub for efficient message broadcasting and state management.',
    outcomes:
    'Reduced data latency by 300ms and improved overall system reliability to 99.99% uptime.'
  },
  {
    title: 'Developer Portfolio',
    category: 'Frontend',
    description:
    'An enterprise-grade, terminal-inspired portfolio website built with React and Tailwind CSS. Features high performance, accessibility, and responsive design.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
    links: { github: '#', live: '#' },
    featured: true,
    image:
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800',
    architecture:
    'Static site generation using React, with a custom Tailwind configuration for theme management and Framer Motion for animations.',
    challenges:
    'Creating a complex, interactive UI that remains accessible and performant across all devices.',
    solutions:
    'Utilized semantic HTML, ARIA attributes, and optimized animation triggers using Intersection Observer.',
    outcomes:
    'Achieved 100/100 Lighthouse scores across Performance, Accessibility, Best Practices, and SEO.'
  },
  {
    title: 'Pomodoro Timer',
    category: 'Tools',
    description:
    'A productivity application with customizable timers, task management, and progress tracking. Implements local storage and notification APIs.',
    tech: ['JavaScript', 'HTML5', 'CSS3'],
    links: { github: '#', live: '#' },
    featured: false,
    image:
    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
    architecture:
    'Vanilla JavaScript SPA utilizing Web Storage API and Web Notifications API.',
    challenges:
    'Ensuring timer accuracy despite browser background tab throttling.',
    solutions:
    'Implemented Web Workers to handle timer ticks independently of the main thread.',
    outcomes:
    'Delivered a reliable, cross-browser compatible productivity tool used daily by 500+ users.'
  }] as
  Project[],
  education: [
  {
    degree: 'B.S. in Computer Science',
    institution: 'University of Rwanda',
    period: '2019 - 2023',
    description:
    'Focused on software engineering, algorithms, and distributed systems. Graduated with First Class Honors.'
  }] as
  Education[],
  certifications: [
  {
    name: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    date: '2023',
    link: '#'
  },
  {
    name: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Coursera',
    date: '2022',
    link: '#'
  }] as
  Certification[],
  languages: [
  { name: 'Kinyarwanda', proficiency: 'Native' },
  { name: 'English', proficiency: 'Professional' },
  { name: 'French', proficiency: 'Intermediate' }],

  softSkills: [
  'Problem Solving',
  'Team Collaboration',
  'Agile/Scrum',
  'Mentoring',
  'Effective Communication'],

  interests: ['Open Source', 'Tech Blogging', 'Chess', 'Hiking']
};