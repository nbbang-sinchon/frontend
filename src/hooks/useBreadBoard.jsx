import { useState } from 'react';

function useBreadBoard() {
  const [isShown, setIsShown] = useState(false);
  const toggleBreadBoard = () => setIsShown((prev) => !prev);

  return {
    isShown,
    toggleBreadBoard,
  };
}

export default useBreadBoard;
