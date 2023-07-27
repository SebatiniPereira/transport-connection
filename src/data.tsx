export interface Connection
{
 title: string,
 stops?: string[] // a list of stop IDs
}
export interface Stop {
 id: string
 title: string
 direction: string
 departures: string[]
}

export const connectionList = [
  {
           title: "East Coburg",
           stops: ["2273",'1071','31845']
          
        },
        {
            title: "Werribee",
            stops: ['1071','31845']  
        },
        {
            title: "Sunshine",
            stops: ['31845']
        }
]

export const stopList= [
    {
        id: "2273",
        mode: "tram",
        title: "Clarendon St/Park St #24",
    },
    {
        id: "1071",
        mode: "train",
        title: "Flinders Street Station",
    },
    {
        id: "31845",
        mode: "bus",
        title: "Footscray Station / Irving St",
    }
];
 
export const departuresList= [
        {
            stop_id: "2273",
            direction: "0",
            departure_time_utc: "2019-03-21T13:00:00Z"
        },
        {
            stop_id: "2273",
            direction: "0",
            departure_time_utc: "2019-03-21T02:12:00Z"
        },
        {
            stop_id: "2273",
            direction: "0",
            departure_time_utc: "2019-03-21T02:24:00Z"
        },
        {
            stop_id: "1071",
            direction: "15",
            departure_time_utc: "2019-03-21T02:17:00Z"
        },
        {
            stop_id: "1071",
            direction: "15",
            departure_time_utc: "2019-03-21T02:21:00Z"
        },
        {
            stop_id: "31845",
            direction: "18",
            departure_time_utc: "2019-03-21T02:16:00Z"
        },
        {
            stop_id: "31845",
            direction: "18",
            departure_time_utc: "2019-03-21T02:36:00Z"
        },
        {
            stop_id: "31845",
            direction: "18",
            departure_time_utc: "2019-03-21T02:56:00Z"
        },
]