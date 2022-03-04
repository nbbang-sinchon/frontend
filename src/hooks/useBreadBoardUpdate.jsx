import { useEffect } from 'react';
import useSocket from './useSocket';

function useBreadBoardUpdate(id, setBreadBoard) {
  const { socket, waitSocket } = useSocket();

  useEffect(() => {
    const updateBreadBoard = ({ body }) => {
      setBreadBoard(JSON.parse(body).data);
    };

    const connectSocket = async () => {
      if (!socket.connected) {
        await waitSocket();
      }
      socket.subscribe('/breadBoard/' + id, updateBreadBoard);
    };

    connectSocket();

    return () => {
      socket.unsubscribe('/breadBoard/' + id, updateBreadBoard);
    };
  }, []);

  return;
}

export default useBreadBoardUpdate;
