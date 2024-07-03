import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./style.css";
import Header from "./components/Header_Footer/Header.jsx";
import Footer from "./components/Header_Footer/Footer.jsx";
import SeatAvailability from "./components/SeatAvailability/SeatAvailability.jsx";
import PNRStatus from "./components/PNRStatus/PNRStatus.jsx";
import LiveTrainStatus from "./components/LiveTrainStatus/LiveTrainStatus.jsx";
import TrainbtwStations from "./components/SeatAvailability/TrainbtwStations.jsx";
import LiveTrainSpecificPage from "./components/LiveTrainStatus/LiveTrainSpecificPage.jsx";
import PNRStatusSpecific from "./components/PNRStatus/PNRStatusSpecific.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import landscape from "/landscape.jpg";

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${landscape})`,
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="screen"
    >
      <Header />
      <div className="body">
        <Routes>
          <Route path="/" element={<LandingPage />}>
            <Route path="seat-availability" element={<SeatAvailability />} />
            <Route path="pnr-status" element={<PNRStatus />} />
            <Route path="live-train-status" element={<LiveTrainStatus />} />
          </Route>
        </Routes>
        <Routes>
          <Route
            path="/seat-availability/train-btw-stations"
            element={<TrainbtwStations />}
          />
          <Route
            path="/live-train-status/trainSpecific"
            element={<LiveTrainSpecificPage />}
          />
          <Route
            path="/pnr-status/pnr-specific"
            element={<PNRStatusSpecific />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
