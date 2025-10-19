import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

import * as S from "./Navbar.styled";
import logo from "../../assets/my-logo.png";
import { HireMe } from "../Buttons";
import { navLinks } from "./navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Navbar */}
      <S.NavbarWrapper $isScrolled={isScrolled}>
        <S.Container>
          {/* Brand */}
          <S.Brand>
            <Link to="home" smooth duration={1000}>
              <S.Logo src={logo} alt="My Logo" />
            </Link>
            <S.Heading>
              <Link to="home" smooth duration={1000}>
                mail@delacruzorlando776
              </Link>
            </S.Heading>
            <S.Heading2>rlando</S.Heading2>
          </S.Brand>

          {/* Desktop Nav */}
          <S.NavlistDesktop>
            {navLinks.map(({ id, label, to }) => (
              <li key={id}>
                <Link
                  to={to}
                  spy
                  smooth
                  duration={1000}
                  offset={-50}
                  activeClass="active"
                >
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </S.NavlistDesktop>

          {/* Mobile Menu Icon + HireMe */}
          <S.MobileControls>
            <HireMe />
            <S.MenuIcon onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </S.MenuIcon>
          </S.MobileControls>
        </S.Container>
      </S.NavbarWrapper>

      {/* Mobile Overlay */}
      <S.MobileOverlay $isOpen={isOpen} onClick={closeMenu} />

      {/* Mobile Menu */}
      <S.NavlistMobile $isOpen={isOpen}>
        {/* Logo + Name */}
        <S.MobileHeader>
          <S.Logo src={logo} />
          <S.Heading2>rlando</S.Heading2>
        </S.MobileHeader>

        {/* Nav Links */}
        {navLinks.map(({ id, label, to, icon: Icon }) => (
          <li key={id}>
            <Link
              to={to}
              spy
              smooth
              duration={1000}
              offset={-50}
              activeClass="active"
              onClick={closeMenu}
            >
              {Icon && <Icon size={18} />}
              <span>{label}</span>
            </Link>
          </li>
        ))}

        {/* Footer */}
        <S.NavlistFooter>
          <p>
            Developed by Orlando Dela Cruz | &copy;{new Date().getFullYear()}{" "}
            All Rights Reserved
          </p>
        </S.NavlistFooter>
      </S.NavlistMobile>
    </>
  );
};

export default Navbar;
