import styled from 'styled-components';

type HeadingProps = {
  isSmall?: boolean;
};
const Heading = styled.h2<HeadingProps>`
  font-size: ${({ theme, isSmall }) => (isSmall ? theme.font.size.m : theme.font.size.l)};
  line-height: ${({ theme, isSmall }) => (isSmall ? theme.font.size.m : '4rem')};
  margin-top: 0;
  margin-bottom: 0.8rem;
`;

export default Heading;
