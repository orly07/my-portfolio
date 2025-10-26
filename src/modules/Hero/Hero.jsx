import { memo, useMemo, lazy, Suspense } from "react";
import { heroContent } from "../../data/data";
import * as S from "./Hero.styled";

const Download = lazy(() => import("../../components/Buttons/Download"));
const Social = lazy(() => import("../../components/Buttons/Social"));

const Hero = memo(({ id }) => {
  const memoheroContent = useMemo(() => heroContent, []);

  return (
    <S.HeroWrapper id={id}>
      <S.HeroContainer>
        <S.HeaderContainer>
          <S.Name>{memoheroContent.name}</S.Name>
          <S.Title>{memoheroContent.title}</S.Title>
          <S.Bio>{memoheroContent.bio}</S.Bio>
        </S.HeaderContainer>

        <S.ImageContainer>
          <S.Profile src={memoheroContent.profile} alt="Profile of Orlando" loading="lazy" />
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
