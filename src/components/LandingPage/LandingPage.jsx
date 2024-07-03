import React, { useState, useEffect } from "react";
import SeatAvailability from "../SeatAvailability/SeatAvailability.jsx";
import PNRStatus from "../PNRStatus/PNRStatus.jsx";
import LiveTrainStatus from "../LiveTrainStatus/LiveTrainStatus.jsx";
import landscape from "/landscape.jpg";
import { Routes, Route } from "react-router-dom";
import Typewriter from "typewriter-effect";

function LandingPage() {
  return (
    <div className="totalLanding">
      <div className="welcomeTitle">
        <h1 className="welcomeText">PLANNING A TRIP?</h1>
        <p className="planningText">We've got you covered...</p>
        <div className="planningText">
          <span>Check&nbsp;</span>
          <Typewriter
            options={{
              strings: ["Seat Availability", "PNR Status", "Live Train Status"],
              autoStart: true,
              loop: true,
            }}
          />
        </div>
        <div className="seatInLandin"></div>

        <div className="seatInLandin">
          <Routes>
            <Route index element={<SeatAvailability />} />
            <Route path="seat-availability" element={<SeatAvailability />} />
            <Route path="pnr-status" element={<PNRStatus />} />
            <Route path="live-train-status" element={<LiveTrainStatus />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
