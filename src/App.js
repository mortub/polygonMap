import React, {useState} from 'react';
import Map from './components/Map';
import CoordinatesForm from './components/CoordinatesForm';

function App() {
  const [addPointFlag, setAddPointFlag] = useState(false);
    const [point, setPoint] = useState([0,0]);
    const addPointToMap = (long, lat) =>{
        setAddPointFlag(true);
        setPoint([long, lat]);
    }
    return (
        <div className='rowC'>
        <Map setAddPointFlag={setAddPointFlag} point={point} addPointFlag={addPointFlag}/>
        <CoordinatesForm addPointToMap={addPointToMap}/>
        </div>
    )
}

export default App;
