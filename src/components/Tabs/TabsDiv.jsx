import React from "react";
import Tab from "./Tab.jsx";

function tabsDiv() {
  return (
    <div className="tabsDiv">
      <Tab to="/seat-availability" name="Seat Availibility" />
      <Tab to="/pnr-status" name="PNR Status" />
      <Tab to="/live-train-status" name="Live Train Status" />
    </div>
  );
}

export default tabsDiv;
