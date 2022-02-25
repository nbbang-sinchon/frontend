import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import SockJS from 'sockjs-client';
import Webstomp from 'webstomp-client';
import { SERVER_URL } from '../config';

export const SocketStoreContext = createContext();

function SocketStore({ children }) {
  const option = { protocols: Webstomp.VERSIONS.supportedProtocols(), debug: false };
  const socket = Webstomp.over(new SockJS(`${SERVER_URL}/chat`), option);

  return <SocketStoreContext.Provider value={{ socket }}>{children}</SocketStoreContext.Provider>;
}

SocketStore.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default SocketStore;
