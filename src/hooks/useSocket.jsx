import SockJS from 'sockjs-client';
import webstomp from 'webstomp-client';
import { SERVER_URL } from '../config';

const option = { protocols: webstomp.VERSIONS.supportedProtocols(), debug: false };
const socket = webstomp.over(new SockJS(`${SERVER_URL}/chat`), option);
socket.connect();

function useSocket() {
  const waitSocket = () => new Promise((resolve) => socket.connect({}, resolve));

  return { socket, waitSocket };
}

export default useSocket;
