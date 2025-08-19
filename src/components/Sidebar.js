import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <div className="profile">
          <img src="/image/profile.JPG" alt="Profile" />
          {!collapsed && <h3>Partha Carter</h3>}
        </div>
        <button
          className="toggle-btn"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? "➡" : "⬅"}
        </button>
      </div>

      <ul>
        <li>
          <Link to="/profile">👤 {!collapsed && "Profile"}</Link>
        </li>
        <li>
          <Link to="/articles">📄 {!collapsed && "My Articles"}</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
