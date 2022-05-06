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
  padding: themes.size.m,
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

export const SCloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.size.s};
  right: ${({ theme }) => theme.size.s};

  display: flex;
  align-items: center;
  justify-content: center;

  width: ${({ theme }) => theme.size.l};
  height: ${({ theme }) => theme.size.l};
  padding: 0;

  color: ${({ theme }) => theme.color.iconClose};
  border: none;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.iconCloseBg};
`;
