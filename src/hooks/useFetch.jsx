import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginStoreContext } from '../components/Stores/LoginStore';
import { SERVER_URL } from '../config';

function useFetch() {
  const [fetchState, setFetchState] = useState('IDLE');
  const { refreshUser } = useContext(LoginStoreContext);
  const navigate = useNavigate();

  const customFetch = async (url, method = 'GET', body = '') => {
    const fullURL = (process.env?.NODE_ENV === 'development' ? SERVER_URL : '/api') + url;
    const options = { method, mode: 'cors', credentials: 'include' };

    if (method === 'POST' || method === 'PATCH') {
      if (!(body instanceof FormData)) {
        Object.defineProperty(options, 'headers', { value: { 'Content-type': 'application/json' } });
      }

      Object.defineProperty(options, 'body', { value: body });
    }

    setFetchState('PENDING');

    try {
      const res = await fetch(fullURL, options);
      const json = await res.json();

      if (json.statusCode === 401) {
        setFetchState('FAIL');
        refreshUser();
        navigate('/login');
      } else {
        setFetchState('SUCCESS');
      }
      return json;
    } catch {
      setFetchState('FAIL');
      refreshUser();
      navigate('/login');
    }
  };

  return { fetchState, customFetch };
}

export default useFetch;
