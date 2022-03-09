import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { LoginStoreContext } from './LoginStore';

function LoginRoute({ isLoginNecessary, fallback }) {
  const { isLoggedin } = useContext(LoginStoreContext);

  return isLoginNecessary === isLoggedin ? <Outlet /> : <Navigate to={fallback} />;
}

LoginRoute.propTypes = {
  isLoginNecessary: PropTypes.bool,
  fallback: PropTypes.string,
};

export default LoginRoute;
