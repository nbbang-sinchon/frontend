import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ChatForm from '../components/ChatForm';
import Chats from '../components/Chats';
import Header from '../components/Header';
import Main from '../components/Main';
import PartyStatus from '../components/PartyStatus';
import useChat from '../hooks/useChat';
import { SocketStoreContext } from '../components/SocketStore';
import useChatUpdate from '../hooks/useChatUpdate';

function ChatPage() {
  const { id } = useParams();
  const { socket } = useContext(SocketStoreContext);
  const { party, chats, fetchOldChatRef, pushNewChat } = useChat(id);
  const { detectorRef, chatsRef } = useChatUpdate(id, socket, fetchOldChatRef, pushNewChat);

  return (
    <>
      <Header />
      <Main background="LIGHT_GRAY" fitHeight>
        <PartyStatus party={party} />
        <Chats chats={chats} detectorRef={detectorRef} chatsRef={chatsRef} />
        <ChatForm partyId={id} />
      </Main>
    </>
  );
}

export default ChatPage;
