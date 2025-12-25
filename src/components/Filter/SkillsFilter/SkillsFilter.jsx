import * as S from "./SkillsFilter.styled";

const SkillsFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <S.SkillFilterWrapper>
      {categories.map((category) => (
        <S.SkillCategoryButton
          key={category.id}
          $isActive={selectedCategory === category.name}
          onClick={() => onCategoryChange(category.name)}
        >
          {category.name}
        </S.SkillCategoryButton>
      ))}
    </S.SkillFilterWrapper>
  );
};

export default SkillsFilter;
