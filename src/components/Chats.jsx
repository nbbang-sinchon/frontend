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
  return (
    <Container>
      {chats.map((chat) => (
        <Chat key={chat.id} chat={chat} isSender={chat.sender.id === 1} />
      ))}
    </Container>
  );
}

Chats.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object),
};

export default Chats;
