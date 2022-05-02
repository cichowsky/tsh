import styled from 'styled-components';

const Heading = styled.h2`
  font-size: ${({ theme }) => theme.font.size.xl};
  line-height: 4rem;
  margin-top: 0;
  margin-bottom: 1em;
`;

export default Heading;
