import { useEffect, useState } from 'react';
import { SWAGGER_URL } from '../config';

function useParty(id) {
  const [party, setParty] = useState();
  const [parties, setParties] = useState([]);

  useEffect(() => {
    const fetchParty = async () => {
      const res = await fetch(`${SWAGGER_URL}/parties/${id}`);
      const json = await res.json();

      setParties(json.data.parties);
      setParty(json.data);
    };

    fetchParty();
  }, [id]);

  return { party, parties };
}

export default useParty;
