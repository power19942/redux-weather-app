import axios from 'axios';
const key = 'e9633b16f0b50d2fa4395de723febbaa';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${key}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';
export function fetchWeather(data) {
    const url = `${ROOT_URL}&q=${data}`;
    const request = axios.get(url);
    return{
        type:FETCH_WEATHER,
        payload:request
    }
}