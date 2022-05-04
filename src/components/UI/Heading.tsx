import styled from 'styled-components';

type HeadingProps = {
  isSmall?: boolean;
};
const Heading = styled.h2<HeadingProps>`
  font-size: ${({ theme, isSmall }) => (isSmall ? theme.font.size.s : theme.font.size.xl)};
  line-height: ${({ theme, isSmall }) => (isSmall ? theme.font.size.m : '4rem')};
  margin-top: 0;
  margin-bottom: ${({ isSmall }) => (isSmall ? '0.5em' : '1em')};
`;

export default Heading;
