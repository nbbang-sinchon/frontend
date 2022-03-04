import { useEffect, useState } from 'react';
import { SERVER_URL } from '../config';

function useMyParty(isOnGoing) {
  const [parties, setParties] = useState([]);

  useEffect(() => {
    const fetchParty = async () => {
      const res = await fetch(`${SERVER_URL}/members/parties/${isOnGoing ? 'on' : 'closed'}`);
      const json = await res.json();

      setParties(json.data.parties);
    };

    fetchParty();
  }, [isOnGoing]);

  console.log(parties);

  return { parties };
}

export default useMyParty;
