import styled from '@emotion/styled';
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { icons } from '../assets/assets';
import { COLORS, MODALS } from '../styles/constants';
import Logo from './Logo';
import Modal from './Modal';
import { hashTagStringToList, hashTagListToString } from '../utils/hashtags';
import useConfirm from '../hooks/useConfirm';
import useAlert from '../hooks/useAlert';
import useFetch from '../hooks/useFetch';

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  border-bottom: 2px solid ${COLORS.PRIMARY};
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
`;

const Column = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;

  svg {
    width: 35px;
    height: 35px;
  }

  &:hover svg {
    opacity: 0.8;
    cursor: pointer;
  }

  &:nth-of-type(2) {
    flex: 2;
  }
`;

const SaveButton = styled.button`
  font-size: 20px;
  font-weight: 400;
  border: 1.5px solid;
  border-radius: 15px;
  color: ${COLORS.WHITE};
  background-color: ${COLORS.PRIMARY};
  padding: 9px 18px 9px 18px;

  flex-grow: 0;
  flex-shrink: 0;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  padding-top: 100px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  position: sticky;
  top: 0;
  background-color: ${COLORS.WHITE};
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
`;

const TitleInput = styled.input`
  font-size: 20px;
  font-weight: 500;
  width: 100%;

  margin-bottom: 30px;

  border-bottom: 1px solid ${COLORS.DARK_GRAY};

  background-color: ${COLORS.LIGHT_GRAY};
  color: ${COLORS.DARK_GRAY};
`;

const HashTagInput = styled.input`
  font-size: 10px;
  font-weight: 400;
  width: 100%;

  margin-bottom: 20px;
  border-bottom: 1px solid ${COLORS.DARK_GRAY};

  background-color: ${COLORS.LIGHT_GRAY};
  color: ${COLORS.DARK_GRAY};
`;

const Select = styled.div`
  width: 100%;
  display: flex;
  items-align: center;
  margin-bottom: 40px;

  select {
    font-size: 10px;
    padding: 2px 5px;
    background-color: ${COLORS.LIGHT_GRAY};
    color: ${COLORS.DARK_GRAY};
  }

  select option {
    background-color: ${COLORS.WHITE};
    padding: 3px 0;
  }

  input {
    margin-left: 10px;
    font-size: 10px;
    width: 18%;
    border: 1px solid ${COLORS.BLACK};
    background-color: ${COLORS.LIGHT_GRAY};
    color: ${COLORS.DARK_GRAY};
  }
`;

const ContentInput = styled.textarea`
  font-size: 12px;
  font-weight: 400;
  width: 100%;
  word-wrap: break-word;
  border: none;
  padding-bottom: 400px;
  background-color: ${COLORS.LIGHT_GRAY};
  color: ${COLORS.DARK_GRAY};
  resize: none;
`;

function PatchParty({ id, party }) {
  const navigate = useNavigate();
  const { customFetch } = useFetch();
  const formRef = useRef();

  const { isConfirm, setIsConfirm, openConfirmModal, confirmModalVisible, onConfirm, onDisconfirm } = useConfirm();
  const { alertMessage, setAlertMessage, openAlertModal, alertModalVisible, closeAlertModal } = useAlert();

  const [inputs, setInputs] = useState({
    title: '',
    content: '',
    hashtags: [],
    place: 'SINCHON',
    goalNumber: 0,
  });

  const [newParty, setNewParty] = useState({
    title: '',
    content: '',
    hashtags: [],
    place: 'SINCHON',
    goalNumber: 0,
  });

  useEffect(() => {
    if (party) {
      setInputs({
        title: party.title,
        content: party.content,
        hashtags: hashTagListToString(party.hashtags),
        place: party.place,
        goalNumber: party.goalNumber,
      });
    }
  }, [party]);

  const onChange = (event) => {
    const { value, name } = event.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onClick = () => {
    const form = new FormData(formRef.current);
    const newParty = {
      title: form.get('title'),
      content: form.get('content'),
      hashtags: hashTagStringToList(form.get('hashtags')),
      place: form.get('place'),
      goalNumber: form.get('goalNumber'),
    };
    setNewParty(newParty);
    openConfirmModal();
  };

  useEffect(async () => {
    if (isConfirm) {
      const body = newParty;
      const json = await customFetch(`/parties/${id}`, 'PATCH', JSON.stringify(body));

      if (json.statusCode === 400) {
        setAlertMessage(json.errors[0].errorMessage);
        openAlertModal();
        setIsConfirm(false);
      } else if (json.statusCode === 200) {
        navigate('/');
      }
    }
  }, [isConfirm, newParty]);

  return (
    <>
      <Header>
        <Column>
          <Link to="/main">
            <icons.CancelIcon />
          </Link>
        </Column>
        <Column>
          <Logo titleVisible={false} />
        </Column>
        <Column>
          <SaveButton onClick={onClick}>??????</SaveButton>
        </Column>
      </Header>
      <Container>
        <InnerContainer>
          <form ref={formRef}>
            <TitleInput name="title" placeholder="?????? ????????? ???????????????." onChange={onChange} value={inputs.title} />
            <HashTagInput
              name="hashtags"
              placeholder="#??????????????? ?????? ????????? ???????????????."
              onChange={onChange}
              value={inputs.hashtags}></HashTagInput>
            <Select>
              <select name="place" onChange={onChange} value={inputs.place}>
                <option value="SINCHON">?????????</option>
                <option value="YEONHUI">?????????</option>
                <option value="CHANGCHEON">?????????</option>
              </select>
              <input
                name="goalNumber"
                type="number"
                min="1"
                placeholder="?????? ???"
                onChange={onChange}
                value={inputs.goalNumber}></input>
            </Select>
            <ContentInput
              name="content"
              placeholder="????????? ???????????????."
              onChange={onChange}
              value={inputs.content}></ContentInput>
          </form>
        </InnerContainer>
      </Container>
      {confirmModalVisible && !isConfirm && (
        <Modal type={MODALS.CONFIRM} visible={confirmModalVisible} onConfirm={onConfirm} onDisconfirm={onDisconfirm}>
          <h1>????????? ?????????????????????????</h1>
        </Modal>
      )}
      {alertModalVisible && alertMessage && (
        <Modal
          type={MODALS.ALERT}
          visible={alertModalVisible}
          closable={true}
          maskClosable={true}
          onClose={closeAlertModal}>
          <p>{alertMessage}</p>
        </Modal>
      )}
    </>
  );
}

PatchParty.propTypes = {
  party: PropTypes.object,
  id: PropTypes.string,
};

export default PatchParty;
