import { useEffect, useState } from 'react';
import { CHAT_PAGE_SIZE, SERVER_URL } from '../config';

function useChat(id) {
  const [party, setParty] = useState({ members: [] });
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChat = async () => {
      const URL = `${SERVER_URL}/chats/${id}?pageSize=${CHAT_PAGE_SIZE}`;
      const res = await fetch(URL);
      const json = await res.json();

      setParty(json.data);
      setChats(json.data.messages);
    };

    fetchChat();
  }, []);

  return { party, chats, setChats };
}

export default useChat;
