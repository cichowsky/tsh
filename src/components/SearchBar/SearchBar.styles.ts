import styled from 'styled-components';
import { Input } from 'components/UI';

export const SSearchBarWrapper = styled.div`
  position: relative;
`;

export const SInput = styled(Input)`
  padding-right: ${({ theme }) => theme.size.xxl};
  width: 100%;
`;

export const SSearchBarButton = styled.button`
  color: ${({ theme }) => theme.color.text};
  position: absolute;
  right: ${({ theme }) => theme.size.xs};
  top: 50%;
  transform: translateY(-50%);
  width: ${({ theme }) => theme.size.l};
  height: ${({ theme }) => theme.size.l};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  line-height: 1;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.borderRadius.normal};
  border: none;
`;
