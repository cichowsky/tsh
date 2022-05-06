import styled, { css } from 'styled-components';
import searchIconURL from 'assets/icons/search.svg';

type InputProps = {
  search?: boolean;
};

const Input = styled.input<InputProps>`
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  background-color: ${({ theme }) => theme.color.inputBg};
  padding: 1.5rem ${({ theme }) => theme.size.s};
  border: 1px solid ${({ theme }) => theme.color.inputBorder};

  &::placeholder {
    color: ${({ theme }) => theme.color.muted};
  }

  ${({ search }) =>
    search &&
    css`
      padding-right: ${({ theme }) => theme.size.xxl};
      background-image: url(${searchIconURL});
      background-repeat: no-repeat;
      background-size: ${({ theme }) => theme.size.m};
      background-position: calc(100% - 1.2rem) 50%;
    `}
`;

export default Input;
