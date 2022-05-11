import styled from 'styled-components';

type FormGroupProps = {
  column?: boolean;
};

const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  align-items: ${({ column }) => (column ? 'stretch' : 'center')};
  gap: ${({ theme }) => theme.size.xs};
`;

export default FormGroup;
