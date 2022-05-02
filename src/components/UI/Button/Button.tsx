import styled from 'styled-components';

type ButtonProps = {
  ghost?: boolean;
  full?: boolean;
};

const Button = styled.button<ButtonProps>`
  width: ${({ full }) => (full ? '100%' : 'auto')};
  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: ${({ theme }) => theme.font.size.s};
  padding: 0.8em 1.7em;
  border-radius: ${({ theme }) => theme.borderRadius.small};

  color: ${({ theme, ghost }) => (ghost ? theme.color.primary : theme.color.textLight)};
  background-color: ${({ theme, ghost }) => (ghost ? theme.color.textLight : theme.color.primary)};
  border: 1px solid ${({ theme }) => theme.color.primary};

  transition: color 0.2s, background-color 0.2s, border-color 0.2s;

  &:hover {
    background-color: ${({ theme, ghost }) =>
      ghost ? theme.color.textLight : theme.color.primaryStrong};
    border-color: ${({ theme }) => theme.color.primaryStrong};
    color: ${({ theme, ghost }) => (ghost ? theme.color.primaryStrong : theme.color.textLight)};
  }

  &[disabled] {
    color: ${({ theme, ghost }) => (ghost ? theme.color.muted : theme.color.textLight)};
    background-color: ${({ theme, ghost }) => (ghost ? theme.color.textLight : theme.color.muted)};
    border-color: ${({ theme }) => theme.color.muted};
    transition: none;
  }
`;

export default Button;
