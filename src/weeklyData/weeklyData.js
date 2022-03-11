import { week, ICON_URL } from '../config/constant';
import { Col, Form, Image} from "react-bootstrap";

function WeeklyData({d, current, setCurrent, units, index}) {
    const degreeUnit = units === 'imperial' ? 'F' : 'C';
    const { temp: {day}, dt, weather } = d; 
    const weekDay = new Date(dt * 1000).getDay();
    const currentWeekDay = week[weekDay];
    const {icon, description} = weather[0]
    
    return(
        <Col onClick={() => setCurrent(index)} className={`week-col mx-2 text-center ${index === current && 'hoverColor shadow'}` }    >
            <Form.Text className="d-block text-light">{currentWeekDay}</Form.Text>
            <Image className="d-block m-auto" src={ICON_URL(icon)} alt={description} />
            <Form.Text className="d-block text-light">{description}</Form.Text>
            <Form.Text className="d-block text-light">{day}&deg; {degreeUnit}</Form.Text>
        </Col>


    )
}
export default WeeklyData;
