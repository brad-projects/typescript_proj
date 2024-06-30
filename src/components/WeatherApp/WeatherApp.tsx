import React, { useState } from 'react';
import CitySearch from './CitySearch';
import CityList from './CityList';
import WeatherDisplay from './WeatherDisplay';
import { City, WeatherData } from '../../types/weather';
import { searchCities, fetchWeather } from '../../utils/api';
import styles from '../../styles/Weather.module.css';

const WeatherApp: React.FC = () => {
  const [cities, setCities] = useState<City[]>([]);
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleCitySearch = async (search: string) => {
    setLoading(true);
    setError(null);
    setCities([]);
    setWeather(null);
    try {
      const data = await searchCities(search);
      setCities(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleWeatherFetch = async (lat: number, lon: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeather(lat, lon);
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.weatherApp}>
      <CitySearch onSearch={handleCitySearch} loading={loading} />
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <CityList cities={cities} onCitySelect={handleWeatherFetch} />
      <WeatherDisplay weather={weather} />
    </div>
  );
};

export default WeatherApp;