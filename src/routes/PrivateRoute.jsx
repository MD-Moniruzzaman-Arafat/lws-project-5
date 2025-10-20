import { Navigate, Outlet } from 'react-router';
import { useAuth } from '../hooks/useAuth';

export default function PrivateRoute() {
  const { auth } = useAuth();
  return <>{auth?.accessToken ? <Outlet /> : <Navigate to="/login" />}</>;
}
