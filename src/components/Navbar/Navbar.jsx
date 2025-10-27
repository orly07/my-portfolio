import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import * as S from "./Navbar.styled";
import { navLinks } from "../../data/data";
import logo from "../../assets/my-logo.webp";
import GetinTouch from "../Buttons/GetinTouch"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  const renderNavLinks = (isMobile = false) => 
    navLinks.map(({ id, label, to, icon: Icon }) => (
      <li key={id}>
        <Link
          to={to}
          spy
          smooth
          duration={1000}
          offset={-50}
          activeClass="active"
          onClick={isMobile ? closeMenu : undefined}
        >
          {isMobile && Icon && <Icon size={18} />}
          <span>{label}</span>
        </Link>
      </li>
    ));

  const currentYear = new Date().getFullYear();

  return (
    <>
      <S.NavbarWrapper $isScrolled={isScrolled}>
        <S.Container>
          <S.Brand>
            <Link to="home" smooth duration={1000}>
              <S.Logo 
                src={logo} 
                alt="My Logo" 
                width="50"
                height="50"
                loading="eager"
              />
            </Link>
            <S.Heading>
              <Link to="home" smooth duration={1000}>
                mail@delacruzorlando776
              </Link>
            </S.Heading>
            <S.Heading2>rlando</S.Heading2>
          </S.Brand>

          <S.NavlistDesktop>
            {renderNavLinks()}
          </S.NavlistDesktop>

          <S.MobileControls>
            <GetinTouch />
            <S.MenuIcon 
              onClick={toggleMenu} 
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </S.MenuIcon>
          </S.MobileControls>
        </S.Container>
      </S.NavbarWrapper>

      <S.MobileOverlay 
        $isOpen={isOpen} 
        onClick={closeMenu} 
        aria-hidden={!isOpen}
      />

      <S.NavlistMobile 
        $isOpen={isOpen} 
        aria-hidden={!isOpen}
      >
        <S.MobileHeader>
          <S.Logo src={logo} alt="My Logo" width="50" height="50" />
          <S.Heading2>rlando</S.Heading2>
        </S.MobileHeader>

        {renderNavLinks(true)}

        <S.NavlistFooter>
          <p>Developed by Orlando Dela Cruz | &copy;{currentYear} All Rights Reserved</p>
        </S.NavlistFooter>
      </S.NavlistMobile>
    </>
  );
};

export default Navbar;