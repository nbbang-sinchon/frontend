import styled from '@emotion/styled';
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { images } from '../../assets/assets';
import plainButton from '../../styles/plainButton';
import { LoginStoreContext } from '../Stores/LoginStore';

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

function ChatMenu({ isVisible, party }) {
  const { loginId } = useContext(LoginStoreContext);
  const isOwner = party?.owner?.id === loginId;

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
      <Container isVisible={isVisible}>
        <Image src={images.breadBoard} />
        <Content>
          <Menu>파티 보기</Menu>
          <Menu>파티 나가기</Menu>
        </Content>
      </Container>
    );
  }
}

ChatMenu.propTypes = {
  isVisible: PropTypes.bool,
  party: PropTypes.object,
};

export default ChatMenu;
