import styled from 'styled-components';

type HeadingProps = {
  isSmall?: boolean;
};
const Heading = styled.h2<HeadingProps>`
  font-size: ${({ theme, isSmall }) => (isSmall ? theme.font.size.m : theme.font.size.l)};
  line-height: ${({ theme, isSmall }) => (isSmall ? theme.font.size.m : theme.size.xl)};
  margin-top: 0;
  margin-bottom: ${({ theme }) => theme.size.xs};
`;

export default Heading;
