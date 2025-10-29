import { memo, useMemo, lazy, Suspense } from "react";
import { heroContent } from "../../data/data";
import * as S from "./Hero.styled";
import useTypewriter from "../../hooks/useTypewriter";

const ViewProjects = lazy(() =>
  import("../../components/Buttons/ViewProjects/ViewProjects")
);
const Social = lazy(() => import("../../components/Buttons/Social/Social"));

const Hero = memo(({ id }) => {
  const memoheroContent = useMemo(() => heroContent, []);

  const titles =
    memoheroContent.titles ??
    (Array.isArray(memoheroContent.title)
      ? memoheroContent.title
      : [memoheroContent.title]);

  const typedTitle = useTypewriter(titles, {
    typeSpeed: 60,
    deleteSpeed: 40,
    delayBetween: 1000,
    loop: true,
  });

  return (
    <S.HeroWrapper id={id}>
      <S.HeroContainer>
        <S.HeaderContainer>
          <S.Name>{memoheroContent.name}</S.Name>

          <S.Title aria-live="polite">{typedTitle}</S.Title>

          <S.Bio>{memoheroContent.bio}</S.Bio>
        </S.HeaderContainer>

        <S.ImageContainer>
          <S.Profile
            src={memoheroContent.profile}
            alt="Profile of Orlando"
            loading="lazy"
          />
        </S.ImageContainer>
      </S.HeroContainer>

      <S.ButtonContainer>
        <Suspense fallback={<div>Loading...</div>}>
          <ViewProjects />
          <Social />
        </Suspense>
      </S.ButtonContainer>
    </S.HeroWrapper>
  );
});

export default Hero;
