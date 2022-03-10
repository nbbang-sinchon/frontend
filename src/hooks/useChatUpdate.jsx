import { useEffect, useRef, useState, useContext } from 'react';
import { SocketStoreContext } from '../components/Stores/SocketStore';
import { CHAT_PAGE_SIZE, SERVER_URL } from '../config';
import makeObserverCallback from '../utils/observer';
import useInfiniteScroll from './useInfiniteScroll';

function useChatUpdate(id, chats, setChats) {
  const fetchOldChatRef = useRef();
  const [isReady, setIsReady] = useState(true);
  const { socket, isConnecting } = useContext(SocketStoreContext);

  const observerCallback = makeObserverCallback(fetchOldChatRef);
  const detectorRef = useInfiniteScroll(observerCallback, [chats]);

  useEffect(() => {
    fetchOldChatRef.current = async () => {
      if (!isReady || !chats.length) {
        return;
      }

      setIsReady(false);

      const URL = `${SERVER_URL}/chats/${id}/messages?pageSize=${CHAT_PAGE_SIZE}${`&cursorId=${chats[0].id}`}`;
      const res = await fetch(URL, { credentials: 'include' });
      const json = await res.json();

      if (json.data.messages.length > 0) {
        setIsReady(true);
        setChats((prev) => [...json.data.messages, ...prev]);
      }
    };
  }, [chats, isReady]);

  useEffect(() => {
    const pushNewChat = ({ body }) => {
      setChats((prev) => [...prev, JSON.parse(body).data]);
    };

    const connectSocket = async () => {
      if (!socket.connected) {
        await isConnecting;
      }
      socket.subscribe('/topic/chatting/' + id, pushNewChat);
    };

    connectSocket();

    return () => {
      socket.unsubscribe('/topic/chatting/' + id, pushNewChat);
    };
  }, []);

  return detectorRef;
}

export default useChatUpdate;
