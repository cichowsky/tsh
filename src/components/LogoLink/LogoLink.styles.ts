import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  height: ${({ theme }) => theme.size.xl};
`;
