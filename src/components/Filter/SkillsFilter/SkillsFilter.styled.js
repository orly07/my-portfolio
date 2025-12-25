import styled from "styled-components";

export const SkillFilterWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const SkillCategoryButton = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  border: ${({ $isActive, theme }) =>
    $isActive ? "none" : `1px solid ${theme.colors.primaryDark}`};
  border-radius: 50px;
  background-color: ${({ $isActive, theme }) =>
    $isActive ? theme.colors.primaryDark : "transparent"};
  color: ${({ isActive, theme }) =>
    isActive ? theme.colors.text.light : theme.colors.text.main};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    color: ${({ theme }) => theme.colors.text.light};
  }
`;
