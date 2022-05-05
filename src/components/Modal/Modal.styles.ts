import { CSSProperties } from 'react';
import styled from 'styled-components';
import { theme as themes } from 'styles/theme';

export const overlayStyles = {
  backgroundColor: themes.color.overlay,
  zIndex: 100,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2.4rem',
} as CSSProperties;

export const contentStyles = {
  position: 'relative',
  inset: 'auto',
  width: '100%',
  maxWidth: '60rem',
  padding: 0,
  backgroundColor: themes.color.containerBg,
  border: 'none',
  borderRadius: themes.borderRadius.normal,
} as CSSProperties;

export const StyledCloseButton = styled.button`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 3.2rem;
  height: 3.2rem;
  padding: 0;

  color: ${({ theme }) => theme.color.iconClose};
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.iconCloseBg};
`;
