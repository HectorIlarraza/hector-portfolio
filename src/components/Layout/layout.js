import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import "./layout.scss";

const Layout = () => {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags">&nbsp;&nbsp;&nbsp;&lt;body&gt;</span>
        <Outlet />
        <span className="tags bottom-tags">
          &nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          <span className="bottom-tag-html">&lt;/html&gt;</span>
        </span>
      </div>
    </div>
  );
};

export default Layout;
