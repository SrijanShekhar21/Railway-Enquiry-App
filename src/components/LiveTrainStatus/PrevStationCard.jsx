import React from "react";

function PrevStationCard({ station, upcoming }) {
  const customColor = {
    color: station.arrival_delay == 0 ? "green" : "red",
  };

  const customCSS = {
    backgroundColor: upcoming ? "white" : "hsl(0, 0%, 90%)",
  };

  return (
    <div style={customCSS} className="prevStationCard">
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
    </div>
  );
}

export default PrevStationCard;
