import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectToken } from '../store/Auth/reducer';
import { decodeJWT } from '../services/decode/decodeJwt';
import { DecodedUser } from '../interfaces/decodedUser.interface';

const AdministratorRoute: React.FC = () => {
  const token = useSelector(selectToken);

  if (!token) {
    return <Navigate to='/' replace />;
  }

  const user = decodeJWT<DecodedUser>(token);

  if (user.isAdmin) {
    return <Outlet />;
  }
  return <Navigate to='/' replace />;
};

export default AdministratorRoute;
