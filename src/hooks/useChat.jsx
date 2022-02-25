import { useEffect, useRef, useState } from 'react';
import { CHAT_PAGE_SIZE, SERVER_URL } from '../config';

function useChat(id) {
  const [party, setParty] = useState();
  const [chats, setChats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const fetchChatRef = useRef();

  useEffect(() => {
    fetchChatRef.current = async () => {
      if (isLoading) {
        return;
      }

      const isInitial = chats.length === 0;
      const URL = `${SERVER_URL}/chats/${id}${isInitial ? '' : `/messages`}?pageSize=${CHAT_PAGE_SIZE}${
        isInitial ? '' : `&cursorId=${chats[0].id}`
      }`;

      setIsLoading(true);

      const res = await fetch(URL);
      const json = await res.json();

      setIsLoading(false);

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

      setChats((prev) => [...json.data.messages, ...prev]);

      return json.data.messages.length;
    };
  }, [chats]);

  return { party, chats, fetchChatRef };
}

export default useChat;
