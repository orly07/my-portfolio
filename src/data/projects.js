import Project1 from "../assets/Projects/Project1.png";
import Project2 from "../assets/Projects/Project2.png";
import Project3 from "../assets/Projects/Project3.png";
import Project4 from "../assets/Projects/Project4.png";

export const projectSection = {
  title: "Projects",
  subtitle: "Lorem ipsum dolor sit emit sid nelum",
};

export const projects = [
  {
    id: "my-portfolio",
    title: "My Portfolio",
    description:
      "I built My Portfolio from the ground up – a fully responsive personal website designed to showcase my skills, projects, and professional journey. I developed the site using React JS for the front-end, with Styled-Components and Framer Motion to create a clean, consistent, and interactive user interface.To enhance user experience, I implemented smooth animations and transitions using Framer Motion. The website is optimized for all devices, ensuring visitors can easily navigate through my projects and profile from desktop or mobile.",
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
    features: ["Clean and Modern UI", "Project Showcase", "Responsive UI"],
  },

  {
    id: "sanhs-website",
    title: "SANHS Website",
    description:
      "SANHS Website is a modern, fully responsive school website designed to provide students, parents, and teachers with up-to-date school information. The front-end is built with React JS, Styled-Components, and Ant Design (antd) for a polished and user-friendly interface. For dynamic content management, I integrated Hygraph as a headless CMS and used GraphQL to fetch data for events, announcements, and news. This setup allows the school staff to update content directly from the CMS without touching the code, ensuring the website stays current and engaging.",
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
      "Clean and Modern UI",
      "Content Management System",
      "Respnsive Design",
    ],
  },

  {
    id: "classic-english",
    title: "Classic Englsih",
    description:
      "Classic English is a platform dedicated to reimagining the way students and educators experience literature, designed with fully responsive layouts for desktop and mobile users. The front-end leverages React JS, Styled-Components, and Framer Motion to create a smooth and visually appealing interface, while Vite ensures fast development and optimized performance. To handle course content efficiently, I integrated Hygraph as a CMS and used GraphQL for dynamic data fetching. This allows teachers and administrators to manage lessons, resources, and updates easily, keeping the website organized and up-to-date.",
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
    features: ["Responsive UI", "Content Management System", "Modern UI"],
  },

  {
    id: "sanhs-qc",
    title: "SANHS QC",
    description:
      "A web-based app equipment quality control system developed using the Agile SDLC for San Antonio National High School in San Antonio, Quezon. The platform digitizes equipment inspections and integrates simple Decision Tree and Long Short-Term Memory (LSTM) algorithms to provide intelligent monitoring, predictive insights, and real-time status updates. It also features a role-based access control system, where both admin and user roles share a single login page but access different functionalities through secure, protected routes.",
    image: Project4,
    technologies: [
      "React JS",
      "Styled-Components",
      "Hygraph",
      "Ant Design",
      "GraphQL",
      "Apollo Client",
      "Javascript",
      "HTML5",
      "CSS3",
      "Vite",
      "Git & Github",
    ],
    liveDemo: "https://qc-system.vercel.app/",
    github: "https://github.com/DhennisNizal/qc-system",
    features: [
      "Responsive",
      "Clean and Modern UI",
      "Admin Dashboard",
      "LSTM and Decision Tree",
    ],
  },
];
