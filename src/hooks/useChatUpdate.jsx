import { useEffect, useRef } from 'react';

function useChatUpdate(id, socket, pushOldChatRef, pushNewChat) {
  const chatsRef = useRef();
  const topRef = useRef();

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

    const observerCallback = async ([entries]) => {
      if (entries.isIntersecting) {
        const newLength = await pushOldChatRef.current();
        const first = chatsRef.current.querySelectorAll(':scope > div');
        first[newLength].scrollIntoView();
      }
    };

    connectSocket();

    const observer = new IntersectionObserver(observerCallback);
    observer.observe(topRef.current);

    return () => {
      socket.unsubscribe('/topic/' + id, onNewChat);
      observer.disconnect();
    };
  }, []);

  return { topRef, chatsRef };
}

export default useChatUpdate;
