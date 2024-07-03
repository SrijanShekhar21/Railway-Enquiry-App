import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Tab(props) {
  const [active, setActive] = useState(false);
  const customCSS = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <NavLink
      className={({ isActive }) => (isActive ? "activeTab" : "notActiveTab")}
      style={customCSS}
      to={props.to}
    >
      <div className="tab">{props.name}</div>
    </NavLink>
  );
}

export default Tab;
