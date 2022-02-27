import React from 'react';
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

function Chats({ chats, chatsRef, detectorRef }) {
  const makeChats = (chats) =>
    chats.map((chat, i, arr) => {
      const isContinuous = i > 0 && arr[i - 1].sender.id === chat.sender.id;

      return <Chat key={chat.id} chat={chat} isContinuous={isContinuous} />;
    });

  return (
    <Container ref={chatsRef}>
      <div ref={detectorRef} />
      {makeChats(chats)}
    </Container>
  );
}

Chats.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object),
  detectorRef: PropTypes.object,
  chatsRef: PropTypes.object,
};

export default Chats;
