import { useEffect, useState } from 'react';
import { SERVER_URL } from '../config';

function useParties(search) {
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

  const makeParams = (option) => {
    const params = [];
    const placeKeys = Object.keys(option.place);

    if (option.search) {
      params.push(`search=${option.search}`);
    }

    params.push(`status=OPEN`);
    if (!option.OPEN) {
      params.push(`status=CLOSED`);
      params.push(`status=FULL`);
    }

    if (placeKeys.length === 0) {
      params.push(`place=NONE`);
    } else {
      placeKeys.forEach((place) => {
        if (option.place[place]) {
          params.push(`place=${place}`);
        }
      });
    }

    return params;
  };

  useEffect(() => {
    const fetchParties = async () => {
      const params = makeParams(option);
      const res = await fetch(`${SERVER_URL}/parties?${params.join('&')}`);
      const json = await res.json();

      setParties(json.data.parties);
    };

    fetchParties();
  }, [option]);

  return { parties, setOption };
}

export default useParties;
