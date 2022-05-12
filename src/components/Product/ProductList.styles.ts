import styled, { css } from 'styled-components';
import { fadeIn, fade50 } from 'styles/keyframes';
import { SSpinnerWrapper } from 'components/UI/Spinner';
import { ITEMS_PER_PAGE } from 'app/config';

type ProductListProps = {
  isListFetching?: boolean;
};

export const SProductList = styled.section<ProductListProps>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(27.2rem, 1fr));
  justify-items: center;
  gap: ${({ theme }) => theme.size.m};
  transition: opcity 2s;

  ${({ theme }) => theme.mq.desktop} {
    gap: ${({ theme: { size } }) => `${size.l} ${size.m}`};
  }

  ${() =>
    ITEMS_PER_PAGE === 8 &&
    css`
      max-width: 86rem;
      margin: 0 auto;

      @media (min-width: 1225px) {
        max-width: none;
      }
    `}

  ${({ isListFetching }) =>
    isListFetching &&
    css`
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        z-index: 10;
        background-color: ${({ theme }) => theme.color.overlayLoader};
        opacity: 0;
        animation: ${fade50} 0.5s 1.5s forwards;
      }
    `}

    ${SSpinnerWrapper} {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
    animation: ${fadeIn} 0.5s 1.5s both;
  }
`;
