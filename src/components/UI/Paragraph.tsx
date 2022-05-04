import styled from 'styled-components';

type ParagraphProps = {
  muted?: boolean;
};

const Paragraph = styled.p<ParagraphProps>`
  margin-top: 0;
  color: ${({ theme, muted }) => muted && theme.color.muted};
`;

export default Paragraph;
