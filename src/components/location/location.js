import { useEffect, useState } from 'react';
import Timer from '../timer/timer';
import {Col} from 'react-bootstrap'; 
import { fullWeekName, fullMonthName } from "../../config/constant";
import { getCityName } from '../../config/helper';

const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});

function Location({ datetime, lat, lon }) {
    const [cityName, setCityName] = useState({})
    const dayIndex = new Date(datetime * 1000).getDay();
    const monthIndex = new Date(datetime * 1000).getMonth();
    const monthDate = new Date(datetime * 1000).getDate();
    
    useEffect(() => {
        getCityName(lat, lon)
            .then((d) => {
                setCityName({ name: d[0]?.name, country: d[0]?.country });
            })
            .catch((err) => {
                console.log('Error in getting city name', err);
            });
    }, [lat, lon]);
    const { name = '', country = '' } = cityName;
    return(
        <Col>
            <p className="text-dark h3"><i className='fas fa-map-marker-alt' style={{ fontSize: '25px' }} />
                {` ${name}, ${country && regionNames.of(country)}`}
            </p>
            <p className="text-dark lh-base h5">
                {fullWeekName[dayIndex]}, {monthDate} {fullMonthName[monthIndex]} <Timer className="text-dark" />
            </p>        
        </Col>
    )
}
export default Location;
