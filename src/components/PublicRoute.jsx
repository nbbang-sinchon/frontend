import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import isLogin from '../utils/isLogin';

function PublicRoute({ children }) {
  return isLogin() ? <Navigate to="/main" /> : children;
}

export default PublicRoute;

PublicRoute.propTypes = {
  children: PropTypes.object.isRequired,
};
