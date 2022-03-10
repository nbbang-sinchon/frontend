import { useEffect, useState } from 'react';
import { PARTY_PAGE_SIZE } from '../config';
import { convertOptionToParam } from '../utils/converter';
import useFetch from './useFetch';

function useParty(search) {
  const { customFetch } = useFetch();
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
      const URL = `/parties?${params.join('&')}&pageSize=${PARTY_PAGE_SIZE}`;
      const json = await customFetch(URL);

      if (json.data?.parties) {
        setParties([...json.data.parties]);
      }
    };

    fetchParty();
  }, [option]);

  return { parties, setParties, option, setOption };
}

export default useParty;
