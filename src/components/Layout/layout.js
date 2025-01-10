import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/sidebar";
import "./layout.scss";
import { useColor } from "../../context/ColorContext";

export const Layout = () => {
  const { colorFilter, changeColor } = useColor();
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tags" style={{ filter: colorFilter }}>
          <span className="top-tag-html" style={{ filter: colorFilter }}>
            &lt;html&gt;
          </span>
          <br />
          &nbsp;&nbsp;&nbsp;&lt;body&gt;
        </span>
        <Outlet />
        <span className="tags bottom-tags" style={{ filter: colorFilter }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&lt;/body&gt;
          <br />
          <span className="bottom-tag-html" style={{ filter: colorFilter }}>
            &lt;/html&gt;
          </span>
        </span>
      </div>
    </div>
  );
};
