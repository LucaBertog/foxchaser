import React from 'react';
import { Outlet, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../store/Auth/reducer';

const PrivateRoute: React.FC = () => {
  const token = useSelector(selectToken);
  const location = useLocation();

  if (!token) {
    return (
      <Navigate to='/login/' replace state={{ prevPath: location.pathname }} />
    );
  }

  return <Outlet />;
};

export default PrivateRoute;
