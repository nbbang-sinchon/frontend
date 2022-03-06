import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { images } from '../../assets/assets';

const Container = styled.div`
  position: absolute;
  top: 200px;
  right: ${(props) => (props.isShown && '-40px') || '-500px'};
  transition: right ease-in-out 0.3s;
  width: 500px;
  background-color: white;
  z-index: 1;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
`;

function ChatMenu({ isShown }) {
  return (
    <Container isShown={isShown}>
      <Image src={images.breadBoard} />
    </Container>
  );
}

ChatMenu.propTypes = {
  isShown: PropTypes.bool,
};

export default ChatMenu;
