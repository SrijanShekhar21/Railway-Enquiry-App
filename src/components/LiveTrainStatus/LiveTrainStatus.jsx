import React, { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";

function LiveTrainStatus() {
  const [daysAgo, setDaysAgo] = useState(0);
  const [selId, setSelID] = useState(0);
  const [trainNumber, setTrainNumber] = useState(12424);

  const customCSS = {
    backgroundColor: "black",
    color: "white",
  };

  return (
    <div className="liveTrainStatus">
      <h1>Check Live Train Status</h1>
      <div className="inputLiveTrainNumber">
        <div className="inputUP">
          <p>Enter Train Number</p>
        </div>
        <div className="inputDown">
          <input
            type="number"
            placeholder="Train Number"
            className="trainNumberInputLive"
            value={trainNumber}
            onChange={(e) => setTrainNumber(e.target.value)}
            required
          />
        </div>
      </div>
      <div className="selectDaysAgo">
        <div className="up">
          <p>Train started :</p>
        </div>
        <div className="down">
          <div
            style={selId === 0 ? customCSS : {}}
            onClick={() => {
              setDaysAgo(0);
              setSelID(0);
            }}
            className="ithDay"
            id="0"
          >
            Today
          </div>
          <div
            style={selId === 1 ? customCSS : {}}
            onClick={() => {
              setDaysAgo(1);
              setSelID(1);
            }}
            className="ithDay"
            id="1"
          >
            Yesterday
          </div>
          <div
            style={selId === 2 ? customCSS : {}}
            onClick={() => {
              setDaysAgo(2);
              setSelID(2);
            }}
            className="ithDay"
            id="2"
          >
            2 Days ago
          </div>
          <div
            style={selId === 3 ? customCSS : {}}
            onClick={() => {
              setDaysAgo(3);
              setSelID(3);
            }}
            className="ithDay"
            id="3"
          >
            3 Days ago
          </div>
          <div
            style={selId === 4 ? customCSS : {}}
            onClick={() => {
              setDaysAgo(4);
              setSelID(4);
            }}
            className="ithDay"
            id="4"
          >
            4 Days ago
          </div>
        </div>
      </div>
      <div className="searchLiveStausBtn">
        <NavLink
          state={{ trainNumber: trainNumber, daysAgo: daysAgo }}
          to="/live-train-status/trainSpecific"
        >
          <button>Check Status</button>
        </NavLink>
      </div>
    </div>
  );
}

export default LiveTrainStatus;
