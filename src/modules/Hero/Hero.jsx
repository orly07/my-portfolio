import { memo, useMemo, lazy, Suspense } from "react";
import { heroContent } from "../../data/data";
import * as S from "./Hero.styled";
import useTypewriter from "../../hooks/useTypewriter";
import {
  fadeUp,
  fadeDown,
  scaleIn,
  staggerContainer,
} from "../../animations/animation";

const ViewProjects = lazy(() =>
  import("../../components/Buttons/ViewProjects/ViewProjects")
);
const Social = lazy(() => import("../../components/Buttons/Social/Social"));

const Hero = memo(({ id }) => {
  const memoheroContent = useMemo(() => heroContent, []);

  const titles = memoheroContent.titles ?? [memoheroContent.title];

  const typedTitle = useTypewriter(titles, {
    typeSpeed: 60,
    deleteSpeed: 40,
    delayBetween: 1000,
    loop: true,
  });

  return (
    <S.HeroWrapper id={id}>
      <S.HeroContainer
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <S.HeaderContainer>
          <S.Name variants={fadeDown}>{memoheroContent.name}</S.Name>

          <S.Title variants={fadeUp}>{typedTitle}</S.Title>

          <S.Bio variants={fadeUp}>{memoheroContent.bio}</S.Bio>
        </S.HeaderContainer>

        <S.ImageContainer variants={scaleIn}>
          <S.Profile
            src={memoheroContent.profile}
            alt="Profile of Orlando"
            loading="lazy"
          />
        </S.ImageContainer>
      </S.HeroContainer>

      <S.ButtonContainer variants={fadeUp}>
        <Suspense fallback={null}>
          <ViewProjects />
          <Social />
        </Suspense>
      </S.ButtonContainer>
    </S.HeroWrapper>
  );
});

export default Hero;
