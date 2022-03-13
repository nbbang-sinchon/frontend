import { useEffect, useRef, useState, useContext } from 'react';
import { SocketStoreContext } from '../components/Stores/SocketStore';
import { CHAT_PAGE_SIZE } from '../config';
import makeObserverCallback from '../utils/observer';
import useFetch from './useFetch';
import useInfiniteScroll from './useInfiniteScroll';

function useChatUpdate(id, chats, setChats) {
  const fetchOldChatRef = useRef();
  const [isReady, setIsReady] = useState(true);
  const { socket, isConnecting } = useContext(SocketStoreContext);
  const { customFetch } = useFetch();

  const observerCallback = makeObserverCallback(fetchOldChatRef);
  const detectorRef = useInfiniteScroll(observerCallback, [chats]);

  useEffect(() => {
    fetchOldChatRef.current = async () => {
      if (!isReady || !chats.length) {
        return;
      }

      setIsReady(false);

      const URL = `/chats/${id}/messages?pageSize=${CHAT_PAGE_SIZE}${`&cursorId=${chats[0].id}`}`;
      const json = await customFetch(URL);

      if (json.data.messages.length > 0) {
        setIsReady(true);
        setChats((prev) => [...json.data.messages, ...prev]);
      }
    };
  }, [chats, isReady]);

  useEffect(() => {
    const pushNewChat = ({ body }) => {
      const parsedBody = JSON.parse(body);
      if (parsedBody?.type === 'chatting') {
        setChats((prev) => [...prev, parsedBody.data]);
      }
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
