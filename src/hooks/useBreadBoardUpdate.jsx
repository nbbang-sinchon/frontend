import { useEffect, useContext } from 'react';
import { SocketStoreContext } from '../components/Stores/SocketStore';

function useBreadBoardUpdate(id, setBreadBoard) {
  const { socket, isConnecting } = useContext(SocketStoreContext);

  useEffect(() => {
    const updateBreadBoard = ({ body }) => {
      setBreadBoard(JSON.parse(body).data);
    };

    const connectSocket = async () => {
      if (!socket.connected) {
        await isConnecting;
      }
      socket.subscribe('/topic/breadBoard/' + id, updateBreadBoard);
    };

    connectSocket();

    return () => {
      socket.unsubscribe('/topic/breadBoard/' + id);
    };
  }, []);

  return;
}

export default useBreadBoardUpdate;
