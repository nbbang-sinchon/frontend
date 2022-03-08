import { useState, useEffect } from 'react';

function useLogin() {
  const [isLoggedin, setIsLoggedin] = useState(true);

  useEffect(() => {
    const fetchLogin = async () => {
      const URL = `https://www.nbbang.shop/api/members`;
      const res = await fetch(URL, { credentials: 'include' });
      const json = await res.json();

      if (json.data) {
        setIsLoggedin(true);
      }
    };

    fetchLogin();
  }, []);

  return isLoggedin;
}

export default useLogin;
