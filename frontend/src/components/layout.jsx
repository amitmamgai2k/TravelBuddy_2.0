import NavBar from './navbar';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavBar />



      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;