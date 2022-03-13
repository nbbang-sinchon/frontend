import { SERVER_URL } from '../config';

const makeLoginSuspender = () => {
  let id;
  let status = 'INIT';

  const fetchLogin = async () => {
    const res = await fetch(`${SERVER_URL}/members`, { credentials: 'include' });
    const json = await res.json();

    if (json.statusCode === 200) {
      return json.data.id;
    } else {
      return -1;
    }
  };

  const fetchingUser = fetchLogin()
    .then((code) => {
      id = code;
      status = 'DONE';
    })
    .catch(() => {
      id = -1;
      status = 'DONE';
    });

  return () => {
    if (status === 'INIT') {
      throw fetchingUser;
    }

    return id;
  };
};

export default makeLoginSuspender;
