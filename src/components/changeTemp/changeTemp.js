import { Col } from 'react-bootstrap';
import './style.css';

function FtoC({ setUnits }) {
    const toggleUnit = () => {
        setUnits((prev) => prev === 'imperial' ? 'metric' : 'imperial');
    }
    return (
        <Col className="toggleF-C">
            <div className="button r" id="button-1">
                <input onChange={toggleUnit} type="checkbox" className="checkbox" />
                <div className="knobs"></div>
                <div className="layer"></div>
            </div>
        </Col>
    )
}
export default FtoC;