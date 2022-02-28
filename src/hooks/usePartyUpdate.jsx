import { useEffect, useRef, useState } from 'react';
import { PARTY_PAGE_SIZE, SERVER_URL } from '../config';
import { convertOptionToParam } from '../utils/converter';
import makeObserverCallback from '../utils/observer';
import useInfiniteScroll from './useInfiniteScroll';

function usePartyUpdate(parties, setParties, option) {
  const fetchOldPartyRef = useRef();
  const [isReady, setIsReady] = useState(true);

  const observerCallback = makeObserverCallback(fetchOldPartyRef);
  const detectorRef = useInfiniteScroll(observerCallback, [parties, option]);

  useEffect(() => {
    setIsReady(true);
  }, [option]);

  useEffect(() => {
    fetchOldPartyRef.current = async () => {
      if (!isReady || !parties.length) {
        return;
      }

      if (parties.length % PARTY_PAGE_SIZE) {
        return;
      }

      setIsReady(false);

      const params = convertOptionToParam(option);
      const cursorId = parties.length && parties[parties.length - 1].id;
      const URL = `${SERVER_URL}/parties?${params.join('&')}&cursorId=${cursorId}&pageSize=${PARTY_PAGE_SIZE}`;
      const res = await fetch(URL);
      const json = await res.json();

      if (json.data.parties.length > 0) {
        setIsReady(true);
        setParties((prev) => [...prev, ...json.data.parties]);
      }
    };
  }, [parties, option, isReady]);

  return detectorRef;
}

export default usePartyUpdate;