import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import isLogin from '../utils/isLogin';

function PrivateIndexRoute({ children }) {
  return isLogin() ? children : <Navigate to="/" />;
}

export default PrivateIndexRoute;

PrivateIndexRoute.propTypes = {
  children: PropTypes.object,
};
