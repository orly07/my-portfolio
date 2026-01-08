import styled from "styled-components";

export const ContactWrapper = styled.section`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.background.deep};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.typography.heading.size.h2};
  color: ${({ theme }) => theme.colors.text.light};
  margin-bottom: 10px;
`;

export const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.text.muted};
  margin-bottom: 40px;
  text-align: center;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Input = styled.input`
  padding: 14px 16px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  background: ${({ theme }) => theme.colors.background.alt};
  color: ${({ theme }) => theme.colors.text.main};
  font-size: 15px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const TextArea = styled.textarea`
  padding: 14px 16px;
  min-height: 150px;
  resize: none;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.border.primary};
  background: ${({ theme }) => theme.colors.background.alt};
  color: ${({ theme }) => theme.colors.text.main};
  font-size: 15px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Button = styled.button`
  padding: 14px;
  border-radius: 12px;
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Status = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 14px;
`;
