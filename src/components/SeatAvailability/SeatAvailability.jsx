import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import codes from "../../StationCodes/stationCodes.js";
import { v1 as uuidv1 } from "uuid";

function SeatAvailability(props) {
  const [departureStation, setDepartureStation] = useState("NDLS");
  const [arrivalStation, setArrivalStation] = useState("DBRG");
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [quotaType, setQuotaType] = useState("GN");

  const [dropDownDept, setDropDownDept] = useState(false);
  const [dropDownArr, setDropDownArr] = useState(false);

  const [filteredCodesDept, setFilteredCodesDept] = useState([]);
  const [filteredCodesArr, setFilteredCodesArr] = useState([]);

  const stCodes = codes.map((station) => {
    return station;
  });

  // console.log(stCodes[0]);

  function deptChange(e) {
    setDepartureStation(e.target.value);
  }

  function arrChange(e) {
    setArrivalStation(e.target.value);
  }

  useEffect(() => {
    var filteredStations = stCodes.filter((station) => {
      return (
        station.stnCode
          .toLowerCase()
          .includes(departureStation.toLowerCase()) ||
        station.stnCity
          .toLowerCase()
          .includes(departureStation.toLowerCase()) ||
        station.stnName.toLowerCase().includes(departureStation.toLowerCase())
      );
    });

    setFilteredCodesDept(filteredStations);
  }, [departureStation]);

  useEffect(() => {
    var filteredStations = stCodes.filter((station) => {
      return (
        station.stnCode.toLowerCase().includes(arrivalStation.toLowerCase()) ||
        station.stnCity.toLowerCase().includes(arrivalStation.toLowerCase()) ||
        station.stnName.toLowerCase().includes(arrivalStation.toLowerCase())
      );
    });

    setFilteredCodesArr(filteredStations);
  }, [arrivalStation]);

  function enableDropDownDept() {
    console.log("Deptdownned");
    setDropDownDept(true);
  }

  function disableDropDownDept() {
    console.log("Deptupped");
    setDropDownDept(false);
  }

  function enableDropDownArr() {
    console.log("Arrdownned");
    setDropDownArr(true);
  }

  function disableDropDownArr() {
    console.log("Arrupped");
    setDropDownArr(false);
  }

  function changeDate(e) {
    setDate(e.target.value);
  }

  function changeQuota(e) {
    setQuotaType(e.target.value);
  }

  function updateDeptStation(e) {
    setDepartureStation(e.target.innerText.split(",")[0]);
    // console.log("yaha: ", e.target.innerText.split(",")[0]);
  }

  function updateArrStation(e) {
    setArrivalStation(e.target.innerText.split(",")[0]);
    // console.log("yaha: ", e.target.innerText.split(",")[0]);
  }

  return (
    <div className="SeatAvailability">
      <h1>Check Seat Availability</h1>

      <div className="bothSelectDiv">
        <div className="selectStation">
          <p>FROM</p>
          <div className="inputDrop">
            <input
              type="text"
              className="inputField"
              onChange={deptChange}
              onFocus={enableDropDownDept}
              name="From"
              value={departureStation}
              placeholder="From"
              autocomplete="off"
            />

            {dropDownDept && (
              <div className="stationsD">
                {filteredCodesDept.map((code) => {
                  return (
                    <div key={uuidv1()} className="eachStationD">
                      <p
                        onClick={(e) => {
                          updateDeptStation(e);
                          disableDropDownDept();
                        }}
                      >
                        <span className="codeSpan">{code.stnCode}</span>,{" "}
                        {code.stnName}
                      </p>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        <div className="selectStation">
          <p>FROM</p>
          <div className="inputDrop">
            <input
              type="text"
              className="inputField"
              onChange={arrChange}
              onFocus={enableDropDownArr}
              name="From"
              value={arrivalStation}
              placeholder="From"
              autocomplete="off"
            />
          </div>

          {dropDownArr && (
            <div className="stationsA">
              {filteredCodesArr.map((code) => {
                return (
                  <div key={uuidv1()} className="eachStationA">
                    <p
                      onClick={(e) => {
                        updateArrStation(e);
                        disableDropDownArr();
                      }}
                    >
                      <span className="codeSpan">{code.stnCode}</span>,{" "}
                      {code.stnName}
                    </p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="seatsBottom">
        <div className="selectDate">
          <label htmlFor="date" className="dateLabel">
            Select Date:
          </label>
          <input
            onChange={changeDate}
            type="date"
            id="date"
            name="date"
            className="dateInput"
            value={date}
          />
        </div>

        <div className="selectQuota">
          <label htmlFor="quota" className="quotaLabel">
            Quota:
          </label>
          <select
            onChange={changeQuota}
            id="quota"
            name="quota"
            className="quotaSelect"
          >
            <option value="GN">General</option>
            <option value="TQ">Tatkal</option>
            <option value="PT">Premium Tatkal</option>
            <option value="LD">Ladies</option>
            <option value="DF">Defence</option>
            <option value="PH">Physically Handicapped</option>
            <option value="FT">Foreign Tourist</option>
            <option value="DP">Duty Pass</option>
          </select>
        </div>

        <div className="seatsButton">
          <NavLink
            to="/seat-availability/train-btw-stations"
            style={{ textDecoration: "none", color: "black" }}
            state={{ departureStation, arrivalStation, date, quotaType }}
          >
            <button
              onClick={() => console.log(departureStation)}
              className="searchSeats"
            >
              Search
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SeatAvailability;
