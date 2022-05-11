import styled, { css } from 'styled-components';

type HeadingProps = {
  isSmall?: boolean;
  isBig?: boolean;
};
const Heading = styled.h2<HeadingProps>`
  font-size: ${({ theme, isSmall }) => (isSmall ? theme.font.size.m : theme.font.size.l)};
  line-height: ${({ theme, isSmall }) => (isSmall ? theme.font.size.m : theme.size.xl)};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.size.xs};

  ${({ isBig }) =>
    isBig &&
    css`
      font-size: ${({ theme }) => theme.font.size.xl};
      line-height: ${({ theme }) => theme.size.xl};
      margin-bottom: 1em;
    `}
`;

export default Heading;
