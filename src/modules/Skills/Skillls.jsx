import { lazy, memo, useState, Suspense } from "react";
import * as S from "./Skills.styled";
import { skillsContent } from "../../data/data";

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

  return (
    <S.SkillWrapper id={id}>
      <S.HeaderContainer>
        <S.Title>{skillsContent.title}</S.Title>
        <S.Subtitle>{skillsContent.subtitle}</S.Subtitle>
      </S.HeaderContainer>

      <Suspense fallback={null}>
        <SkillsFilter
          categories={skillsContent.categories}
          selectedCategory={selectedCategory}
          onCategoryChange={(cat) => {
            setSelectedCategory(cat);
            setShowAll(false); // reset on filter change
          }}
        />
      </Suspense>

      <S.SkillsGrid $expanded={showAll}>
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;

          return (
            <S.SkillCard key={skill.name}>
              <S.SkillIcon style={{ color: skill.color }}>
                <Icon />
              </S.SkillIcon>
              <S.SkillName>{skill.name}</S.SkillName>
            </S.SkillCard>
          );
        })}
      </S.SkillsGrid>

      {/* Toggle button (mobile only via CSS) */}
      <S.ToggleButton onClick={() => setShowAll((prev) => !prev)}>
        {showAll ? "See less" : "See more"}
      </S.ToggleButton>
    </S.SkillWrapper>
  );
});

export default Skills;
