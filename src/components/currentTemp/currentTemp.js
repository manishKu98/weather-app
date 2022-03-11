import {Row, Col} from "react-bootstrap";

function CurrentTemp({weather: d}) {
    const { temp: {day}, weather, clouds } = d;
    const { description  } = weather[0];
    return(
       <Row className="text-center my-0" >
           <Col>
           <h1 className="display-1 m-0">{day}&deg;</h1>
           <p className="m-0">{description} / Clouds: {clouds}</p>
           </Col>
       </Row>
    )
}
export default CurrentTemp;



