import SockJS from 'sockjs-client';
import webstomp from 'webstomp-client';
import { SERVER_URL } from '../config';

function useSocket() {
  const option = { protocols: webstomp.VERSIONS.supportedProtocols(), debug: false };
  const socket = webstomp.over(new SockJS(`${SERVER_URL}/chat`), option);

  return socket;
}

export default useSocket;
