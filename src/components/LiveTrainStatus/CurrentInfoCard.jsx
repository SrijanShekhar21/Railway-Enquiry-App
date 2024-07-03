import React, { useEffect, useState } from "react";

function CurrentInfoCard({ liveInfo }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prevIdx) => (prevIdx + 1) % liveInfo.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  return (
    <div className="currentInfoCard">
      <p>{liveInfo[idx].label}</p>
      <h3>{liveInfo[idx].readable_message}</h3>
      <p>({liveInfo[idx].hint})</p>
    </div>
  );
}

export default CurrentInfoCard;
