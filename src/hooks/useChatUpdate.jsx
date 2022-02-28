import { useEffect, useRef, useState } from 'react';
import { CHAT_PAGE_SIZE, SERVER_URL } from '../config';
import useInfiniteScroll from './useInfiniteScroll';
import useSocket from './useSocket';

function useChatUpdate(id, chats, setChats) {
  const fetchOldChatRef = useRef();
  const [isReady, setIsReady] = useState(true);
  const socket = useSocket();

  const observerCallback = async ([entries]) => {
    if (chats.length && entries.isIntersecting) {
      fetchOldChatRef.current();
    }
  };

  const detectorRef = useInfiniteScroll(observerCallback, [chats]);

  useEffect(() => {
    fetchOldChatRef.current = async () => {
      if (!isReady || !chats.length) {
        return 0;
      }

      setIsReady(false);

      const URL = `${SERVER_URL}/chats/${id}/messages?pageSize=${CHAT_PAGE_SIZE}${`&cursorId=${chats[0].id}`}`;
      const res = await fetch(URL);
      const json = await res.json();
      const length = json.data.messages.length;

      if (length > 0) {
        setIsReady(true);
        setChats((prev) => [...json.data.messages, ...prev]);

        return length;
      }

      return 0;
    };
  }, [chats, isReady]);

  useEffect(() => {
    const pushNewChat = ({ body }) => {
      setChats((prev) => [...prev, JSON.parse(body)]);
    };

    const connectSocket = async () => {
      if (!socket.connected) {
        await new Promise((resolve) => socket.connect({}, () => resolve()));
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
