import styled, { css } from 'styled-components';

type ParagraphProps = {
  muted?: boolean;
  mb?: string;
  isBig?: boolean;
};

const Paragraph = styled.p<ParagraphProps>`
  margin-top: 0;
  color: ${({ theme, muted }) => muted && theme.color.muted};
  margin-bottom: ${({ mb }) => mb};

  ${({ isBig }) =>
    isBig &&
    css`
      font-size: ${({ theme }) => theme.font.size.m};
      line-height: ${({ theme }) => theme.font.size.l};
    `}
`;

export default Paragraph;
