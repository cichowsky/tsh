import styled from 'styled-components';

type FormGroupProps = {
  column?: boolean;
};

const FormGroup = styled.div<FormGroupProps>`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  align-items: ${({ column }) => (column ? 'flex-start' : 'center')};
  gap: 0.8rem;
`;

export default FormGroup;
