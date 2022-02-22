import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Chat from './Chat';

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px 10px;
`;

function Chats({ chats }) {
  const makeChats = (chats) =>
    chats.map((chat, i, arr) => {
      const isSender = chat.sender.id === 1;
      const isContinuous = i > 0 && arr[i - 1].sender.id === chat.sender.id;
      return <Chat key={chat.id} chat={chat} isSender={isSender} isContinuous={isContinuous} />;
    });

  return <Container>{makeChats(chats)}</Container>;
}

Chats.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object),
};

export default Chats;
