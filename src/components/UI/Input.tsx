import styled from 'styled-components';

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
`;

export default Input;
