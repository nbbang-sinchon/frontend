import styled from '@emotion/styled';
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { images } from '../../assets/assets';
import plainButton from '../../styles/plainButton';
import { LoginStoreContext } from '../Stores/LoginStore';
import useFetch from '../../hooks/useFetch';
import Modal from '../Modal';

const Container = styled.div`
  position: absolute;
  top: 200px;
  right: ${(props) => (props.isVisible && '-40px') || '-500px'};
  transition: right ease-in-out 0.3s;
  width: 500px;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 280px;
  height: 300px;
  margin: 150px 0 0 80px;
`;

const Menu = styled(plainButton)`
  margin-bottom: 25px;
`;

const ModalText = styled.div`
  font-size: 20px;
  font-weight: 500;
  padding-top: 25px;
  padding-bottom: 40px;
`;

function ChatMenu({ isVisible, party }) {
  const { loginId } = useContext(LoginStoreContext);
  const { customFetch } = useFetch();
  const navigate = useNavigate();
  const [modalState, setModalState] = useState({
    visible: false,
    content: '파티에서 나가시겠습니까?',
    type: 'CONFIRM',
  });

  const isOwner = party?.owner?.id === loginId;

  const exitParty = async () => {
    const json = await customFetch(`/parties/${party.id}/exit`, 'POST');

    if (json?.statusCode === 200) {
      navigate(`/parties/${party.id}`);
    } else if (json?.statusCode) {
      setModalState(() => ({ visible: true, content: json.message, type: 'ALERT' }));
    }
  };

  if (isOwner) {
    return (
      <Container isVisible={isVisible}>
        <Image src={images.breadBoard} />
        <Content>
          <Menu>파티 보기</Menu>
          <Menu>모집 상태 변경</Menu>
          <Menu>파티 수정</Menu>
        </Content>
      </Container>
    );
  } else {
    return (
      <>
        <Container isVisible={isVisible}>
          <Image src={images.breadBoard} />
          <Content>
            <Menu>파티 보기</Menu>
            <Menu onClick={() => setModalState((prev) => ({ ...prev, visible: true }))}>파티 나가기</Menu>
          </Content>
        </Container>
        <Modal
          type={modalState.type}
          visible={modalState.visible}
          onConfirm={exitParty}
          onDisconfirm={() => setModalState((prev) => ({ ...prev, visible: false }))}
          onClose={() => setModalState((prev) => ({ ...prev, visible: false }))}>
          <ModalText>{modalState.content}</ModalText>
        </Modal>
      </>
    );
  }
}

ChatMenu.propTypes = {
  isVisible: PropTypes.bool,
  party: PropTypes.object,
};

export default ChatMenu;
