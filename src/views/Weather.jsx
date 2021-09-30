import react from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "../styles/Weather.css"

import Header from "../components/Header";
import Loader from "../components/Loader";

const Weather = () => {

    const { city } = useParams();

    const [weather, setWeather] = useState();

    const fetchWeatherAPI = async () => {

        try {
            const response = await fetch (
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=24a72b5d54470ac4ea80745510b6d813`
            );
            // console.log(response)
            const result = await response.json();
            
            console.log(result)
            setWeather(result)
            
        } catch (error) {
            console.log(error)
        }
        
    
        
    };

    useEffect(()=> {
            fetchWeatherAPI();
        
    }, []);

    return (

        <>
        <Header/>
        {
            weather ? (
                <div className="main-info-weather">
                    <h2>{city} weather information</h2>
                    <h4><span>weather condition:</span> {weather.weather[0].description}</h4>
                    <div className="weather-info">
                        
                        <p><span>Temperature:</span></p>
                        <p><span>Temperature feels like:</span></p>
                        <p><span>Maximum temperature:</span></p>
                        <p><span>Minimun temperature:</span></p>
                    </div>
                    <div className="weather-info">
                        
                        <p>{weather.main.temp} K</p>
                        <p>{weather.main.feels_like} K</p>
                        <p>{weather.main.temp_max} K</p>
                        <p>{weather.main.temp_min} K</p>
                        
                    </div>
                    
                    <div className="weather-info">
                        
                        <p><span>Wind speed:</span></p>
                        <p><span>Wind direction:</span></p>
                        <p><span>Humidity:</span></p>
                        <p><span>Pressure:</span></p>
                        
                    </div>
                    <div className="weather-info">
                        
                        <p>{weather.wind.speed} m/s</p>
                        <p>{weather.wind.deg}°</p>
                        <p>{weather.main.humidity} %</p>
                        <p>{weather.main.pressure} hPa</p>
                        
                        

                    </div>
                </div>
               )
               : <Loader/>
                

        }
        </>     
    )
}

export default Weather;