import { BusStop } from '../BusStop';
import './style.css';


export const JourneyDetail = ( {journey} ) => {
  
  const busStopList = journey.stops.map((stop) =>(
    <BusStop key={stop.code} name={stop.name} station={stop.station} time={stop.time} />
  ))

  return (
    <div className="journey-detail container">
      <h3>Podrobnosti cesty</h3>
      <div className="stops">
          {busStopList}
      </div>
    </div>
  );
};




