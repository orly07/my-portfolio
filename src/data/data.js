import { Home, User, Code, Briefcase, FileText, Mail } from "lucide-react";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaGlobe } from "react-icons/fa";
import profile from "../assets/my-profile.webp";

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
  title: "Front-End Developer",
  bio: `Passionate about creating responsive, user-friendly, and visually engaging web experiences. 
          Dedicated to continuous learning and building impactful digital products.`,
  profile: profile,
};

export const aboutContent = {
  title: "About",
  subtitle: "Passionate Frontend Developer & Lifelong Learner",
  intro: "Hello I'm",
  name: "Orlando Dela Cruz",
  description: `a BSIT student passionate about crafting clean, responsive, and user-friendly web interfaces. I enjoy turning 
  ideas into functional designs using technologies like React, JavaScript, and CSS. My goal is to build digital experiences that 
  are both beautiful and efficient.`,
  profile: profile,
};
