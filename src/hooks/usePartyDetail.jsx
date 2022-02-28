import { useEffect, useState } from 'react';
import { SERVER_URL } from '../config';

function usePartyDetail(id) {
  const [party, setParty] = useState();
  const [parties, setParties] = useState([]);

  useEffect(() => {
    const fetchParty = async () => {
      const res = await fetch(`${SERVER_URL}/parties/${id}`);
      const json = await res.json();

      setParties(json.data.parties);
      setParty({ ...json.data, id });
    };

    fetchParty();
  }, [id]);

  return { party, parties };
}

export default usePartyDetail;
