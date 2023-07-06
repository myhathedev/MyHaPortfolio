import Nav from './nav';
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="Layout">
        <Nav />
        <Outlet />
    </div>
  );
}

export default Layout;