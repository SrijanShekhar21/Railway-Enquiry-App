import React, { useState, useEffect } from "react";

function ReachingStationCard({ station }) {
  const customColor = {
    color: station.arrival_delay == 0 ? "green" : "red",
  };

  const [timeLeftToReload, setTimeLeftToReload] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      timeLeftToReload == 0
        ? setTimeLeftToReload(60)
        : setTimeLeftToReload(timeLeftToReload - 1);
    }, 1000);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    timeLeftToReload == 0 && window.location.reload();
  });

  return (
    <div className="reachingStationCard prevStationCard">
      <div className="cardLeft">
        <h3>{station.station_code}</h3>
        <p>{station.sta}</p>
        <p style={customColor}>{station.eta}</p>
      </div>
      <div className="cardMid">
        <h3>{station.station_name}</h3>
        <p>{station.distance_from_source} KMs</p>
        {station.arrival_delay == 0 ? (
          <p style={{ color: "green" }}>Ontime</p>
        ) : (
          <p style={{ color: "red" }}>Delay: {station.arrival_delay} mins</p>
        )}
      </div>
      <div className="cardRight">
        <h3 style={{ color: "white" }}>.</h3>
        <p>{station.std}</p>
        <p style={customColor}>{station.etd}</p>
      </div>
      <div className="reloadInfo">
        <div className="topReload">
          <p>{timeLeftToReload} sec</p>
        </div>
        <div onClick={() => window.location.reload()} className="bottomReload">
          <p>⟳</p>
        </div>
      </div>
    </div>
  );
}

export default ReachingStationCard;
