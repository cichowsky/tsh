import styled from 'styled-components';
import { SRatingDisplay } from 'components/RatingDisplay/RatingDisplay.styles';

export const ProductCardList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(27.2rem, 1fr));
  gap: ${({ theme }) => theme.size.m};

  ${({ theme }) => theme.mq.desktop} {
    gap: ${({ theme: { size } }) => `${size.l} ${size.m}`};
  }
`;

export const SCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 40rem;
  width: 100%;
  max-width: 42rem;
  margin: 0 auto;

  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: ${({ theme }) => theme.font.size.s};

  background-color: ${({ theme }) => theme.color.containerBg};
  border-radius: ${({ theme }) => theme.borderRadius.normal};

  ${SRatingDisplay} {
    margin-top: auto;
  }
`;

export const SContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: ${({ theme: { size } }) => `${size.s} ${size.s} ${size.m}`};
`;

type ImageWrapperProps = {
  muted?: boolean;
};

export const SImageWrapper = styled.div<ImageWrapperProps>`
  position: relative;

  & > img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: auto;
    aspect-ratio: 288 / 170;
    filter: ${({ muted }) => muted && 'grayscale(100%)'};
  }
`;

export const SBadge = styled.span`
  position: absolute;
  left: 0;
  top: ${({ theme }) => theme.size.s};
  padding: ${({ theme: { size } }) => `${size.xxs} ${size.s}`};
  background-color: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textLight};
  z-index: 1;
`;
