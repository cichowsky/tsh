import styled from 'styled-components';
import checkIconURL from 'assets/icons/check.svg';

const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  color: white;
  width: ${({ theme }) => theme.size.m};
  height: ${({ theme }) => theme.size.m};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  background-color: ${({ theme }) => theme.color.inputBg};
  border: 1px solid ${({ theme }) => theme.color.inputBorder};
  transition: ${({ theme: { transitionTime } }) =>
    `border-color ${transitionTime}, background-color ${transitionTime}`};

  &:checked {
    background-color: ${({ theme }) => theme.color.primary};
    border-color: ${({ theme }) => theme.color.primary};
    color: white;
    background-image: url(${checkIconURL});
    background-repeat: no-repeat;
    background-size: 75%;
    background-position: 50% 25%;
  }
`;

export default Checkbox;
