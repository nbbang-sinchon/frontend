import React from 'react';
import { useParams } from 'react-router-dom';
import BreadBoard from '../components/BreadBoard';
import ChatForm from '../components/ChatForm';
import Chats from '../components/Chats';
import Header from '../components/Header';
import Main from '../components/Main';
import PartyDetailHeader from '../components/PartyDetailHeader';
import useBreadBoard from '../hooks/useBreadBoard';
import useChat from '../hooks/useChat';
import useChatUpdate from '../hooks/useChatUpdate';

function ChatPage() {
  const { id } = useParams();
  const { party, chats, setChats } = useChat(id);
  const detectorRef = useChatUpdate(id, chats, setChats);
  const { isShown, toggleBreadBoard } = useBreadBoard();

  return (
    <>
      <Header />
      <Main background="LIGHT_GRAY" fitHeight>
        <PartyDetailHeader party={party} toggleBreadBoard={toggleBreadBoard} />
        <Chats chats={chats} detectorRef={detectorRef} />
        <ChatForm partyId={id} />
      </Main>
      <BreadBoard isShown={isShown} party={party} />
    </>
  );
}

export default ChatPage;
