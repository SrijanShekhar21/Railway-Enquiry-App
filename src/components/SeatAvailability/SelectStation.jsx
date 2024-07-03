import React, { useEffect, useState } from "react";
import codes from "../../StationCodes/stationCodes.js";
import Stations from "./Stations.jsx";

function SelectStation(props) {
  const allStations = codes;
  const [stations, setStations] = useState(codes);
  const [dropDown, setDropDown] = useState(false);
  const [inputName, setInputName] = useState(props.init);

  function enableDropdown() {
    setDropDown(!dropDown);
  }

  function handleChange(e) {
    setInputName(e.target.value);
  }

  useEffect(() => {
    var filteredStations = allStations.filter((station) => {
      return (
        station.stnCode.toLowerCase().includes(inputName.toLowerCase()) ||
        station.stnCity.toLowerCase().includes(inputName.toLowerCase()) ||
        station.stnName.toLowerCase().includes(inputName.toLowerCase())
      );
    });

    // console.log("Stations: ", filteredStations);
    setStations(filteredStations);
  }, [inputName]);

  const clickedThere = (data) => {
    const splitCode = data.split(",");
    setInputName(splitCode[0]);
    setDropDown(false);
    props.handleHandle(splitCode[0]);
  };

  return (
    <div className="selectStation">
      <p>{props.from.toUpperCase()}</p>
      <div className="inputDrop">
        <input
          className="inputField"
          onChange={handleChange}
          onClick={enableDropdown}
          type="text"
          name={props.from}
          value={inputName}
          placeholder={props.from}
        />
        {dropDown && (
          <Stations
            handleClick={clickedThere}
            changing={inputName}
            stCodes={stations}
          />
        )}
      </div>
    </div>
  );
}

export default SelectStation;
