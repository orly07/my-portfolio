import { Home, User, Code, Briefcase, FileText, Mail } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import profile from "../assets/my-profile.webp";
import aboutProfile from "../assets/working-img.webp";

// Navlinks
export const navLinks = [
  { id: 1, label: "Home", to: "home", icon: Home },
  { id: 2, label: "About", to: "about", icon: User },
  { id: 3, label: "Skills", to: "skills", icon: Code },
  { id: 4, label: "Projects", to: "projects", icon: Briefcase },
  { id: 5, label: "Resume", to: "resume", icon: FileText },
  { id: 6, label: "Contact", to: "contact", icon: Mail },
];

export const socials = [
  { id: 1, icon: FaFacebookF },
  { id: 2, icon: FaGithub },
  { id: 3, icon: FaLinkedinIn },
  { id: 4, icon: FaGlobe },
];

export const heroContent = {
  name: "I am Orlando",
  titles: ["Front-End Developer", "Web Developer", "UI/UX Designer"],
  title: "Front-End Developer",
  bio: `I craft clean, responsive, and user-focused web interfaces with a passion for modern design and performance.`,
  profile: profile,
};

export const aboutContent = {
  title: "About",
  subtitle: "Passionate Frontend Developer & Lifelong Learner",
  intro: "Hello!",
  name: "I'm Orlando Dela Cruz",
  description: `a BSIT student and aspiring frontend developer passionate about creating clean, interactive, and user-friendly web interfaces. I enjoy learning modern technologies like React, Vite, and Styled Components to build engaging digital experiences.
  
  Currently, I’m focusing on improving my skills in frontend development while working on personal projects that help me grow as a developer and problem-solver.`,
  profile: aboutProfile,
};
