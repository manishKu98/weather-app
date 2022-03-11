import URL, { GET_LOC_URL } from './constant.js';

async function getWeatherData(lat, long, units) {
    const finalURL = `${URL}&lat=${lat}&lon=${long}&units=${units}`;
    try{
        const res = await fetch(finalURL);
        const weatherData = await res.json();
        return weatherData;  
    }
    catch(err){
        console.log(err);
    }
}

export async function getCityName(lat, lon) {
    const finalURL = `${GET_LOC_URL}&lat=${lat}&lon=${lon}`;
    try{
        const res = await fetch(finalURL);
        const cityNameData = await res.json();
        return cityNameData;
    }
    catch(err){
        console.log(err);
    }
}

export default getWeatherData;
