import { useEffect, useState } from 'react';
import useFetch from './useFetch';

function useProfile() {
  const [profile, setProfile] = useState({
    nickname: '',
    place: '',
  });
  const { customFetch } = useFetch();

  useEffect(async () => {
    const json = await customFetch(`/members`);

    setProfile(json.data);
  }, []);

  return { profile, setProfile };
}

export default useProfile;
