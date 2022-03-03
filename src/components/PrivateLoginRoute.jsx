import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import isLogin from '../utils/isLogin';

function PrivateLoginRoute({ children }) {
  return isLogin() ? children : <Navigate to="/login" />;
}

export default PrivateLoginRoute;

PrivateLoginRoute.propTypes = {
  children: PropTypes.object,
};
