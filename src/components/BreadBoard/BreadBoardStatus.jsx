import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { icons, images } from '../../assets/assets';
import { HOVER_CURSOR_PONTER } from '../../styles/constants';
import useFetch from '../../hooks/useFetch';

const Container = styled.div`
  position: relative;
  top: 5px;
  font-size: 5px;
  text-align: center;
  width: 50px;
  padding-left: 5px;
  ${HOVER_CURSOR_PONTER};

  img {
    width: 24px;
  }

  svg {
    position: absolute;
    right: 16px;
    top: 6px;
    width: 20px;
    height: 20px;

    path {
      fill: green;
    }
  }
`;

function BreadBoardStatus({ id, status, isDelivery, setIsNbbanged, disabled }) {
  const { customFetch } = useFetch();

  const toggleStatus = () => {
    if (disabled) {
      return;
    }

    if (isDelivery) {
      setIsNbbanged((prev) => !prev);
      return;
    }

    customFetch(`/bread-board/${id}/send-status`, 'POST', JSON.stringify({ isSent: !status }));
  };

  return (
    <Container onClick={toggleStatus}>
      <img src={images.bread} />
      {status && <icons.CheckIcon />}
      {isDelivery ? (
        <div>{status ? '배달비\n나누기' : '배달비\n안 나누기'}</div>
      ) : (
        <div>{status ? '송금 완료!' : '송금 대기중'}</div>
      )}
    </Container>
  );
}

BreadBoardStatus.propTypes = {
  status: PropTypes.bool,
  id: PropTypes.string,
  isDelivery: PropTypes.bool,
  setIsNbbanged: PropTypes.func,
  disabled: PropTypes.bool,
};

export default BreadBoardStatus;
