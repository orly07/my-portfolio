import { useState, useEffect, useCallback, useMemo, lazy, Suspense } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import * as S from "./Navbar.styled";
import { navLinks } from "../../data/data";
import logo from "../../assets/my-logo.png";

const HireMe = lazy(() => import("../Buttons/HireMe"));

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  const mobileNavLinks = useMemo(() => (
    navLinks.map(({ id, label, to, icon: Icon }) => (
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
    ))
  ), [closeMenu]);

  const desktopNavLinks = useMemo(() => (
    navLinks.map(({ id, label, to }) => (
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
    ))
  ), []);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <S.NavbarWrapper $isScrolled={isScrolled}>
        <S.Container>
          {/* Brand */}
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

          {/* Desktop Nav */}
          <S.NavlistDesktop>
            {desktopNavLinks}
          </S.NavlistDesktop>

          {/* Mobile Menu Icon + HireMe */}
          <S.MobileControls>
            <Suspense fallback={<div>Loading...</div>}>
              <HireMe />
            </Suspense>
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

      {/* Mobile Overlay */}
      <S.MobileOverlay 
        $isOpen={isOpen} 
        onClick={closeMenu} 
        aria-hidden={!isOpen}
      />

      {/* Mobile Menu */}
      <S.NavlistMobile 
        $isOpen={isOpen} 
        aria-hidden={!isOpen}
      >
        <S.MobileHeader>
          <S.Logo 
            src={logo} 
            alt="My Logo"
            width="50"
            height="50"
          />
          <S.Heading2>rlando</S.Heading2>
        </S.MobileHeader>

        {mobileNavLinks}

        <S.NavlistFooter>
          <p>
            Developed by Orlando Dela Cruz | &copy;{currentYear} All Rights Reserved
          </p>
        </S.NavlistFooter>
      </S.NavlistMobile>
    </>
  );
};

export default Navbar;