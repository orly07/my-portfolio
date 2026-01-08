import Project1 from "../assets/Projects/Project1.png";
import Project2 from "../assets/Projects/Project2.png";
import Project3 from "../assets/Projects/Project3.png";
import Project4 from "../assets/Projects/Project4.png";

export const projectSection = {
  title: "Projects",
  subtitle: "A showcase of my professional work and technical expertise.",
};

export const projects = [
  {
    id: "my-portfolio",
    title: "My Portfolio",
    description:
      "A fully responsive personal website built from scratch to showcase my skills, projects, and professional journey. Developed using React JS, Styled-Components, and Framer Motion to deliver a clean, interactive, and consistent user interface. Smooth animations enhance user experience, and the site is optimized for both desktop and mobile devices.",
    image: Project1,
    technologies: [
      "React JS",
      "Styled-Components",
      "Framer Motion",
      "HTML5",
      "CSS3",
    ],
    liveDemo: "https://orlandz-portfolio.vercel.app/",
    github: "https://github.com/orly07/my-portfolio",
    features: [
      "View personal projects",
      "Read professional bio",
      "Access contact information",
      "Responsive navigation",
      "Smooth animations and transitions",
    ],
  },

  {
    id: "sanhs-website",
    title: "SANHS Website",
    description:
      "A modern, fully responsive school website providing students, parents, and teachers with real-time school information. Built with React JS, Styled-Components, and Ant Design for a polished interface. Integrated Hygraph (headless CMS) and GraphQL for dynamic content management, enabling staff to update announcements, events, and news without modifying code.",
    image: Project2,
    technologies: [
      "React JS",
      "Styled-Components",
      "Ant Design",
      "Framer Motion",
      "Hygraph",
      "HTML5",
      "CSS3",
    ],
    liveDemo: "https://sanhs-website-edu.vercel.app/",
    github: "https://github.com/orly07/sanhs-website",
    features: [
      "View school news and announcements",
      "Check upcoming events",
      "Access staff and student resources",
      "Responsive and interactive interface",
      "Content updated via CMS",
    ],
  },

  {
    id: "classic-english",
    title: "Classic English",
    description:
      "Classic English is an educational platform created by students of Tayabas Western Academy to bring literature to life. The website features stories and sonnets from William Shakespeare and other classical authors, with interactive elements such as character descriptions, embedded videos for each story, and audio read-aloud options for sonnets. Developed with React JS, Styled-Components, and Framer Motion, it provides a responsive and engaging experience for both desktop and mobile users. Content is managed through Hygraph CMS with GraphQL for dynamic updates.",
    image: Project3,
    technologies: [
      "React JS",
      "Styled-Components",
      "Framer Motion",
      "Hygraph",
      "Vite",
      "Git",
      "HTML5",
      "CSS3",
    ],
    liveDemo: "https://classic-english.vercel.app/",
    github: "https://github.com/orly07/digital-classic-english",
    features: [
      "Read classical stories and sonnets",
      "Watch embedded videos related to each story",
      "View character descriptions",
      "Listen to sonnets via audio read-aloud",
      "Responsive interface for desktop and mobile",
      "Content dynamically managed via CMS",
    ],
  },

  {
    id: "sanhs-qc",
    title: "SANHS QC",
    description:
      "A web-based equipment quality control system for San Antonio National High School, developed using Agile SDLC. The platform digitizes inspections and integrates Decision Tree and LSTM algorithms for predictive monitoring and real-time updates. Features a role-based access system where admins and users access different functionalities through secure, protected routes.",
    image: Project4,
    technologies: [
      "React JS",
      "Styled-Components",
      "Hygraph",
      "Ant Design",
      "GraphQL",
      "Apollo Client",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Vite",
      "Git & GitHub",
    ],
    liveDemo: "https://qc-system.vercel.app/",
    github: "https://github.com/DhennisNizal/qc-system",
    features: [
      "Perform equipment inspections",
      "View real-time equipment status",
      "Receive predictive maintenance alerts",
      "Admin dashboard for managing inspections",
      "Role-based access control",
    ],
  },
];
