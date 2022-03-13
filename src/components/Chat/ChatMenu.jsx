import styled from '@emotion/styled';
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
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

  width: 280px;
  height: 300px;
  margin: 200px 0 0 80px;
`;

const Menu = styled(plainButton)`
  width: 100%;
  margin-bottom: 25px;
  margin-top: ${(props) => props.bottom && '40px'};
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
  const [isChangingStatus, setIsChangingStatus] = useState(false);

  const isOwner = party?.owner?.id === loginId;

  const exitParty = async () => {
    const json = await customFetch(`/parties/${party.id}/exit`, 'POST');

    if (json?.statusCode === 200) {
      navigate(`/parties/${party.id}`);
    } else if (json?.statusCode) {
      setModalState(() => ({ visible: true, content: json.message, type: 'ALERT' }));
    }
  };

  const patchStatus = async ({ target }) => {
    const status = target.dataset.status;

    if (!status) {
      return;
    }

    const json = await customFetch(`/parties/${party.id}/status`, 'PATCH', JSON.stringify({ status }));

    if (json?.statusCode === 200) {
      navigate(`/parties/${party.id}`);
    }
  };

  if (isChangingStatus) {
    return (
      <Container isVisible={isVisible}>
        <Image src={images.breadBoard} />
        <Content onClick={patchStatus}>
          <Menu data-status="OPEN">모집 중</Menu>
          <Menu data-status="FULL">모집 완료</Menu>
          <Menu data-status="CLOSED">모집 종료</Menu>
          <Menu bottom onClick={() => setIsChangingStatus(false)}>
            이전으로
          </Menu>
        </Content>
      </Container>
    );
  } else if (isOwner) {
    return (
      <Container isVisible={isVisible}>
        <Image src={images.breadBoard} />
        <Content>
          <Link to={`/parties/${party.id}`}>
            <Menu>파티 보기</Menu>
          </Link>
          <Menu onClick={() => setIsChangingStatus(true)}>모집 상태 변경</Menu>
          <Link to={`/newparty/${party.id}`}>
            <Menu>파티 수정</Menu>
          </Link>
        </Content>
      </Container>
    );
  } else {
    return (
      <>
        <Container isVisible={isVisible}>
          <Image src={images.breadBoard} />
          <Content>
            <Link to={`/parties/${party.id}`}>
              <Menu>파티 보기</Menu>
            </Link>
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
