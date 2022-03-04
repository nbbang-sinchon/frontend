import { useEffect } from 'react';
import useSocket from './useSocket';

function useBreadBoardUpdate(id, setBreadBoard) {
  const { socket, isConnecting } = useSocket();

  useEffect(() => {
    const updateBreadBoard = ({ body }) => {
      setBreadBoard(JSON.parse(body).data);
    };

    const connectSocket = async () => {
      if (!socket.connected) {
        await isConnecting;
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
