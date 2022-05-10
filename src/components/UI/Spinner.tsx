import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import { rotate } from 'styles/keyframes';
import { SRonly } from 'components/UI';

export const SSpinnerWrapper = styled.div`
  text-align: center;

  & > svg {
    animation: ${rotate} 0.9s infinite linear;
  }
`;

const Spinner = () => {
  return (
    <SSpinnerWrapper>
      <SRonly>Loading</SRonly>
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
    </SSpinnerWrapper>
  );
};

export default Spinner;
