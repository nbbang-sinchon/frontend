import React, { createContext, useState, Suspense } from 'react';
import PropTypes from 'prop-types';
import makeLoginSuspender from '../../utils/loginSuspender';

export const LoginStoreContext = createContext();

const loginSuspender = makeLoginSuspender();

function LoginStore({ children }) {
  const [user, setUser] = useState(loginSuspender);
  const logout = () => setUser({ id: -1 });

  return (
    <Suspense fallback={<div>loafing...</div>}>
      <LoginStoreContext.Provider
        value={{ loginId: user.id, logout, nickname: user.nickname, avatar: user.avatar, isLoggedin: user.id >= 0 }}>
        {children}
      </LoginStoreContext.Provider>
    </Suspense>
  );
}

LoginStore.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default LoginStore;
