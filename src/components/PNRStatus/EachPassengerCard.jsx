import React from "react";

function EachPassengerCard({ passenger }) {
  const customColor = {
    color: passenger.CurrentStatus.includes("CNF") ? "green" : "red",
    fontWeigth: "bold",
  };

  return (
    <div className="EachPassengerCard">
      <div className="eachPassengerCardTop">
        <p className="psgrNumber">
          👤 Passenger {passenger.Number}{" "}
          <div className="cnfProb">
            <p>
              Confirm Probability:{" "}
              <span
                style={{
                  color: passenger.PredictionPercentage > 50 ? "green" : "red",
                  fontWeight: "bold",
                }}
              >
                {passenger.PredictionPercentage}%
              </span>{" "}
            </p>
          </div>
        </p>
      </div>
      <div className="eachPassengerCardMiddle">
        <p>
          Current Status:{" "}
          <span
            style={{
              fontWeight: "bold",
              color: passenger.CurrentStatus.includes("CNF") ? "green" : "red",
            }}
          >
            {passenger.CurrentStatus}
          </span>
        </p>
        <div className="BookingStatus">
          <p>
            Booking Status:{" "}
            <span
              style={{
                color: passenger.BookingStatus.includes("CNF")
                  ? "green"
                  : "red",
                fontWeight: "bold",
              }}
            >
              {passenger.BookingStatus}
            </span>
          </p>
        </div>
        <div className="2nd">
          <p>
            Seat no:{" "}
            <span style={{ fontWeight: "bold" }}>
              {passenger.Berth !== undefined && passenger.Berth},{" "}
              {passenger.BookingBerthCode !== undefined &&
                passenger.BookingBerthCode}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default EachPassengerCard;
