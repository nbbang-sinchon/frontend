import { useEffect, useRef } from 'react';

function useChatUpdate(socket, pushOldChatRef, pushNewChat) {
  const chatsRef = useRef();
  const topRef = useRef();

  useEffect(async () => {
    const onNewChat = ({ body }) => {
      pushNewChat(JSON.parse(body));
      if (chatsRef.current) {
        chatsRef.current.scroll({ top: chatsRef.current.scrollHeight, behavior: 'smooth' });
      }
    };

    await new Promise((resolve) => socket.connect({}, resolve));
    socket.subscribe('/topic/1', onNewChat);

    return () => {
      socket.unsubscribe('/topic/1', onNewChat);
    };
  }, []);

  useEffect(() => {
    const observerCallback = async ([entries]) => {
      if (entries.isIntersecting) {
        const newLength = await pushOldChatRef.current();
        const first = chatsRef.current.querySelectorAll(':scope > div');
        first[newLength].scrollIntoView();
      }
    };

    const observer = new IntersectionObserver(observerCallback);
    observer.observe(topRef.current);
  }, []);

  return { topRef, chatsRef };
}

export default useChatUpdate;
