import { useEffect, useRef, useState } from 'react';
import { CHAT_PAGE_SIZE, SERVER_URL } from '../config';
import makeObserverCallback from '../utils/observer';
import useInfiniteScroll from './useInfiniteScroll';
import useSocket from './useSocket';

function useChatUpdate(id, chats, setChats) {
  const fetchOldChatRef = useRef();
  const [isReady, setIsReady] = useState(true);
  const { socket, isConnecting } = useSocket();

  const observerCallback = makeObserverCallback(fetchOldChatRef);
  const detectorRef = useInfiniteScroll(observerCallback, [chats]);

  useEffect(() => {
    fetchOldChatRef.current = async () => {
      if (!isReady || !chats.length) {
        return;
      }

      setIsReady(false);

      const URL = `${SERVER_URL}/chats/${id}/messages?pageSize=${CHAT_PAGE_SIZE}${`&cursorId=${chats[0].id}`}`;
      const res = await fetch(URL);
      const json = await res.json();

      if (json.data.messages.length > 0) {
        setIsReady(true);
        setChats((prev) => [...json.data.messages, ...prev]);
      }
    };
  }, [chats, isReady]);

  useEffect(() => {
    const pushNewChat = ({ body }) => {
      setChats((prev) => [...prev, JSON.parse(body)]);
    };

    const connectSocket = async () => {
      if (!socket.connected) {
        await isConnecting;
      }
      socket.subscribe('/topic/' + id, pushNewChat);
    };

    connectSocket();

    return () => {
      socket.unsubscribe('/topic/' + id, pushNewChat);
    };
  }, []);

  return detectorRef;
}

export default useChatUpdate;
