import { Row, Col } from "react-bootstrap";

function MoreDetails({ weather, units }) {
    const { temp: { min, max }, sunrise, sunset, humidity, wind_speed, } = weather;
    const windSpeed = units === 'imperial' ? 'mph' : 'mps'; 
    const degreeUnit = units === 'imperial' ? 'F' : 'C';
    const sunriseHour = new Date(sunrise * 1000).getHours();
    const sunriseMinute = new Date(sunrise * 1000).getMinutes();
    const sunSetHour = new Date(sunset * 1000).getHours();
    const sunSetMinut = new Date(sunset * 1000).getMinutes();


    return (
        <Row className="w-75 text-center m-3">
            <Col>
                <div>
                    <p className="m-0 fw-bold">Sunrise</p>
                    <p className="m-0">{`${sunriseHour}:${sunriseMinute}`}</p>
                </div>
                <div>
                    <p className="m-0 fw-bold">Sunset</p>
                    <p className="m-0">{`${sunSetHour}:${sunSetMinut}`}</p>
                </div>
            </Col>
            <Col>
                <div>
                    <p className="m-0 fw-bold">High</p>
                    <p className="m-0">{max}&deg;{degreeUnit}</p>
                </div>
                <div>
                    <p className="m-0 fw-bold">Low</p>
                    <p className="m-0">{min}&deg;{degreeUnit}</p>
                </div>
            </Col>
            <Col>
                <div>
                    <p className="m-0 fw-bold">Wind Speed</p>
                    <p className="m-0">{wind_speed} {windSpeed}</p>
                </div>
                <div>
                    <p className="m-0 fw-bold">Humidity</p>
                    <p className="m-0">{humidity}</p>
                </div>
            </Col>


        </Row>
    )
}
export default MoreDetails;
