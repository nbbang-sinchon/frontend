import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { COLORS, SIZES } from '../styles/constants';
import plainButton from '../styles/plainButton';

const Container = styled.header`
  display: flex;
  align-items: space-between;
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
  font-size: 15px;
  font-weight: 400;
  margin-left: 10px;
`;

function MyPartyHeader({ header, onClick }) {
  return (
    <Container>
      {header}
      <ChangeBtn onClick={onClick}>변경</ChangeBtn>
    </Container>
  );
}

export default MyPartyHeader;

MyPartyHeader.propTypes = {
  header: PropTypes.string,
  onClick: PropTypes.func,
};
