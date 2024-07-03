import React from "react";
import { NavLink } from "react-router-dom";
import TabsDiv from "../Tabs/TabsDiv.jsx";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="websiteName">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <p>🚆RAILसेवा</p>
          </NavLink>
        </div>

        <TabsDiv />
      </nav>
    </header>
  );
}

export default Header;
