import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { COLORS, SIZES } from '../../styles/constants';
import plainButton from '../../styles/plainButton';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 25px;

  padding: 10px 30px;
  box-sizing: border-box;
  border-top: 2px solid ${COLORS.PRIMARY};
  border-bottom: 2px solid ${COLORS.PRIMARY};
  min-width: ${SIZES.MIN_WIDTH};
  position: sticky;
  top: 0;
  background-color: white;
  font-weight: 500;
`;

const ChangeBtn = styled(plainButton)`
  font-size: 20px;
  font-weight: 500;
`;

function MyPartyHeader({ header, onClick, toggle }) {
  return (
    <Container>
      {header}
      <ChangeBtn onClick={onClick}>{toggle ? '종료된 파티' : '참여 중인 파티'}</ChangeBtn>
    </Container>
  );
}

export default MyPartyHeader;

MyPartyHeader.propTypes = {
  header: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};
