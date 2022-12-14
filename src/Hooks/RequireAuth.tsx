import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../Components/Loader/Loader';
import useUser from './useUser';

export default function RequireAuth({ children }: { children: JSX.Element }) {
 const [user, loading] = useUser();
 const location = useLocation();

 if (loading === true) {
   return <Loader/>;
 }

 if (!user) {
   return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
 }
 return children;
}
