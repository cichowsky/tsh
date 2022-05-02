import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { rotate } from 'styles/keyframes';

const SpinnerContainer = styled.div`
  text-align: center;

  & > svg {
    animation: ${rotate} 0.9s infinite linear;
  }
`;

const Sronly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  white-space: nowrap;
  border: 0;
  clip: rect(0, 0, 0, 0);
`;

const Spinner = () => {
  return (
    <SpinnerContainer>
      <Sronly>Loading</Sronly>
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="30" cy="30" r="28" stroke={theme.color.inputBorder} strokeWidth="4" />
        <path
          d="M58 30C58 14.536 45.464 2 30 2"
          stroke={theme.color.primary}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </SpinnerContainer>
  );
};

export default Spinner;
