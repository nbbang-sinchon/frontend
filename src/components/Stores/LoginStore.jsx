import React, { createContext, useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import makeLoginSuspender from '../../utils/loginSuspender';

export const LoginStoreContext = createContext();

const loginSuspender = makeLoginSuspender();

function LoginStore({ children }) {
  const [isLoggedin, setIsLoggedin] = useState(loginSuspender);

  return (
    <Suspense fallback={<div>loafing...</div>}>
      <LoginStoreContext.Provider value={{ isLoggedin, setIsLoggedin }}>{children}</LoginStoreContext.Provider>
    </Suspense>
  );
}

LoginStore.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default LoginStore;
