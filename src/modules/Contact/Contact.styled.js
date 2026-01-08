import styled from "styled-components";
import { motion } from "framer-motion";

export const ContactWrapper = styled(motion.section)`
  padding: 100px 20px;
  background: ${({ theme }) => theme.colors.background.deep};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const Title = styled(motion.h2)`
  font-size: ${({ theme }) => theme.typography.heading.size.h2};
  color: ${({ theme }) => theme.colors.text.light};
  margin-bottom: 10px;
`;

export const Subtitle = styled(motion.p)`
  color: ${({ theme }) => theme.colors.text.muted};
  margin-bottom: 40px;
  text-align: center;
  max-width: 420px;
`;

export const Form = styled(motion.form)`
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
  transition: border 0.25s ease, box-shadow 0.25s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
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
  transition: border 0.25s ease, box-shadow 0.25s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
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
  transition: background 0.25s ease, transform 0.25s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

export const Status = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.colors.accent};
  font-size: 14px;
`;
