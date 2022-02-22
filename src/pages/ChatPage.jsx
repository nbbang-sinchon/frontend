import React from 'react';
import { useParams } from 'react-router-dom';
import Chats from '../components/Chats';
import Header from '../components/Header';
import Main from '../components/Main';
import PartyStatus from '../components/PartyStatus';
import useChat from '../hooks/useChat';

function ChatPage() {
  const { id } = useParams();
  const { party, chats } = useChat(id);

  return (
    <>
      <Header />
      <Main background="LIGHT_GRAY">
        <PartyStatus party={party} />
        <Chats chats={chats} />
      </Main>
    </>
  );
}

export default ChatPage;
