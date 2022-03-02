import React from 'react';
import { useParams } from 'react-router-dom';
import ChatForm from '../components/ChatForm';
import Chats from '../components/Chats';
import Header from '../components/Header';
import Main from '../components/Main';
import PartyDetailHeader from '../components/PartyDetailHeader';
import useChat from '../hooks/useChat';
import useChatUpdate from '../hooks/useChatUpdate';

function ChatPage() {
  const { id } = useParams();
  const { party, chats, setChats } = useChat(id);
  const detectorRef = useChatUpdate(id, chats, setChats);

  return (
    <>
      <Header />
      <Main background="LIGHT_GRAY" fitHeight>
        <PartyDetailHeader party={party} />
        <Chats chats={chats} detectorRef={detectorRef} />
        <ChatForm partyId={id} />
      </Main>
    </>
  );
}

export default ChatPage;
