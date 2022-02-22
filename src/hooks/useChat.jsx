import { useEffect, useState } from 'react';
import { SWAGGER_URL } from '../config';

function useChat(id) {
  const [party, setParty] = useState();
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchParty = async () => {
      const res = await fetch(`${SWAGGER_URL}/chats/${id}`);
      const json = await res.json();

      setParty({
        ownerNickname: json.data.owner.nickname,
        place: json.data.owner.place,
        createTime: json.data.createTime,
        joinNumber: json.data.joinNumber,
        goalNumber: json.data.goalNumber,
        status: json.data.status,
      });

      setChats(json.data.messages);
    };

    fetchParty();
  }, [id]);

  return { party, chats };
}

export default useChat;
