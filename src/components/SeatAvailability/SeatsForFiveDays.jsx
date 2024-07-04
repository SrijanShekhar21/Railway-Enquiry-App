import React, { useEffect, useState } from "react";

// eachDayInfo = {
//     ticket_fare: 3980,
//     catering_charge: 770,
//     alt_cnf_seat: null,
//     total_fare: 4750,
//     date: "29-6-2024",
//     confirm_probability_percent: "89",
//     confirm_probability: "High",
//     current_status: "PQWL25/WL12.",
//   }

// className={({ isActive }) => (isActive ? "activeTab" : "notActiveTab")}

function SeatsForFiveDays({ eachDayInfo }) {
  return (
    <div className="seatsForFiveDaysContainer">
      <div className="eachDateDiv">
        <p className="seatDate">{eachDayInfo.date}</p>
        <p
          style={{
            color: eachDayInfo.current_status.includes("AVAILABLE-")
              ? "green"
              : "red",
          }}
          className="seatStatus"
        >
          {eachDayInfo.current_status}
        </p>
        <p className="farePara">
          Fare:{" "}
          <span className="fareSpan" style={{ fontWeight: "bold" }}>
            ₹{eachDayInfo.total_fare ? eachDayInfo.total_fare : null}
          </span>
        </p>
      </div>
    </div>
  );
}

export default SeatsForFiveDays;
