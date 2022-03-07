import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { images } from '../../assets/assets';
import plainButton from '../../styles/plainButton';

const Container = styled.div`
  position: absolute;
  top: 200px;
  right: ${(props) => (props.isShown && '-40px') || '-500px'};
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
  margin: 150px 0 0 80px;
`;

const Menu = styled(plainButton)`
  margin-bottom: 25px;
`;

function ChatMenu({ isShown }) {
  return (
    <Container isShown={isShown}>
      <Image src={images.breadBoard} />
      <Content>
        <Menu>파티 나가기</Menu>
        <Menu>모집 상태 변경</Menu>
        <Menu>파티 수정</Menu>
        <Menu>파티 보기</Menu>
        <Menu>파티 삭제</Menu>
      </Content>
    </Container>
  );
}

ChatMenu.propTypes = {
  isShown: PropTypes.bool,
};

export default ChatMenu;
