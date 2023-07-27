import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import ConnectionList from './components/ConnectionList';
import { connectionList, departuresList, stopList,Stop } from './data';
import AddConnection from './components/AddConnection';
import DisplayConnection from './components/DisplayConnection';
import moment from 'moment';

function App() {

  const navigate = useNavigate();

  // list of connection on Main page
  const [connections, setConnections] = useState(connectionList);

  const [connectionStops, setConnectionStops] = useState([]);
  const [selectedConnection, setSelectedConnection] = useState({});


  const goToAddConnection = () => {
    navigate("/add");
  };

  const goBack = () => {
    navigate("/");
  }

  const addNewConnectionScreen = (newConnection) => {
      setConnections([...connections, newConnection]);
      navigate("/");
  };

  const goToConnectionDetailsScreen = (title) => {
    let connection = connections.find(c => c.title === title);
    if (connection) {
        let con = constructStops(connection);
        setConnectionStops(con)
       navigate(`/connection/${title}`);
     }
    };

  function constructStops(connection) {

    var cStops = [];

    connection.stops.forEach(s => {
      let stop = stopList.find(c => s === c.id);
      if (stop) {
        var stopModal = {} as Stop;
        stopModal.id = stop.id;
        stopModal.title = stop.title;
        stopModal.departures = [];

        // get depature datetime list
        let depatureList = constructDeparture(stop.id);
        
        if (depatureList.length) {
          depatureList.forEach(element => {

            let formattedDepatureTime = moment.utc(element.departure_time_utc).format('HH:mm a');

            stopModal.departures.push(formattedDepatureTime);
          });
        }
        cStops.push(stopModal);
      }
    });
    return cStops;
  }

  function constructDeparture(stop) {
      let depatures = departuresList.filter(c => stop === c.stop_id);
      if (depatures) {
      return depatures;
      }
  }
  
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<ConnectionList
            connections={connections}
            goToConnection={goToConnectionDetailsScreen}
            goToAddConnection={goToAddConnection}/>} />

        <Route path="/add" element={<AddConnection
            onAddConnection={addNewConnectionScreen} goBack={goBack} />}>
        </Route>

        <Route path="/connection/:title" element={<DisplayConnection
            goBack={goBack} connection={selectedConnection} stops={connectionStops} />}>
        </Route>
        
    </Routes>
    </div>
  );
}

export default App;
