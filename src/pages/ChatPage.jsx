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
  const { party, chats, pushOldChatRef, pushNewChat } = useChat(id);
  const { topRef, chatsRef } = useChatUpdate(id, socket, pushOldChatRef, pushNewChat);

  return (
    <>
      <Header />
      <Main background="LIGHT_GRAY" fitHeight>
        <PartyStatus party={party} />
        <Chats chats={chats} topRef={topRef} chatsRef={chatsRef} />
        <ChatForm partyId={id} />
      </Main>
    </>
  );
}

export default ChatPage;
