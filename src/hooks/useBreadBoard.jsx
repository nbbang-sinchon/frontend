import { useEffect, useState } from 'react';
import useFetch from './useFetch';

function useBreadBoard(id) {
  const [isBreadBoardVisible, setIsBreadBoardVisible] = useState(false);
  const [breadBoard, setBreadBoard] = useState({});
  const { customFetch } = useFetch();

  useEffect(async () => {
    const json = await customFetch(`/bread-board/${id}`);

    setBreadBoard(json.data);
  }, []);

  return {
    isBreadBoardVisible,
    setIsBreadBoardVisible,
    breadBoard,
    setBreadBoard,
  };
}

export default useBreadBoard;
