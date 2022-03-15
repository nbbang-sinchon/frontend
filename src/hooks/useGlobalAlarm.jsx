import { useContext, useEffect, useState } from 'react';
import { LoginStoreContext } from '../components/Stores/LoginStore';
import { SocketStoreContext } from '../components/Stores/SocketStore';

function useGlobalAlarm() {
  const { socket, isConnecting } = useContext(SocketStoreContext);
  const { loginId, isLoggedin } = useContext(LoginStoreContext);
  const [alarms, setAlarms] = useState([]);

  useEffect(() => {
    const pushAlarm = ({ body }) => {
      const parsedBody = JSON.parse(body);
      const isChatPage = window.location.pathname === `/chats/${parsedBody.data.party.id}`;

      if (parsedBody.type !== 'global' || parsedBody.data.sender.id === loginId || isChatPage) {
        return;
      }

      setAlarms((prev) => [...prev, parsedBody.data]);
      setTimeout(() => setAlarms((prev) => prev.filter((alarm) => alarm.id !== parsedBody.data.id)), 5000);
    };

    const connectSocket = async () => {
      if (!socket?.connected) {
        await isConnecting;
      }
      socket.subscribe('/topic/global/' + loginId, pushAlarm);
    };

    if (isLoggedin) {
      connectSocket();
    }

    return () => {
      if (isLoggedin) {
        socket.unsubscribe('/topic/global/' + loginId);
      }
    };
  }, []);

  return alarms;
}

export default useGlobalAlarm;
