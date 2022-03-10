import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LoginStoreContext = createContext();

function LoginStore({ children }) {
  const [isLoggedin, setIsLoggedin] = useState(true);

  return <LoginStoreContext.Provider value={{ isLoggedin, setIsLoggedin }}>{children}</LoginStoreContext.Provider>;
}

LoginStore.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default LoginStore;
