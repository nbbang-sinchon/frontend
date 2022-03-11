import { useEffect, useState } from 'react';
import { CHAT_PAGE_SIZE } from '../config';
import useFetch from './useFetch';

function useChat(id) {
  const [party, setParty] = useState({ members: [] });
  const [chats, setChats] = useState([]);
  const { customFetch } = useFetch();

  useEffect(async () => {
    const json = await customFetch(`/chats/${id}?pageSize=${CHAT_PAGE_SIZE}`);

    setParty(json.data);
    setChats(json.data.messages);
  }, []);

  return { party, chats, setChats };
}

export default useChat;
