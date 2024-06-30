import React from 'react';
import { WeatherData } from '../../types/weather';
import styles from '../../styles/Weather.module.css';

interface WeatherDisplayProps {
  weather: WeatherData | null;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className={styles.weatherDisplay}>
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>{weather.weather[0].description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt="Weather icon"
        className={styles.weatherIcon}
      />
    </div>
  );
};

export default WeatherDisplay;