import { useEffect, useState } from 'react';
import { PARTY_PAGE_SIZE, SERVER_URL } from '../config';
import { convertOptionToParam } from '../utils/converter';

function useParty(search) {
  const [parties, setParties] = useState([]);
  const [option, setOption] = useState({
    search: search || '',
    OPEN: true,
    WISHLIST: false,
    place: {
      SINCHON: true,
      YEONHUI: true,
      CHANGCHEON: true,
    },
  });

  useEffect(() => {
    const fetchParty = async () => {
      const params = convertOptionToParam(option);
      const URL = `${SERVER_URL}/manyparties?${params.join('&')}&pageSize=${PARTY_PAGE_SIZE}`;
      const res = await fetch(URL, { credentials: 'include' });
      const json = await res.json();

      setParties([...json.data.parties]);
    };

    fetchParty();
  }, [option]);

  return { parties, setParties, option, setOption };
}

export default useParty;
