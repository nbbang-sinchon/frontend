import { useState, useContext } from 'react';
import { LoginStoreContext } from '../components/Stores/LoginStore';
import { SERVER_URL } from '../config';

function useFetch() {
  const [fetchState, setFetchState] = useState('IDLE');
  const { setLoginId } = useContext(LoginStoreContext);

  const customFetch = async (url, method = 'GET', body = '') => {
    const fullURL = (process.env?.NODE_ENV === 'development' ? SERVER_URL : '') + url;
    const options = { method, mode: 'cors', credentials: 'include' };

    if (method === 'POST') {
      Object.defineProperties(options, {
        headers: { value: { 'Content-Type': 'application/json' } },
        body: { value: body },
      });
    }

    setFetchState('PENDING');

    try {
      const res = await fetch(fullURL, options);
      const json = await res.json();

      setFetchState('SUCCESS');

      return json;
    } catch {
      setFetchState('FAIL');
      setLoginId(-1);
    }
  };

  return { fetchState, customFetch };
}

export default useFetch;
