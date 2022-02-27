import { useEffect, useRef } from 'react';
import useInfiniteScroll from './useInfiniteScroll';

function useChatUpdate(id, socket, fetchOldChatRef, pushNewChat) {
  const chatsRef = useRef();

  const observerCallback = async ([entries]) => {
    if (entries.isIntersecting) {
      const newLength = await fetchOldChatRef.current();
      const first = chatsRef.current.querySelectorAll(':scope > div');
      first[newLength].scrollIntoView();
    }
  };

  const detectorRef = useInfiniteScroll(observerCallback);

  useEffect(() => {
    const onNewChat = ({ body }) => {
      pushNewChat(JSON.parse(body));
      if (chatsRef.current) {
        chatsRef.current.scroll({ top: chatsRef.current.scrollHeight, behavior: 'smooth' });
      }
    };

    const connectSocket = async () => {
      if (!socket.connected) {
        await new Promise((resolve) => socket.connect({}, () => resolve()));
      }
      socket.subscribe('/topic/' + id, onNewChat);
    };

    connectSocket();

    return () => {
      socket.unsubscribe('/topic/' + id, onNewChat);
    };
  }, []);

  return { detectorRef, chatsRef };
}

export default useChatUpdate;
