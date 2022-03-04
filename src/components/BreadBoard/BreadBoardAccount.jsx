import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { SERVER_URL } from '../../config';

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
    <>
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
        onClick={copyAccount}
      />
    </>
  );
}

BreadBoardAccount.propTypes = {
  id: PropTypes.string,
  bank: PropTypes.string,
  account: PropTypes.string,
};

export default BreadBoardAccount;
