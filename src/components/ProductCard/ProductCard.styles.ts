import styled from 'styled-components';
import { StyledRatingDisplay } from 'components/RatingDisplay/RatingDisplay.styles';

export const ProductCardList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(27.2rem, 1fr));
  gap: 2.4rem;

  ${({ theme }) => theme.mq.desktop} {
    gap: 3.2rem 2.4rem;
  }
`;

export const StyledCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 40rem;
  max-width: 42rem;
  margin: 0 auto;

  font-size: ${({ theme }) => theme.font.size.xs};
  line-height: ${({ theme }) => theme.font.size.s};

  background-color: ${({ theme }) => theme.color.containerBg};
  border-radius: ${({ theme }) => theme.borderRadius.normal};

  ${StyledRatingDisplay} {
    margin-top: auto;
  }
`;

export const StyledContentWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 1.6rem 1.6rem 2.4rem;
`;

type ImageWrapperProps = {
  muted?: boolean;
};

export const StyledImageWrapper = styled.div<ImageWrapperProps>`
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

export const StyledBadge = styled.span`
  position: absolute;
  left: 0;
  top: 1.6rem;
  padding: 0.4rem 1.6rem;
  background-color: ${({ theme }) => theme.color.accent};
  color: ${({ theme }) => theme.color.textLight};
  z-index: 1;
`;
