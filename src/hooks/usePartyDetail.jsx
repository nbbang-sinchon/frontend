import { useEffect, useState } from 'react';
import useFetch from './useFetch';

function usePartyDetail(id) {
  const [party, setParty] = useState();
  const [parties, setParties] = useState([]);
  const { customFetch } = useFetch();

  useEffect(async () => {
    if (!id) {
      return;
    }

    const json = await customFetch(`/parties/${id}`);

    setParties(json.data.parties);
    setParty({ ...json.data, id });
  }, [id]);

  return { party, parties };
}

export default usePartyDetail;
