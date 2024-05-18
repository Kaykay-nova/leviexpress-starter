import './style.css'


export const BusStop = ({ name, station, time}) => {

  return (
    <div className="bus-stop">
      <div className="bus-stop__bullet"></div>
      <div className="bus-stop__place">
        <div className="bus-stop__city">Město: {name}</div>
        <div className="bus-stop__station">Zastávka: {station}</div>
      </div>
      <div className="bus-stop__departure">Čas: {time}</div>
    </div>
  );
};
