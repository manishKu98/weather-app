import WeeklyData from "./weeklyData/weeklyData";
import getWeatherData from "./config/helper";
import { useEffect, useState } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import Location from "./components/location/location";
import FtoC from "./components/changeTemp/changeTemp";
import CurrentTemp from "./components/currentTemp/currentTemp";
import MoreDetails from "./components/moreDetails/moreDetails";


function App() {
  const [weather, setWeather] = useState([]);
  const [latLong, setLatLong] = useState({});
  const [current, setCurrent] = useState(0);
  const [units, setUnits] = useState('imperial');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      let lat = position.coords.latitude;
      let long = position.coords.longitude;
      setLatLong({ lat, long });
    });
  }, []);

  useEffect(() => {
    const { lat, long } = latLong;
    Object.keys(latLong).length && getWeatherData(lat, long, units)
      .then((res) => {
        setWeather(() => res.daily.filter((_, i) => i < 7));
      })
      .catch((err) => {
        console.log(err);
      })
  }, [latLong, units]);

  if (!weather.length) {
    return (<div>No Weather Data Found</div>)
  }
  const { lat, long } = latLong;
  return (
    <Container>
      <Row className='bg-image'>

        <Row className="m-3 d-flex justify-content-between">
          <Col>
          <Location datetime={weather[current]?.dt} lat={lat} lon={long} />
          </Col>
          <Col>
          <FtoC setUnits={setUnits} />
          </Col>
        </Row>

        <Row className='my-3'>
          <Col className='border-end'>
          <CurrentTemp weather={weather[current]} units={units} />
          </Col>
          <Col>
          <MoreDetails weather={weather[current]} units={units} />
          </Col>
        </Row>
      </Row>
      <Row className='mx-1'>
        {
          weather.map((d, i) => {
            return <WeeklyData key={d.dt} d={d} current={current} setCurrent={setCurrent} units={units} index={i} />
          })
        }
      </Row>
    </Container>
  )
}
export default App;

