
export const week = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const fullWeekName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const fullMonthName = ["January","February","March","April","May","June","July", "August","September","October","November","December"];

const API_KEY = '5af13dba358b55501404b84a27682a2f';

const URL = `https://api.openweathermap.org/data/2.5/onecall?exclude=hourly,minutely&appid=${API_KEY}`;

export const GET_LOC_URL = `https://api.openweathermap.org/geo/1.0/reverse?limit=5&appid=${API_KEY}`

export const ICON_URL = (iconCode) => `https://openweathermap.org/img/wn/${iconCode}.png`;

export default URL;