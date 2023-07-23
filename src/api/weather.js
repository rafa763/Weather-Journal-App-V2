import express from "express";
import axios from "axios";

const server = express();

let GEO_URL = "http://api.openweathermap.org/geo/1.0/direct"
let BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

server.post("/", async (req, res) => {
    try {
        const { city, state, country } = req.body;
        const geo = new URLSearchParams({
            q: `${city},${state},${country}`,
            limit: 1,
            appid: process.env.WEATHER_API_KEY
        });
        const { data } = await axios.get(`${GEO_URL}?${geo}`);

        const query = new URLSearchParams({
            lat: data[0].lat,
            lon: data[0].lon,
            exclude: "minutely,hourly",
            units: "metric",
            appid: process.env.WEATHER_API_KEY
        });

        const { data: weatherData } = await axios.get(`${BASE_URL}?${query}`);
        res.status(200).send(weatherData.weather[0]);
    } catch (error) {
        throw error;
    }
});

export default server;