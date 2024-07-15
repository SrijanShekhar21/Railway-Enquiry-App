import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import LiveTrainInfoSample from "../../../LiveTrainInfoSample";
import PrevStationCard from "./PrevStationCard.jsx";
import ReachingStationCard from "./ReachingStationCard.jsx";
import CurrentInfoCard from "./CurrentInfoCard.jsx";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function LiveTrainSpecificPage() {
  let location = useLocation();
  const reachingRef = useRef(null);
  const { trainNumber, daysAgo } = location.state;
  const [liveData, setLiveData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function fetchLiveTrainStatus() {
    setIsLoading(true);
    const options = {
      method: "GET",
      url: "https://irctc1.p.rapidapi.com/api/v1/liveTrainStatus",
      params: {
        trainNo: trainNumber,
        startDay: daysAgo,
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "irctc1.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data.data);

      setLiveData(response.data.data);
      //   setLiveData(LiveTrainInfoSample.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchLiveTrainStatus();
  }, []);

  useEffect(() => {
    if (reachingRef.current) {
      reachingRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [liveData]);

  return (
    <div className="liveSpecificContainer">
      {isLoading ? (
        <SkeletonTheme
          baseColor="#f4f4f4c9"
          highlightColor="#444"
          height="6rem"
          duration={1}
        >
          <Skeleton count={15} />
        </SkeletonTheme>
      ) : liveData === undefined ? (
        <div>
          <h1>Invalid Train Number</h1>
        </div>
      ) : liveData !== undefined && liveData.new_message ? (
        <h3>{liveData.new_message}</h3>
      ) : (
        liveData !== undefined && (
          <div className="liveSpecificContent">
            <div className="liveTrainName_number">
              <div className="eachInLiveName">
                <h1>{liveData.train_name} Live Running Status</h1>
              </div>
              <div className="eachInLiveName">
                <p>#{liveData.train_number}</p>
              </div>
              <div className="eachInLiveName">
                <p>
                  <span style={{ fontWeight: "lighter" }}>
                    Train Start Date:{" "}
                  </span>
                  {liveData.train_start_date}
                </p>
              </div>
            </div>
            <div className="liveInfoTitleBar">
              <div className="titleLeft">
                <p>Arrival</p>
              </div>
              <div className="titleMid">
                <p>Station</p>
              </div>
              <div className="titleRight">
                <p>Departure</p>
              </div>
            </div>
            <div className="liveRouteContainer">
              <div className="previousStationContainer">
                {liveData.previous_stations.map((station, index) => {
                  return (
                    <PrevStationCard
                      upcoming={false}
                      key={index}
                      station={station}
                    />
                  );
                })}
              </div>
              <div ref={reachingRef} className="currentInformationContainer">
                <CurrentInfoCard liveInfo={liveData.current_location_info} />
              </div>
              <div className="reachingStationContainer">
                <ReachingStationCard
                  key={liveData.upcoming_stations[1].station_code}
                  station={liveData.upcoming_stations[1]}
                />
              </div>
              <div className="upcomingStationContainer">
                {liveData.upcoming_stations.map((station, index) => {
                  return (
                    index > 1 && (
                      <PrevStationCard
                        upcoming={true}
                        key={index}
                        station={station}
                      />
                    )
                  );
                })}
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default LiveTrainSpecificPage;
