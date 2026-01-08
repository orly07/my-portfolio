import React from "react";
import * as S from "./Footer.styled";
import { socials } from "../../data/data";
import { Link } from "react-scroll";
import { fadeUp, staggerContainer } from "../../animations/animation";

const Footer = () => {
  return (
    <S.FooterWrapper
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <S.FooterContainer>
        <S.Brand variants={fadeUp}>Orlando Dela Cruz</S.Brand>

        <S.Links variants={fadeUp}>
          <Link to="home" smooth duration={800} spy>
            <S.FooterLink>Home</S.FooterLink>
          </Link>
          <Link to="about" smooth duration={800} spy>
            <S.FooterLink>About</S.FooterLink>
          </Link>
          <Link to="skills" smooth duration={800} spy>
            <S.FooterLink>Skills</S.FooterLink>
          </Link>
          <Link to="projects" smooth duration={800} spy>
            <S.FooterLink>Projects</S.FooterLink>
          </Link>
        </S.Links>

        <S.Socials variants={fadeUp}>
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <S.SocialIcon
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon />
              </S.SocialIcon>
            );
          })}
        </S.Socials>

        <S.Copyright variants={fadeUp}>
          &copy; {new Date().getFullYear()} Orlando Dela Cruz. All rights
          reserved.
        </S.Copyright>
      </S.FooterContainer>
    </S.FooterWrapper>
  );
};

export default Footer;
