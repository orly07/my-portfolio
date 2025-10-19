import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import * as S from "./Navbar.styled";
import logo from "../../assets/my-logo.png";
import { HireMe } from "../Buttons";
import { navLinks } from "./navLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <S.NavbarWrapper isScrolled={isScrolled}>
      <S.Container>
        <S.Brand>
          <Link to="home" smooth duration={1000}>
            <S.Logo src={logo} alt="My Logo" />
          </Link>
          <S.Heading>
            <Link to="home" smooth duration={1000}>
              mail@delacruzorlando776
            </Link>
          </S.Heading>
        </S.Brand>

        <S.Navlist isOpen={isOpen}>
          {navLinks.map(({ id, label, to }) => (
            <li key={id}>
              <Link
                to={to}
                spy
                smooth
                duration={1000}
                offset={-50}
                activeClass="active"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <HireMe />
        </S.Navlist>
      </S.Container>
    </S.NavbarWrapper>
  );
};

export default Navbar;
