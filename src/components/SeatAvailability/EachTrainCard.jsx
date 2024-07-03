import React, { useEffect, useState } from "react";
import SeatsForFiveDays from "./SeatsForFiveDays.jsx";
import seatsAvailable from "../../../SeatAvailibility.js";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { v1 as uuidv1 } from "uuid";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { SkeletonTheme } from "react-loading-skeleton";

// train = {
//     train_number: "12424",
//     train_name: "Rajdhani Express",
//     run_days: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
//     train_src: "NDLS",
//     train_dstn: "DBRG",
//     from_std: "21:07",
//     from_sta: "21:02",
//     local_train_from_sta: 1262,
//     to_sta: "19:25",
//     to_std: "19:40",
//     from_day: 0,
//     to_day: 1,
//     d_day: 0,
//     from: "CNB",
//     to: "GHY",
//     from_station_name: "KANPUR CENTRAL",
//     halt_stn: 13,
//     distance: 1423,
//     to_station_name: "GUWAHATI",
//     duration: "22:18",
//     special_train: false,
//     train_type: "RAJ",
//     score: 25,
//     score_train_type: 5,
//     score_booking_requency: 0,
//     frequency_perc: 0,
//     from_distance_text: "",
//     to_distance_text: "",
//     has_pantry: true,
//     is_monsoon_timing_applicable: false,
//     duration_rating: 1,
//     score_duration: 10,
//     score_std: 10,
//     score_user_preferred: 0,
//     train_date: "28-06-2024",
//     class_type: ["3A", "2A", "1A"],
//   }

// seatsAvailable = {
//   ticket_fare: 3980,
//   catering_charge: 770,
//   alt_cnf_seat: null,
//   total_fare: 4750,
//   date: "29-6-2024",
//   confirm_probability_percent: "89",
//   confirm_probability: "High",
//   current_status: "PQWL25/WL12.",
// }

function EachTrainCard({ train, date_quota }) {
  const [AllseatsAvailable, setSeatsAvailable] = useState([]);
  const [selClass, setSelClass] = useState("SRIJAN");
  const [callAPI, setCallAPI] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleTrainDetails(train, clas) {
    setIsLoading(true);
    const trainNo = train.train_number;
    const fromStationCode = train.from;
    const toStationCode = train.to;
    const date = date_quota.date;
    const quota = date_quota.quota;

    const options = {
      method: "GET",
      url: "https://irctc1.p.rapidapi.com/api/v1/checkSeatAvailability",
      params: {
        classType: clas,
        fromStationCode: fromStationCode,
        quota: quota,
        toStationCode: toStationCode,
        trainNo: trainNo,
        date: date,
      },
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_API_KEY,
        "x-rapidapi-host": "irctc1.p.rapidapi.com",
      },
    };
    try {
      const response = await axios.request(options);
      console.log("Seats avlbl: ", response.data.data);
      console.log("Api called to fetch seats avlbl");
      // setSeatsAvailable(seatsAvailable.data);
      setSeatsAvailable(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
    setCallAPI(false);
  }

  useEffect(() => {
    callAPI && handleTrainDetails(train, selClass);
  }, [selClass]);

  return (
    <div key={uuidv1()} className="eachTrain">
      <div className="topTrain">
        <div className="trainNameContainer">
          <h1>{train.train_name.toUpperCase()}</h1>
          <p>#{train.train_number}</p>
        </div>

        <div className="durationContainer">
          <div className="fromToTime">
            <p className="timePara">{train.from_std}</p>
          </div>
          <div className="fromToTime">
            <p className="timePara">{train.to_sta}</p>
          </div>
          <div className="fromToStation">
            <p className="stationPara">{train.from_station_name}</p>
            <p className="stationCodePara">({train.from})</p>
          </div>
          <div className="fromToStation">
            <p className="stationPara">{train.to_station_name}</p>
            <p className="stationCodePara">({train.to})</p>
          </div>

          <div className="durationTravel">
            <p className="durationPara">
              <span className="durationSpan">--- </span>
              {train.duration} Hours <span className="durationSpan"> ---</span>
            </p>
          </div>
        </div>
      </div>

      <div className="trainClasses">
        {train.class_type.map((clas) => {
          return (
            <div
              key={uuidv1()}
              onClick={(e) => {
                setCallAPI(true);
                setSelClass(e.target.innerText);
              }}
              className="eachClass"
              style={{
                backgroundColor: selClass === clas && `#051937`,
                color: selClass === clas && `white`,
              }}
            >
              <p>{clas}</p>
            </div>
          );
        })}
      </div>

      {isLoading ? (
        <SkeletonTheme
          baseColor="#f4f4f4c9"
          highlightColor="#444"
          height="5.5rem"
          duration={0.9}
        >
          <p>
            <Skeleton />
          </p>
        </SkeletonTheme>
      ) : (
        selClass !== "SRIJAN" &&
        AllseatsAvailable.length > 0 && (
          <div className="fiveDaysContainerInCard">
            {AllseatsAvailable.map((eachDay) => {
              return <SeatsForFiveDays key={uuidv1()} eachDayInfo={eachDay} />;
            })}
          </div>
        )
      )}
    </div>
  );
}

export default EachTrainCard;
