import { useEffect, useState } from 'react';
import { SERVER_URL } from '../config';

function useBreadBoard(id) {
  const [isShown, setIsShown] = useState(false);
  const [breadBoard, setBreadBoard] = useState({});
  const toggleBreadBoard = () => setIsShown((prev) => !prev);

  useEffect(() => {
    const fetchPrice = async () => {
      const URL = `${SERVER_URL}/bbangpans/${id}`;
      const res = await fetch(URL);
      const json = await res.json();

      setBreadBoard(json.data);
    };

    fetchPrice();
  }, []);

  return {
    isShown,
    toggleBreadBoard,
    breadBoard,
    setBreadBoard,
  };
}

export default useBreadBoard;
