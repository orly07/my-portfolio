// src/data/data.js
import { Home, User, Code, Briefcase, FileText, Mail } from "lucide-react";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagramSquare,
} from "react-icons/fa";

import profile from "../assets/my-profile.webp";
import aboutProfile from "../assets/working-img.webp";

// Navlinks
export const navLinks = [
  { id: 1, label: "Home", to: "home", icon: Home },
  { id: 2, label: "About", to: "about", icon: User },
  { id: 3, label: "Skills", to: "skills", icon: Code },
  { id: 4, label: "Projects", to: "projects", icon: Briefcase },
  // { id: 5, label: "Resume", to: "resume", icon: FileText },
  { id: 5, label: "Contact", to: "contact", icon: Mail },
];

export const socials = [
  {
    id: 1,
    icon: FaFacebookF,
    link: "https://web.facebook.com/orlando.arcangel/",
  },
  { id: 2, icon: FaGithub, link: "https://github.com/orly07" },
  {
    id: 3,
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/dela-cruz-orlando-jr-a-127998273/",
  },
];

export const heroContent = {
  name: "I am Orlando",
  titles: ["Front-End Developer", "Web Developer", "UI/UX Designer"],
  title: "Front-End Developer",
  bio: `I craft clean, responsive, and user-focused web interfaces with a passion for modern design and performance.`,
  profile: profile,
};

export const aboutContent = {
  title: "About Me",
  subtitle: "Passionate Frontend Developer & Lifelong Learner",
  intro: "Hello!",
  name: "I'm Orlando Dela Cruz",
  description: `a BSIT student and aspiring frontend developer passionate about creating clean, interactive, and user-friendly web interfaces. I enjoy learning modern technologies like React, Vite, and Styled Components to build engaging digital experiences.
  
  Currently, I’m focusing on improving my skills in frontend development while working on personal projects that help me grow as a developer and problem-solver.`,
  profile: aboutProfile,
};

// SKILLS DATA
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  FaDatabase,
  FaJava,
  FaCuttlefish,
  FaUsers,
  FaLightbulb,
  FaRegClock,
  FaHandsHelping,
  FaChrome,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiBootstrap,
  SiAntdesign,
  SiVercel,
  SiCanva,
  SiFramer,
  SiVite,
  SiStyledcomponents,
} from "react-icons/si";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaRobot } from "react-icons/fa6";

export const skillsContent = {
  title: "Skills",
  subtitle: "Technologies I use to build modern web applications",
  categories: [
    {
      id: 1,
      name: "Front End",
      skills: [
        { name: "React", icon: FaReact, color: "#61DAFB" },
        { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
        { name: "Ant Design", icon: SiAntdesign, color: "#0170FE" },
        { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
        { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
        {
          name: "Styled Components",
          icon: SiStyledcomponents,
          color: "#ec6c97ff",
        },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
        { name: "Vite", icon: SiVite, color: "#9d3debff" },
        { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
      ],
    },
    {
      id: 2,
      name: "Back End",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "#339933" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: FaDatabase, color: "#4479A1" },
        { name: "C++", icon: FaCuttlefish, color: "#00599C" },
        { name: "Java", icon: FaJava, color: "#007396" },
      ],
    },
    {
      id: 3,
      name: "Tools",
      skills: [
        { name: "Git & GitHub", icon: FaGitAlt, color: "#F05032" },
        { name: "Figma", icon: FaFigma, color: "#F24E1E" },
        { name: "Vercel", icon: SiVercel, color: "#000000" },
        { name: "Canva", icon: SiCanva, color: "#00C4CC" },
        { name: "Chrome DevTools", icon: FaChrome, color: "#4285F4" },
        { name: "Lighthouse", icon: GiMagnifyingGlass, color: "#FFDD00" },
      ],
    },
    {
      id: 4,
      name: "Soft Skills",
      skills: [
        {
          name: "AI Utilization",
          icon: FaRobot,
          color: "#8A2BE2",
        },
        { name: "Communication", icon: FaUsers, color: "#FF6B6B" },
        { name: "Problem-Solving", icon: FaLightbulb, color: "#FFD93D" },
        { name: "Adaptability", icon: FaUsers, color: "#FF6EC7" },
        { name: "Time Management", icon: FaRegClock, color: "#6BCB77" },
        { name: "Teamwork", icon: FaHandsHelping, color: "#4D96FF" },
        { name: "Creativity", icon: FaLightbulb, color: "#FF9F1C" },
      ],
    },
  ],
};
