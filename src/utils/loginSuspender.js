import { SERVER_URL } from '../config';

const makeLoginSuspender = () => {
  let state;
  let status = 'INIT';

  const fetchLogin = async () => {
    const res = await fetch(`${SERVER_URL}/members`, { credentials: 'include' });
    const json = await res.json();

    return json.statusCode !== 401;
  };

  const fetchingUser = fetchLogin()
    .then((isLoggedin) => {
      state = isLoggedin;
      status = 'DONE';
    })
    .catch(() => {
      state = false;
      status = 'DONE';
    });

  return () => {
    if (status === 'INIT') {
      throw fetchingUser;
    }

    return state;
  };
};

export default makeLoginSuspender;
