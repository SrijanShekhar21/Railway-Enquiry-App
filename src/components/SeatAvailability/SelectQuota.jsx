import React, { useState, useEffect } from "react";

function SelectQuota(props) {
  const [quota, setQuota] = useState("GN");

  function handleClick(e) {
    setQuota(e.target.value);
  }

  useEffect(() => {
    props.handleHandle(quota);
  }, [quota]);

  return (
    <div className="selectQuota">
      <label htmlFor="quota" className="quotaLabel">
        Quota:
      </label>
      <select
        onChange={handleClick}
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
  );
}

export default SelectQuota;
