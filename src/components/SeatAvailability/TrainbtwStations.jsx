import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import trainsBtwStationResponse from "../../../TrainbtwStationsResponse.js";
import EachTrainCard from "./EachTrainCard.jsx";
import { v1 as uuidv1 } from "uuid";
import TrainsloadingSkeleton from "./TrainsloadingSkeleton.jsx";

function TrainbtwStations(props) {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const { departureStation, arrivalStation, date, quotaType } = location.state;
  console.log(location.state);
  const [gotState, setGotState] = useState([]);

  async function fetchAPIdata(mounted) {
    console.log("travel dets: ", props.traveldetails);
    const options = {
      method: "GET",
      url: "https://irctc1.p.rapidapi.com/api/v3/trainBetweenStations",
      params: {
        fromStationCode: departureStation,
        toStationCode: arrivalStation,
        dateOfJourney: date,
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "irctc1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log("TrainsbtwStation: ", response.data.data);
      console.log("Api called to fetch trains");

      // mounted &&
      //   setGotState([
      //     ...trainsBtwStationResponse.data,
      //     { date: date, quota: quotaType },
      //   ]);

      mounted &&
        setGotState([...response.data.data, { date: date, quota: quotaType }]);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    let mounted = true;
    fetchAPIdata(mounted);
    return () => (mounted = false);
  }, []);

  const tempDate_quota = gotState[gotState.length - 1];
  const Alltrains = gotState.filter((etrain, index) => {
    return index !== gotState.length - 1;
  });

  const [trains, setTrains] = useState(Alltrains);
  const [date_quota, setDateQuota] = useState(tempDate_quota);

  useEffect(() => {
    setTrains(Alltrains);
    setDateQuota(tempDate_quota);
  }, [gotState]);

  const [sortDept, setSortDept] = useState(1);
  const [sortArr, setSortArr] = useState(1);
  const [sortDur, setSortDur] = useState(1);

  useEffect(() => {
    const sorted_trains = trains.sort((a, b) => {
      const time_a = a.from_std.split(":");
      const time_b = b.from_std.split(":");

      if (sortDept % 2 === 0) {
        if (time_a[0] === time_b[0]) {
          return time_a[1] - time_b[1];
        } else {
          return time_a[0] - time_b[0];
        }
      } else {
        if (time_a[0] === time_b[0]) {
          return time_b[1] - time_a[1];
        } else {
          return time_b[0] - time_a[0];
        }
      }
    });
    setTrains(sorted_trains);
  }, [sortDept]);

  useEffect(() => {
    const sorted_trains = trains.sort((a, b) => {
      const time_a = a.to_sta.split(":");
      const time_b = b.to_sta.split(":");

      if (sortArr % 2 === 0) {
        if (time_a[0] === time_b[0]) {
          return time_a[1] - time_b[1];
        } else {
          return time_a[0] - time_b[0];
        }
      } else {
        if (time_a[0] === time_b[0]) {
          return time_b[1] - time_a[1];
        } else {
          return time_b[0] - time_a[0];
        }
      }
    });
    setTrains(sorted_trains);
  }, [sortArr]);

  useEffect(() => {
    const sorted_trains = trains.sort((a, b) => {
      const time_a = a.duration.split(":");
      const time_b = b.duration.split(":");

      if (sortDur % 2 === 0) {
        if (time_a[0] === time_b[0]) {
          return time_a[1] - time_b[1];
        } else {
          return time_a[0] - time_b[0];
        }
      } else {
        if (time_a[0] === time_b[0]) {
          return time_b[1] - time_a[1];
        } else {
          return time_b[0] - time_a[0];
        }
      }
    });
    setTrains(sorted_trains);
  }, [sortDur]);

  return (
    <div className="container">
      <div key={uuidv1()} className="trainBtwStations">
        <div className="sortButtons">
          <button
            onClick={() => {
              return setSortDept(!sortDept);
            }}
            className="sort"
          >
            Sort by Departure Time
          </button>
          <button
            onClick={() => {
              return setSortArr(!sortArr);
            }}
            className="sort"
          >
            Sort by Arrival Time
          </button>
          <button
            onClick={() => {
              return setSortDur(!sortDur);
            }}
            className="sort"
          >
            Sort by Duration
          </button>
        </div>

        {isLoading ? (
          <TrainsloadingSkeleton />
        ) : trains !== undefined && trains.length === 0 ? (
          <h1>No Trains Found</h1>
        ) : (
          trains !== undefined && (
            <div className="eachTrainContainer">
              {trains.map((train) => {
                return (
                  <EachTrainCard
                    key={uuidv1()}
                    train={train}
                    date_quota={date_quota}
                  />
                );
              })}
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default TrainbtwStations;
