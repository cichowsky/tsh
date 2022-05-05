import styled from 'styled-components';

type ParagraphProps = {
  muted?: boolean;
  mb?: string;
};

const Paragraph = styled.p<ParagraphProps>`
  margin-top: 0;
  color: ${({ theme, muted }) => muted && theme.color.muted};
  margin-bottom: ${({ mb }) => mb};
`;

export default Paragraph;
