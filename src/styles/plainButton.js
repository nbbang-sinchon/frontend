import styled from '@emotion/styled';
import { COLORS } from './constants';

const plainButton = styled.button`
  padding: 10px;
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
  background-color: ${COLORS.PRIMARY};
  color: ${COLORS.WHITE};
  border: none;
  border-radius: 10px;
  white-space: nowrap;

  &:hover {
    cursor: pointer;
  }
`;

export default plainButton;
