import React from 'react';
import { useParams } from 'react-router-dom';
import BreadBoard from '../components/BreadBoard/BreadBoard';
import ChatForm from '../components/Chat/ChatForm';
import Chats from '../components/Chat/Chats';
import Header from '../components/Header';
import Main from '../components/Main';
import PartyDetailHeader from '../components/Party/PartyDetailHeader';
import useBreadBoard from '../hooks/useBreadBoard';
import useBreadBoardUpdate from '../hooks/useBreadBoardUpdate';
import useChat from '../hooks/useChat';
import useChatUpdate from '../hooks/useChatUpdate';

function ChatPage() {
  const { id } = useParams();
  const { party, chats, setChats } = useChat(id);
  const detectorRef = useChatUpdate(id, chats, setChats);
  const { isShown, toggleBreadBoard, breadBoard, setBreadBoard } = useBreadBoard(id);
  useBreadBoardUpdate(id, setBreadBoard);

  return (
    <>
      <Header />
      <Main background="LIGHT_GRAY" fitHeight>
        <PartyDetailHeader party={party} toggleBreadBoard={toggleBreadBoard} />
        <Chats chats={chats} detectorRef={detectorRef} />
        <ChatForm partyId={id} />
      </Main>
      <BreadBoard isShown={isShown} party={party} breadBoard={breadBoard} id={id} />
    </>
  );
}

export default ChatPage;
