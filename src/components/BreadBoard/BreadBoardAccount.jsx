import React, { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { SERVER_URL } from '../../config';
import { icons } from '../../assets/assets';
import { HOVER_CURSOR_PONTER } from '../../styles/constants';

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > input {
    font-size: 16px;
    width: 35%;

    &:last-of-type {
      text-align: right;
      width: 65%;
    }
  }

  svg {
    position: absolute;
    width: 28px;
    height: 28px;
    right: -45px;
    ${HOVER_CURSOR_PONTER};
  }
`;

function BreadBoardAccount({ id, bank, account }) {
  const bankRef = useRef();
  const accountRef = useRef();

  const submitAccount = (e) => {
    e.preventDefault();

    if (!bankRef.current?.value || !accountRef.current?.value) {
      return;
    }

    if (!accountRef.current?.validity?.valid) {
      return;
    }

    const isUpdated = bankRef.current?.value != bank || accountRef.current?.value != account;
    const body = { bank: bankRef.current?.value, accountNumber: accountRef.current?.value };

    if (isUpdated) {
      fetch(`${SERVER_URL}/bread-board/${id}/account`, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        credentials: 'include',
      });
    }

    e.target.blur();
  };

  const checkAccount = (e) => {
    e.target.setCustomValidity('');

    if (e.target.validity.patternMismatch) {
      e.target.setCustomValidity('올바른 계좌번호를 입력하세요');
      e.target.reportValidity();
      e.target.value = account;
      e.target.blur();
    }
  };

  const checkEnter = (e) => {
    if (e.keyCode === 13) {
      submitAccount(e);
    }
  };

  const copyAccount = () => {
    if (accountRef.current?.value) {
      navigator.clipboard.writeText(accountRef.current.value);
    }
  };

  useEffect(() => {
    bankRef.current.value = bank;
    accountRef.current.value = account;
  }, [bank, account]);

  return (
    <Container>
      <input
        placeholder="은행이름"
        ref={bankRef}
        maxLength="8"
        disabled={false}
        onBlur={submitAccount}
        onKeyDown={checkEnter}
      />
      <input
        placeholder="계좌번호"
        ref={accountRef}
        disabled={false}
        pattern="[0-9\-]*"
        onInput={checkAccount}
        onBlur={submitAccount}
        onKeyDown={checkEnter}
      />
      <icons.CopyIcon onClick={copyAccount} />
    </Container>
  );
}

BreadBoardAccount.propTypes = {
  id: PropTypes.string,
  bank: PropTypes.string,
  account: PropTypes.string,
};

export default BreadBoardAccount;
