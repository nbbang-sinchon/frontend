import { useEffect, useState } from 'react';
import useFetch from './useFetch';

function useMyParty(isOnGoing) {
  const [parties, setParties] = useState([]);
  const { customFetch } = useFetch();

  useEffect(async () => {
    const json = await customFetch(`/members/parties/${isOnGoing ? 'on' : 'closed'}`);

    setParties(json.data.parties);
  }, [isOnGoing]);

  return { parties };
}

export default useMyParty;
