import styled from '@emotion/styled';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { convertPrice } from '../utils/converter';
import { SERVER_URL } from '../config';

const Input = styled.input`
  display: flex;
  justify-content: flex-end;

  text-align: right;
  width: 40%;
  box-sizing: border-box;
`;

function BreadBoardPrice({ price, id, isDelivery }) {
  const inputRef = useRef();

  const submitPrice = (e) => {
    e.preventDefault();
    const target = e.target.closest('input') || e.target.querySelector('input');

    if (!target.validity.valid || !target.value) {
      formatPrice();
      return;
    }

    if (target.value != price) {
      fetch(`${SERVER_URL}/bread-board/${id}/${(isDelivery && 'delivery-fee') || 'price'}`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(target.value),
      });
    }

    formatPrice();
    target.blur();
  };

  const checkPrice = (e) => {
    e.target.setCustomValidity('');

    if (e.target.validity.patternMismatch) {
      e.target.setCustomValidity('0원 이상의 금액을 입력하세요');
      e.target.reportValidity();
      formatPrice();
      e.target.blur();
    }
  };

  const checkEnter = (e) => {
    if (e.keyCode === 13) {
      submitPrice(e);
    }
  };

  const clearPrice = () => {
    inputRef.current.value = price;
  };

  const formatPrice = () => {
    inputRef.current.value = convertPrice(price);
  };

  useEffect(() => {
    formatPrice();
  }, [price]);

  return (
    <Input
      placeholder="금액"
      pattern="\d*"
      disabled={false}
      onBlur={submitPrice}
      onInput={checkPrice}
      onKeyDown={checkEnter}
      onFocus={clearPrice}
      title=""
      ref={inputRef}
    />
  );
}

BreadBoardPrice.propTypes = {
  price: PropTypes.number,
  id: PropTypes.string,
  isDelivery: PropTypes.bool,
};

export default BreadBoardPrice;
