import React from 'react';
import { useParams } from 'react-router-dom';
import BreadBoard from '../components/BreadBoard/BreadBoard';
import ChatForm from '../components/Chat/ChatForm';
import ChatMenu from '../components/Chat/ChatMenu';
import Chats from '../components/Chat/Chats';
import Header from '../components/Header';
import Main from '../components/Main';
import PartyDetailHeader from '../components/Party/PartyDetailHeader';
import useBreadBoard from '../hooks/useBreadBoard';
import useBreadBoardUpdate from '../hooks/useBreadBoardUpdate';
import useChat from '../hooks/useChat';
import useChatMenu from '../hooks/useChatMenu';
import useChatUpdate from '../hooks/useChatUpdate';
import useToggleMenu from '../hooks/useToggleMenu';

function ChatPage() {
  const { id } = useParams();
  const { party, chats, setChats } = useChat(id);
  const detectorRef = useChatUpdate(id, chats, setChats);
  const { isBreadBoardShown, setIsBreadBoardShown, breadBoard, setBreadBoard } = useBreadBoard(id);
  useBreadBoardUpdate(id, setBreadBoard);
  const { isChatMenuShown, setIsChatMenuShown } = useChatMenu();
  const toggleMenu = useToggleMenu({ BREADBOARD: setIsBreadBoardShown, CHATMENU: setIsChatMenuShown });

  return (
    <>
      <Header />
      <Main background="LIGHT_GRAY" fitHeight>
        <PartyDetailHeader party={party} toggleMenu={toggleMenu} />
        <Chats chats={chats} detectorRef={detectorRef} />
        <ChatForm id={id} />
      </Main>
      <BreadBoard isShown={isBreadBoardShown} party={party} breadBoard={breadBoard} id={id} />
      <ChatMenu isShown={isChatMenuShown} />
    </>
  );
}

export default ChatPage;
