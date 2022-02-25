import React from 'react';
import { useParams } from 'react-router-dom';
import ChatForm from '../components/ChatForm';
import Chats from '../components/Chats';
import Header from '../components/Header';
import Main from '../components/Main';
import PartyStatus from '../components/PartyStatus';
import useChat from '../hooks/useChat';

function ChatPage() {
  const { id } = useParams();
  const { party, chats, fetchChatRef } = useChat(id);

  return (
    <>
      <Header />
      <Main background="LIGHT_GRAY" fitHeight>
        <PartyStatus party={party} />
        <Chats chats={chats} fetchChatRef={fetchChatRef} />
        <ChatForm partyId={id} />
      </Main>
    </>
  );
}

export default ChatPage;
