import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { icons, images } from '../assets/assets';
import { HOVER_CURSOR_PONTER } from '../styles/constants';
import { SERVER_URL } from '../config';

const Container = styled.div`
  position: relative;
  font-size: 5px;
  text-align: center;
  width: 50px;
  ${HOVER_CURSOR_PONTER};

  img {
    width: 28px;
  }

  svg {
    position: absolute;
    right: 14px;
    top: 8px;
    width: 20px;
    height: 20px;

    path {
      fill: green;
    }
  }
`;

function BreadBoardStatus({ id, status }) {
  const toggleStatus = () => {
    const newStatus = status === 'SEND' ? 'CHECK' : 'SEND';

    fetch(`${SERVER_URL}/bread-board/${id}/send-status`, {
      method: 'POST',
      mode: 'cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sendStatus: newStatus }),
    });
  };

  return (
    <Container onClick={toggleStatus}>
      <img src={images.bread} />
      {status === 'CHECK' && <icons.CheckIcon />}
      <div>{status === 'CHECK' ? '송금완료!' : '송금 대기중'}</div>
    </Container>
  );
}

BreadBoardStatus.propTypes = {
  status: PropTypes.string,
  id: PropTypes.string,
};

export default BreadBoardStatus;
