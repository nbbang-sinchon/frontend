import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import useLogin from '../hooks/useLogin';

function LoginRoute({ isLoginNecessary, fallback }) {
  const isLoggedin = useLogin();

  return isLoginNecessary === isLoggedin ? <Outlet /> : <Navigate to={fallback} />;
}

LoginRoute.propTypes = {
  isLoginNecessary: PropTypes.bool,
  fallback: PropTypes.string,
};

export default LoginRoute;
