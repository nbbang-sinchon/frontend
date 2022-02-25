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

function Chats({ chats, fetchChatRef }) {
  const chatsRef = useRef();
  const topRef = useRef();

  const makeChats = (chats) =>
    chats.map((chat, i, arr) => {
      const isContinuous = i > 0 && arr[i - 1].sender.id === chat.sender.id;

      if (i === 0) {
        return <Chat key={chat.id} chat={chat} isContinuous={isContinuous} isFirst />;
      } else {
        return <Chat key={chat.id} chat={chat} isContinuous={isContinuous} />;
      }
    });

  useEffect(() => {
    const observerCallback = async ([entries]) => {
      if (entries.isIntersecting) {
        const newLength = await fetchChatRef.current();
        const first = chatsRef.current.querySelectorAll(':scope > div');
        first[newLength].scrollIntoView();
      }
    };

    const observer = new IntersectionObserver(observerCallback);
    observer.observe(topRef.current);
  }, []);

  return (
    <Container ref={chatsRef}>
      <div ref={topRef} />
      {makeChats(chats)}
    </Container>
  );
}

Chats.propTypes = {
  chats: PropTypes.arrayOf(PropTypes.object),
  fetchChatRef: PropTypes.object,
  isLoading: PropTypes.bool,
};

export default Chats;
