import { useEffect, useState } from 'react';
import useFetch from './useFetch';

function useProfile() {
  const [profile, setProfile] = useState({
    id: 0,
    avatar: 'string',
    nickname: 'string',
    breadNumber: 0,
    place: 'string',
  });
  const { customFetch } = useFetch();

  useEffect(async () => {
    const json = await customFetch(`/members`);

    setProfile(json.data);
  }, []);

  return { profile, setProfile };
}

export default useProfile;
