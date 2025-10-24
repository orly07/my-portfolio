import { memo, lazy, Suspense, useMemo } from "react";
import profile from "../../assets/profile.jpg";
import * as S from "./Hero.styled";

// Lazy load child components to improve bundle size
const Download = lazy(() => import("../../components/Buttons/Download"));
const Social = lazy(() => import("../../components/Buttons/Social"));

const Hero = memo(({ id }) => {
  // Memoize static text so React won’t recreate it every re-render
  const heroText = useMemo(() => ({
    name: "I am Orlando",
    title: "Front-End Developer",
    bio: `Passionate about creating responsive, user-friendly, and visually engaging web experiences. 
          Dedicated to continuous learning and building impactful digital products.`
  }), []);

  return (
    <S.HeroWrapper id={id}>
      <S.HeroContainer>
        <S.HeaderContainer>
          <S.Name>{heroText.name}</S.Name>
          <S.Title>{heroText.title}</S.Title>
          <S.Bio>{heroText.bio}</S.Bio>
        </S.HeaderContainer>

        <S.ImageContainer>
          <S.Profile src={profile} alt="Profile of Orlando" loading="lazy" />
        </S.ImageContainer>
      </S.HeroContainer>

      <S.ButtonContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <Download />
          <Social />
        </Suspense>
      </S.ButtonContainer>
    </S.HeroWrapper>
  );
});

export default Hero;
