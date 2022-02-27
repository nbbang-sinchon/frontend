import { useEffect, useRef, useState } from 'react';
import { CHAT_PAGE_SIZE, SERVER_URL } from '../config';

function useChat(id) {
  const [party, setParty] = useState();
  const [chats, setChats] = useState([]);
  const [isReady, setIsReady] = useState(true);

  const fetchOldChatRef = useRef();
  const pushNewChat = (chat) => setChats((prev) => [...prev, chat]);

  useEffect(() => {
    fetchOldChatRef.current = async () => {
      if (!isReady) {
        return 0;
      }

      const isInitial = chats.length === 0;
      const URL = `${SERVER_URL}/chats/${id}${isInitial ? '' : `/messages`}?pageSize=${CHAT_PAGE_SIZE}${
        isInitial ? '' : `&cursorId=${chats[0].id}`
      }`;

      setIsReady(false);

      const res = await fetch(URL);
      const json = await res.json();

      if (isInitial) {
        setParty({
          ownerNickname: json.data.owner.nickname,
          place: json.data.owner.place,
          createTime: json.data.createTime,
          joinNumber: json.data.joinNumber,
          goalNumber: json.data.goalNumber,
          status: json.data.status,
          isSender: json.data.isSender,
        });
      }

      if (json.data.messages.length > 0) {
        setIsReady(true);
        setChats((prev) => [...json.data.messages, ...prev]);
      }

      return json.data.messages.length;
    };
  }, [chats, isReady]);

  return { party, chats, fetchOldChatRef, pushNewChat };
}

export default useChat;
