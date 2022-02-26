import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { icons } from '../assets/assets';
import { COLORS } from '../styles/constants';

const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${COLORS.WHITE};
  border-radius: 10px;
  width: 360px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 40px;

  h1 {
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    margin-top: 25px;
    margin-bottom: 40px;
  }

  button {
    background-color: ${COLORS.PRIMARY};
    color: white;
    padding: 12px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }

  button:hover {
    opacity: 1;
  }

  svg {
    position: relative;
    bottom: 30px;
    left: 160px;
    cursor: pointer;

    path {
      color: black;
    }
  }
`;

function ConfirmModal({ visible, children, onConfirm, onDisconfirm }) {
  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0">
          {children}
          <button onClick={onConfirm}>확인</button>
          <button onClick={onDisconfirm}>취소</button>
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

function AlertModal({ visible, children, closable, maskClosable, onClose }) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper onClick={maskClosable ? onMaskClick : null} tabIndex="-1" visible={visible}>
        <ModalInner tabIndex="0">
          {closable && <icons.CancelIcon onClick={close} />}
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

ConfirmModal.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.object.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onDisconfirm: PropTypes.func.isRequired,
};

ConfirmModal.defaultProps = {
  visible: false,
};

AlertModal.propTypes = {
  visible: PropTypes.bool,
  children: PropTypes.object.isRequired,
  closable: PropTypes.bool,
  maskClosable: PropTypes.bool,
  onClose: PropTypes.func,
};

AlertModal.defaultProps = {
  visible: false,
  closable: true,
  maskClosable: true,
};

export { ConfirmModal, AlertModal };
