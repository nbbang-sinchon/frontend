import SockJS from 'sockjs-client';
import webstomp from 'webstomp-client';
import { SERVER_URL } from '../config';

const option = { protocols: webstomp.VERSIONS.supportedProtocols(), debug: false };
const socket = webstomp.over(new SockJS(`${SERVER_URL}/ws-stomp`), option);
const isConnecting = new Promise((resolve) => socket.connect({}, resolve));

function useSocket() {
  return { socket, isConnecting };
}

export default useSocket;
