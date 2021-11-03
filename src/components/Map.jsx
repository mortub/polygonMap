import { ReactBingmaps } from 'react-bingmaps';
import '../App.css';
import React, { useEffect, useState } from 'react';

const BING_KEY = "Av-0YttXt1zB9kvtd_DIdwKMyJnJaaUIHlAPHXqtoVpgZEme-sqpT3lRVUe8fSfh";

const Map = (setAddPointFlag, point, addPointFlag) =>{
  const [polyline, setPolyline] = useState( {
    "location": [[13.0827, 80.2707],[13.0527, 80.2707]],
    "option": { strokeColor: 'red', strokeThickness: 10, strokeDashArray: [1, 2, 5, 10] }
  });

  const [location, setLocation] = useState([13.0827, 80.2707]);

    const onAddingPoint = () =>{
      setAddPointFlag(false);
      setLocation(point);
      //TODO: add point to polyline
    }

    useEffect(() =>{
      if(addPointFlag){
        onAddingPoint();
      }
    })

    return (
      <ReactBingmaps
              id = "nine"
              className = "mapClass"
              center = {[13.0827, 80.2707]}
              bingmapKey = {BING_KEY}
              polyline = {polyline}
            >
            </ReactBingmaps>
    )

}

export default Map;