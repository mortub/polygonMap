import * as React from "react";
import { loadBingApi, Microsoft } from "../BingMapLoader";
//contexts
import { context, MARK_POINT_TYPES } from '../providers/submissionInfoProvider';
import '../App.css';

let tools;
let map;

export default class BingMap extends React.Component {
    static contextType = context;
    mapRef = React.createRef();

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            cordsPoint:[],
            polygonRing:[],
            polygon:{}
        }

    };

    componentDidMount() {
        loadBingApi().then(() => {
            this.initMap();
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.context.state.submitted === true) {
            this.choosePointToAdd();
            this.context.dispatch({ action: 'UPDATE_SUBMITTED', payload: false });
        }
    }

    choosePointToAdd() {
          let radioButtonValue = this.context.state.radioButtonValue;
          if(radioButtonValue === MARK_POINT_TYPES.PLACE){
            this.addPoint(this.state.cordsPoint);
          }
          else if (radioButtonValue === MARK_POINT_TYPES.CORDS){
            let inputPoint = this.context.state.inputPoint;
            let mapPoint = this.createMapPoint(inputPoint);
            this.addPoint(mapPoint);
          }
    }

    createMapPoint(inputPoint){
        let latitude = inputPoint[0];
        let longitude = inputPoint[1];
        let mapPoint = new Microsoft.Maps.Location(latitude,longitude);
        return mapPoint;
    }

    addPoint(point) {
        let polygonRing = this.state.polygonRing;
        polygonRing.push(point);
        this.drawPolygon(polygonRing);
        this.setState({polygonRing:polygonRing});
    }

    drawPolygon(polygonRing) {
        map.entities.remove(this.state.polygon)
        let polygon = new Microsoft.Maps.Polygon(polygonRing, {
            fillColor: new Microsoft.Maps.Color(204, 0, 120, 255),
            strokeColor: new Microsoft.Maps.Color(150, 0, 0, 255)
        });
        tools.edit(polygon);
        this.setState({polygon:polygon})
    }


    render() {
        return (
            <div ref={this.mapRef} className="mapClass" />
        )
    }

    initMap() {
        map = new Microsoft.Maps.Map(this.mapRef.current);

        Microsoft.Maps.loadModule('Microsoft.Maps.DrawingTools', function () {
            tools = new Microsoft.Maps.DrawingTools(map);
        });

        Microsoft.Maps.Events.addHandler(map, 'click', function (e) {
                let point = new Microsoft.Maps.Point(e.getX(), e.getY());
                let loc = e.target.tryPixelToLocation(point);
                let location = new Microsoft.Maps.Location(loc.latitude, loc.longitude);
                this.setState({cordsPoint:location});
        }.bind(this));

        return map;
    }
}