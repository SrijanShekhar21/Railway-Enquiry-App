import React, { useEffect, useState } from "react";

function Stations({ changing, stCodes, handleClick }) {
  const [codes, setCodes] = useState([]);

  useEffect(() => {
    const stdCodes = stCodes;
    const codes = stdCodes.map((st) => {
      return st;
    });
    setCodes(codes);
  }, [changing]);

  return (
    <div key={Math.floor(Math.random() * 100000)} className="stations">
      {codes.map((code) => {
        return (
          <div key={Math.floor(Math.random() * 100000)} className="eachStation">
            <p onClick={(e) => handleClick(e.target.innerText)}>
              <span className="codeSpan">{code.stnCode}</span>, {code.stnName}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default Stations;
