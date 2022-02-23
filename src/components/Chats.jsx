import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Chat from './Chat';
import { SCROLL_PRIMARY } from '../styles/constants';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;
  padding: 20px 10px;
  margin: 10px 0;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: auto;

  ${SCROLL_PRIMARY};
`;

function Chats({ chats }) {
  const chatsRef = useRef();

  const makeChats = (chats) =>
    chats.map((chat, i, arr) => {
      const isSender = chat.sender.id === 1;
      const isContinuous = i > 0 && arr[i - 1].sender.id === chat.sender.id;
      return <Chat key={chat.id} chat={chat} isSender={isSender} isContinuous={isContinuous} />;
    });

  useEffect(() => {
    if (!chatsRef.current) {
      return;
    }

    chatsRef.current.scrollTop = window.innerHeight;
  }, [chats]);

  return <Container ref={chatsRef}>{makeChats(chats)}</Container>;
}

Chats.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object),
};

export default Chats;
