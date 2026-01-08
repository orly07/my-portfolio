import { lazy, memo, useState, Suspense } from "react";
import * as S from "./Skills.styled";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { aboutContent, skillsContent } from "../../data/data";
import { useInView } from "react-intersection-observer";
import { fadeUp, staggerContainer, scaleIn } from "../../animations/animation";

const SkillsFilter = lazy(() =>
  import("../../components/Filter/SkillsFilter/SkillsFilter")
);

const Skills = memo(({ id }) => {
  const [selectedCategory, setSelectedCategory] = useState(
    skillsContent.categories[0].name
  );
  const [showAll, setShowAll] = useState(false);

  const selected = skillsContent.categories.find(
    (cat) => cat.name === selectedCategory
  );

  const filteredSkills = selected?.skills ?? [];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  return (
    <S.SkillWrapper
      id={id}
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {/* Section Title */}
      <S.MotionBlock variants={fadeUp}>
        <SectionTitle
          title={skillsContent.title}
          subtitle={aboutContent.subtitle}
        />
      </S.MotionBlock>

      {/* Filter */}
      <Suspense fallback={null}>
        <S.MotionBlock variants={fadeUp}>
          <SkillsFilter
            categories={skillsContent.categories}
            selectedCategory={selectedCategory}
            onCategoryChange={(cat) => {
              setSelectedCategory(cat);
              setShowAll(false);
            }}
          />
        </S.MotionBlock>
      </Suspense>

      {/* Skills Grid */}
      <S.SkillsGrid $expanded={showAll}>
        {filteredSkills.map((skill, index) => {
          const Icon = skill.icon;

          return (
            <S.SkillCard
              key={skill.name}
              variants={scaleIn}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{
                delay: index * 0.05,
              }}
            >
              <S.SkillIcon style={{ color: skill.color }}>
                <Icon />
              </S.SkillIcon>
              <S.SkillName>{skill.name}</S.SkillName>
            </S.SkillCard>
          );
        })}
      </S.SkillsGrid>

      {/* Toggle Button (mobile only) */}
      <S.ToggleButton
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        onClick={() => setShowAll((prev) => !prev)}
      >
        {showAll ? "See less" : "See more"}
      </S.ToggleButton>
    </S.SkillWrapper>
  );
});

export default Skills;
