import { Outlet } from 'react-router';
import FloatingNavbar from '../components/FloatingNavbar/FloatingNavbar';

export default function Root() {
  return (
    <>
      <FloatingNavbar />
      <Outlet />
    </>
  );
}
