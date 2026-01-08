import React from "react";
import * as S from "./Footer.styled";
import { socials } from "../../data/data";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <S.FooterWrapper>
      <S.FooterContainer>
        <S.Brand>Orlando Dela Cruz</S.Brand>

        <S.Links>
          <Link to="home" smooth={true} duration={800} spy={true}>
            <S.FooterLink>Home</S.FooterLink>
          </Link>
          <Link to="about" smooth={true} duration={800} spy={true}>
            <S.FooterLink>About</S.FooterLink>
          </Link>
          <Link to="skills" smooth={true} duration={800} spy={true}>
            <S.FooterLink>Skills</S.FooterLink>
          </Link>
          <Link to="projects" smooth={true} duration={800} spy={true}>
            <S.FooterLink>Projects</S.FooterLink>
          </Link>
        </S.Links>

        <S.Socials>
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <S.SocialIcon
                key={social.id}
                href={social.link} // 🔹 use actual link
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </S.SocialIcon>
            );
          })}
        </S.Socials>

        <S.Copyright>
          &copy; {new Date().getFullYear()} Orlando Dela Cruz. All rights
          reserved.
        </S.Copyright>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
