import styled from 'styled-components';

type ButtonProps = {
  ghost?: boolean;
};

const Button = styled.button<ButtonProps>`
  display: inline-block;
  padding: ${({ theme: { size } }) => `1rem ${size.m}`};
  border-radius: ${({ theme }) => theme.borderRadius.small};

  color: ${({ theme, ghost }) => (ghost ? theme.color.primary : theme.color.textLight)};
  background-color: ${({ theme, ghost }) => (ghost ? theme.color.textLight : theme.color.primary)};
  border: 1px solid ${({ theme }) => theme.color.primary};
  text-decoration: none;
  transition: ${({ theme: { transitionTime } }) =>
    `color ${transitionTime}, background-color ${transitionTime}, border-color ${transitionTime}`};

  &:hover {
    background-color: ${({ theme, ghost }) =>
      ghost ? theme.color.inputBg : theme.color.primaryStrong};
    border-color: ${({ theme }) => theme.color.primaryStrong};
    color: ${({ theme, ghost }) => (ghost ? theme.color.primaryStrong : theme.color.textLight)};
  }

  &[disabled] {
    color: ${({ theme, ghost }) => (ghost ? theme.color.muted : theme.color.textLight)};
    background-color: ${({ theme, ghost }) => (ghost ? theme.color.inputBg : theme.color.muted)};
    border-color: ${({ theme }) => theme.color.muted};
    transition: none;
  }
`;

export default Button;
