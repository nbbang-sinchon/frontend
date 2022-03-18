import { SERVER_URL } from '../config';

const makeLoginSuspender = () => {
  let user;
  let status = 'INIT';

  const fetchLogin = async () => {
    const res = await fetch(`${SERVER_URL}/members`, { credentials: 'include' });
    const json = await res.json();

    if (json.statusCode === 200) {
      return json.data;
    } else {
      return { id: -1 };
    }
  };

  const fetchingUser = fetchLogin()
    .then((data) => {
      user = data;
      status = 'DONE';
    })
    .catch(() => {
      user = { id: -1 };
      status = 'DONE';
    });

  return () => {
    if (status === 'INIT') {
      throw fetchingUser;
    }

    return user;
  };
};

export default makeLoginSuspender;
