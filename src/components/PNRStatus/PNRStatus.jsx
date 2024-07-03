import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function PNRStatus() {
  const [PNRNumber, setPNRNumber] = useState("0000000000");
  return (
    <div className="pnrStatus liveTrainStatus">
      <h1>Check PNR Status</h1>
      <div className="inputPNRNumber inputLiveTrainNumber">
        <div className="inputPNRUP inputUP">
          <p>Enter PNR Number</p>
        </div>
        <div className="inputPNRDown inputDown">
          <input
            type="number"
            placeholder="PNR Number"
            className="PNRInput trainNumberInputLive"
            value={PNRNumber}
            onChange={(e) => setPNRNumber(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="searchPNRBtn searchLiveStausBtn">
        <NavLink state={{ PNRNumber: PNRNumber }} to="/pnr-status/pnr-specific">
          <button>Check PNR Status</button>
        </NavLink>
      </div>
    </div>
  );
}

export default PNRStatus;
