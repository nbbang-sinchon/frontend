import { useContext, useEffect, useState } from 'react';
import { LoginStoreContext } from '../components/Stores/LoginStore';
import { SocketStoreContext } from '../components/Stores/SocketStore';

function useGlobalAlarm() {
  const { socket, isConnecting } = useContext(SocketStoreContext);
  const { loginId, isLoggedin } = useContext(LoginStoreContext);
  const [alarms, setAlarms] = useState([
    {
      id: 0,
      createTime: '2022-03-15T08:40:12.336Z',
      type: 'CHAT',
      content: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요',
      sender: {
        id: 0,
        nickname: '루피',
        avatar: null,
      },
      party: {
        id: 2594,
        title: '안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요뭐지',
      },
    },
    {
      id: 1,
      createTime: '2022-03-15T08:40:12.336Z',
      type: 'CHAT',
      content: '안녕하세요2323',
      sender: {
        id: 0,
        nickname: '루피',
        avatar: null,
      },
      party: {
        id: 2594,
        title: '뭐지',
      },
    },
  ]);

  useEffect(() => {
    const pushAlarm = ({ body }) => {
      if (body.type !== 'global') {
        return;
      }
      setAlarms((prev) => [...prev, body.data]);
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
