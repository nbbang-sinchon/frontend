import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { icons, images } from '../../assets/assets';
import { HOVER_CURSOR_PONTER } from '../../styles/constants';
import { SERVER_URL } from '../../config';

const Container = styled.div`
  position: relative;
  font-size: 5px;
  text-align: center;
  width: 50px;
  padding-left: 5px;
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

function BreadBoardStatus({ id, status, isDelivery, setIsNbbanged }) {
  const toggleStatus = () => {
    if (isDelivery) {
      setIsNbbanged((prev) => !prev);
      return;
    }

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
      {(status === 'CHECK' || status === true) && <icons.CheckIcon />}
      {isDelivery ? (
        <div>{status ? '배달비\n나누기' : '배달비\n안 나누기'}</div>
      ) : (
        <div>{status === 'CHECK' ? '송금완료!' : '송금 대기중'}</div>
      )}
    </Container>
  );
}

BreadBoardStatus.propTypes = {
  status: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  id: PropTypes.string,
  isDelivery: PropTypes.bool,
  setIsNbbanged: PropTypes.func,
};

export default BreadBoardStatus;
