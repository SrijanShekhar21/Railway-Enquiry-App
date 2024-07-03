import React, { useEffect, useState } from "react";

function SelectDate(props) {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));

  function handleDate(e) {
    // console.log(e.target.value);
    setDate(e.target.value);
  }

  useEffect(() => {
    console.log(date);
    props.handleHandle(date);
  }, [date]);

  return (
    <div className="selectDate">
      <label htmlFor="date" className="dateLabel">
        Select Date:
      </label>
      <input
        onChange={handleDate}
        type="date"
        id="date"
        name="date"
        className="dateInput"
        value={date}
      />
    </div>
  );
}

export default SelectDate;
