import { useEffect, useState } from 'react';
import { CHAT_PAGE_SIZE, SERVER_URL } from '../config';

function useChat(id) {
  const [party, setParty] = useState();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChat = async () => {
      const URL = `${SERVER_URL}/chats/${id}?pageSize=${CHAT_PAGE_SIZE}`;
      const res = await fetch(URL);
      const json = await res.json();

      setParty({
        ownerNickname: json.data.owner.nickname,
        place: json.data.owner.place,
        createTime: json.data.createTime,
        joinNumber: json.data.joinNumber,
        goalNumber: json.data.goalNumber,
        status: json.data.status,
        isSender: json.data.isSender,
      });

      if (json.data.messages.length > 0) {
        setChats(json.data.messages);
      }
    };

    fetchChat();
  }, []);

  return { party, chats, setChats };
}

export default useChat;
