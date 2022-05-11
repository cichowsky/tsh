import styled from 'styled-components';

type ButtonProps = {
  $ghost?: boolean;
  isBig?: boolean;
};

const Button = styled.button<ButtonProps>`
  display: inline-block;
  font-size: ${({ theme: { font }, isBig }) => (isBig ? font.size.s : font.size.xs)};
  line-height: ${({ theme: { font }, isBig }) => (isBig ? font.size.l : font.size.s)};
  padding: ${({ theme: { size }, isBig }) => (isBig ? `1.1rem ${size.l}` : `1rem ${size.m}`)};
  color: ${({ theme, $ghost }) => ($ghost ? theme.color.primary : theme.color.textLight)};
  background-color: ${({ theme, $ghost }) =>
    $ghost ? theme.color.textLight : theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  text-decoration: none;
  transition: ${({ theme: { transitionTime } }) =>
    `color ${transitionTime}, background-color ${transitionTime}, border-color ${transitionTime}`};

  &:hover {
    background-color: ${({ theme, $ghost }) =>
      $ghost ? theme.color.inputBg : theme.color.primaryStrong};
    border-color: ${({ theme }) => theme.color.primaryStrong};
    color: ${({ theme, $ghost }) => ($ghost ? theme.color.primaryStrong : theme.color.textLight)};
  }

  &[disabled] {
    color: ${({ theme, $ghost }) => ($ghost ? theme.color.muted : theme.color.textLight)};
    background-color: ${({ theme, $ghost }) => ($ghost ? theme.color.inputBg : theme.color.muted)};
    border-color: ${({ theme }) => theme.color.muted};
    transition: none;
  }
`;

export default Button;
