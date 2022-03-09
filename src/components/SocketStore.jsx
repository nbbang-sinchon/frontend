import React, { createContext, useRef, useContext } from 'react';
import PropTypes from 'prop-types';
import webstomp from 'webstomp-client';
import SockJS from 'sockjs-client';
import { SERVER_URL } from '../config';
import { LoginStoreContext } from './LoginStore';

export const SocketStoreContext = createContext();

function SocketStore({ children }) {
  const socketRef = useRef();
  const isConnectingRef = useRef();
  const { isLoggedin } = useContext(LoginStoreContext);
  const option = { protocols: webstomp.VERSIONS.supportedProtocols(), debug: false };

  if (!socketRef.current && isLoggedin) {
    socketRef.current = webstomp.over(new SockJS(`${SERVER_URL}/ws-stomp`), option);
    isConnectingRef.current = new Promise((resolve) => socketRef.current.connect({}, resolve));
  }

  return (
    <SocketStoreContext.Provider value={{ socket: socketRef.current, isConnecting: isConnectingRef.current }}>
      {children}
    </SocketStoreContext.Provider>
  );
}

SocketStore.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default SocketStore;
