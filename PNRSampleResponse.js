const PNRSampleResponse = {
  status: true,
  message: "Success",
  timestamp: 1719812612755,
  data: {
    Pnr: "6237000453",
    TrainNo: "12423",
    TrainName: "RAJDHANI EXP",
    Doj: "24-07-2024",
    BookingDate: "08-06-2024",
    Quota: "GN",
    DestinationDoj: "26-07-2024",
    SourceDoj: "24-07-2024",
    From: "DBRT",
    To: "CNB",
    ReservationUpto: "CNB",
    BoardingPoint: "DBRT",
    Class: "2A",
    ChartPrepared: false,
    BoardingStationName: "Dibrugarh Town",
    TrainStatus: "",
    TrainCancelledFlag: false,
    ReservationUptoName: "Kanpur Central",
    PassengerCount: 1,
    PassengerStatus: [
      {
        ReferenceId: null,
        Pnr: null,
        Number: 1,
        Prediction: null,
        PredictionPercentage: "100",
        ConfirmTktStatus: "Confirm",
        Coach: "A2",
        Berth: 41,
        BookingStatus: "CNF A2 41",
        CurrentStatus: "CNF",
        CoachPosition: null,
        BookingBerthNo: "41",
        BookingCoachId: "A2",
        BookingStatusNew: "CNF",
        BookingStatusIndex: "0",
        CurrentBerthNo: "",
        CurrentCoachId: "",
        BookingBerthCode: "SL",
        CurrentBerthCode: null,
        CurrentStatusNew: "CNF",
        CurrentStatusIndex: "0",
      },
    ],
    DepartureTime: "20:50",
    ArrivalTime: "05:00",
    ExpectedPlatformNo: "1",
    BookingFare: "4470",
    TicketFare: "4470",
    CoachPosition:
      "L SLR H1 A5 A4 A3 A2 A1 PC B12 B11 B10 B9 B8 B7 B6 B5 B4 B3 B2 B1 HCP",
    Rating: 3.9,
    FoodRating: 3.6,
    PunctualityRating: 4.1,
    CleanlinessRating: 3.9,
    SourceName: "Dibrugarh",
    DestinationName: "Kanpur",
    Duration: "32:10",
    RatingCount: 2850,
    HasPantry: true,
    GroupingId: null,
    OptVikalp: false,
    VikalpData: "",
    VikalpTransferred: false,
    VikalpTransferredMessage: "",
    FromDetails: {
      category: "A",
      division: "TSK",
      latitude: "27.4643753",
      longitude: "94.9365535",
      state: "ASSAM",
      stationCode: "DBRT",
      stationName: "DIBRUGARH TOWN",
    },
    ToDetails: {
      category: "A1",
      division: "ALD",
      latitude: "26.453855",
      longitude: "80.3511946",
      state: "UTTAR PRADESH",
      stationCode: "CNB",
      stationName: "KANPUR CENTRAL",
    },
    BoardingPointDetails: {
      category: "A",
      division: "TSK",
      latitude: "27.4643753",
      longitude: "94.9365535",
      state: "ASSAM",
      stationCode: "DBRT",
      stationName: "DIBRUGARH TOWN",
    },
    ReservationUptoDetails: {
      category: "A1",
      division: "ALD",
      latitude: "26.453855",
      longitude: "80.3511946",
      state: "UTTAR PRADESH",
      stationCode: "CNB",
      stationName: "KANPUR CENTRAL",
    },
  },
};

export default PNRSampleResponse;
