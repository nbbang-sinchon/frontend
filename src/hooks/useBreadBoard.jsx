import { useEffect, useState } from 'react';
import { SERVER_URL } from '../config';

function useBreadBoard(id) {
  const [isBreadBoardVisible, setIsBreadBoardVisible] = useState(false);
  const [breadBoard, setBreadBoard] = useState({});

  useEffect(() => {
    const fetchBreadBoard = async () => {
      const URL = `${SERVER_URL}/bread-board/${id}`;
      const res = await fetch(URL);
      const json = await res.json();

      setBreadBoard(json.data);
    };

    fetchBreadBoard();
  }, []);

  return {
    isBreadBoardVisible,
    setIsBreadBoardVisible,
    breadBoard,
    setBreadBoard,
  };
}

export default useBreadBoard;
