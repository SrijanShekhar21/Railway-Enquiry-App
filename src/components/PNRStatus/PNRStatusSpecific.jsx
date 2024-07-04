import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import PNRSampleResponse from "../../../PNRSampleResponse.js";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import EachPassengerCard from "./EachPassengerCard.jsx";
import axios from "axios";

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
        pnrNumber: PNRNumber,
      },
      headers: {
        "x-rapidapi-key": "7196cd55aemsha042290a625d9adp1c2760jsn83f557280247",
        "x-rapidapi-host": "irctc1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      setPnrStatusData(response.data.data);
      // setPnrStatusData(PNRSampleResponse.data);
      // console.log(PNRSampleResponse.data);

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
        <div className="pnrSpecificContent">
          <SkeletonTheme
            baseColor="#f4f4f4c9"
            highlightColor="#444"
            height="6rem"
            duration={1}
          >
            <Skeleton count={15} />
          </SkeletonTheme>
        </div>
      ) : pnrStatusData === undefined || pnrStatusData.TrainNo === null ? (
        <div>
          <h1>Invalid PNR Number</h1>
        </div>
      ) : (
        <div className="pnrSpecificContent">
          <div className="pnrNumber">
            <h1>PNR Number: {PNRNumber}</h1>
          </div>
          <div className="pnrTrainData">
            <div className="trainDataLeft">
              <div className="pneTrainNamediv">
                <p className="pnrTrainnameNumber">
                  {pnrStatusData.TrainName} ({pnrStatusData.TrainNo})
                  <span className="rating"> ⭐ {pnrStatusData.Rating}</span>
                </p>
              </div>

              <div className="pnrTrainRouteDiv">
                <p>
                  {pnrStatusData.From} ---- {pnrStatusData.To}
                </p>
                <p>
                  {pnrStatusData.DepartureTime} ---- {pnrStatusData.ArrivalTime}
                </p>
              </div>

              <div className="travelDatePNR">
                <span className="datePNR">
                  Date of Journey:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {pnrStatusData.Doj}
                  </span>
                  {" | "}
                </span>
                <span className="class">
                  Class:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {pnrStatusData.Class}
                  </span>
                  {" | "}
                </span>
                <span className="Quota">
                  Quota:{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {pnrStatusData.Quota}
                  </span>
                </span>
              </div>
            </div>
            <div className="trainDataRight">
              <p
                style={{
                  color: pnrStatusData.ChartPrepared ? "green" : "red",
                }}
                className="isChardPrepared"
              >
                {pnrStatusData.ChartPrepared
                  ? "Chart Prepared"
                  : "Chart Not Prepared"}
              </p>
            </div>
          </div>

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
