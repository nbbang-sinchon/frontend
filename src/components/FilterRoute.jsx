import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

function FilterRoute({ filter, fallback }) {
  return filter ? <Outlet /> : <Navigate to={fallback} />;
}

FilterRoute.propTypes = {
  filter: PropTypes.bool,
  fallback: PropTypes.string,
};

export default FilterRoute;
