import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute({ element: Component, ...props }) {
  return props.login ? <Component {...props} /> : <Navigate to='/' replace />;
}
