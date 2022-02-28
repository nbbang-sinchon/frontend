import { useContext } from 'react';
import { SocketStoreContext } from '../components/SocketStore';

function useSocket() {
  const socket = useContext(SocketStoreContext);

  return socket;
}

export default useSocket;
