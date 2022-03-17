import React, { useEffect, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Chat from './Chat';
import { SCROLL_PRIMARY } from '../../styles/constants';
import { LoginStoreContext } from '../Stores/LoginStore';

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

function Chats({ chats, detectorRef }) {
  const firstChatRef = useRef();
  const oldChatRef = useRef();
  const lastChatRef = useRef();
  const chatsRef = useRef();
  const { loginId } = useContext(LoginStoreContext);

  const makeChats = (chats) =>
    chats.map((chat, i, arr) => {
      const isContinuous =
        i > 0 && (arr[i - 1].type === 'CHAT' || arr[i - 1].type === 'IMAGE') && arr[i - 1].sender.id === chat.sender.id;
      const isSender = chat.sender.id === loginId;

      return (
        <Chat
          key={chat.id}
          chat={chat}
          isContinuous={isContinuous}
          isSender={isSender}
          ref={i === 0 ? firstChatRef : i === arr.length - 1 ? lastChatRef : null}
        />
      );
    });

  const scroll = (element, smooth) => {
    if (!element) {
      return;
    }

    const image = element?.querySelector('img');

    if (image) {
      image.onload = () => element.scrollIntoView({ behavior: smooth && 'smooth' });
    } else {
      element.scrollIntoView({ behavior: smooth && 'smooth' });
    }
  };

  useEffect(() => {
    if (!oldChatRef.current) {
      scroll(lastChatRef.current);
      oldChatRef.current = firstChatRef.current;
      lastChatRef.current = lastChatRef.current || firstChatRef.current;
    } else if (firstChatRef?.current === oldChatRef?.current) {
      scroll(lastChatRef.current, true);
    } else {
      scroll(oldChatRef.current);
      oldChatRef.current = firstChatRef.current;
    }
  }, [chats]);

  return (
    <Container ref={chatsRef}>
      <span ref={detectorRef} />
      {makeChats(chats)}
    </Container>
  );
}

Chats.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object),
  detectorRef: PropTypes.object,
};

export default Chats;
