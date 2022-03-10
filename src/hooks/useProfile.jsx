import { useEffect, useState } from 'react';
import { SERVER_URL } from '../config';

function useProfile() {
  const [profile, setProfile] = useState({
    nickname: '',
    place: 'SINCHON',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch(`${SERVER_URL}/members`);
      const json = await res.json();

      setProfile(json.data);
    };

    fetchProfile();
  }, []);

  return { profile, setProfile };
}

export default useProfile;
