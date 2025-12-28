import { memo } from "react";
import * as S from "./SectionTitle.styled";

const SectionTitle = memo(({ title, subtitle, titleColor, subtitleColor }) => {
  return (
    <S.SectionTitleWrapper>
      <S.Title $titleColor={titleColor}>{title}</S.Title>
      {subtitle && (
        <S.SubTitle $subtitleColor={subtitleColor}>{subtitle}</S.SubTitle>
      )}
    </S.SectionTitleWrapper>
  );
});

export default SectionTitle;
