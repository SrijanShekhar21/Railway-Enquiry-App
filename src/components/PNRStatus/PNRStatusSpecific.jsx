import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PNRSampleResponse from "../../../PNRSampleResponse.js";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import EachPassengerCard from "./EachPassengerCard.jsx";

function PNRStatusSpecific() {
  let location = useLocation();
  const { PNRNumber } = location.state;
  console.log(PNRNumber);
  const [pnrStatusData, setPnrStatusData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function fetchPNRStatus() {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://irctc1.p.rapidapi.com/api/v3/getPNRStatus",
      params: {
        pnrNumber: "6237000453",
      },
      headers: {
        "x-rapidapi-key": "7196cd55aemsha042290a625d9adp1c2760jsn83f557280247",
        "x-rapidapi-host": "irctc1.p.rapidapi.com",
      },
    };

    try {
      //   const response = await axios.request(options);
      //   console.log(response.data.data);

      //   setPnrStatusData(response.data.data);
      setPnrStatusData(PNRSampleResponse.data);
      console.log(PNRSampleResponse.data);

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchPNRStatus();
  }, []);

  return (
    <div className="pnrSpecificContainer">
      {isLoading ? (
        <SkeletonTheme
          baseColor="#f4f4f4c9"
          highlightColor="#444"
          height="6rem"
          duration={1}
        >
          <Skeleton count={15} />
        </SkeletonTheme>
      ) : (
        <div className="pnrSpecificContent">
          <div className="passengerDetailsCardContainer">
            {pnrStatusData.PassengerStatus.map((passenger, index) => (
              <EachPassengerCard
                key={index}
                pnrStatusData={pnrStatusData}
                passenger={passenger}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default PNRStatusSpecific;
