import React from 'react';
import WeatherApp from '../components/WeatherApp/WeatherApp';

const WeatherPage: React.FC = () => {
  return (
    <div className="WeatherPage">
      <h1>Weather App</h1>
      <WeatherApp />
    </div>
  );
};

export default WeatherPage;