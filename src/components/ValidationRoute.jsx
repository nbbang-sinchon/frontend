import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

function ValidationRoute({ filter, fallback }) {
  return filter ? <Outlet /> : <Navigate to={fallback} />;
}

ValidationRoute.propTypes = {
  filter: PropTypes.bool,
  fallback: PropTypes.string,
};

export default ValidationRoute;
