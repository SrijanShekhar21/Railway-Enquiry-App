import React from "react";

function EachPassengerCard({ passenger, pnrStatusData }) {
  return (
    <div className="EachPassengerCard">
      <div className="eachPassengerCardTop">
        <p className="psgrNumber">👤 Passenger {passenger.Number}</p>
        <p className="psgrQuota">Quota: {pnrStatusData.Quota}</p>
      </div>
      <div className="eachPassengerCardMiddle">
        <p>
          Current Status <span>{passenger.CurrentStatus}</span>
        </p>
        <div className="BookingStatus">
          <p>
            Booking Status <span>{passenger.BookingStatus}</span>
          </p>
        </div>
      </div>
      <div className="eachPassengerCardBottom">
        <div className="1st"><p>Class: {pnrStatusData.Class}</p></div>
        <div className="2nd"><p>Seat no: {passenger.Berth}, {passenger.BookingBerthCode}</p></div>
        <div className="3rd"><p>Coach no: {passenger.Coach}</p></div>
      </div>
    </div>
  );
}

export default EachPassengerCard;
