import { City, WeatherData } from '../types/weather';

const API_KEY = import.meta.env.VITE_WEATHTER_API_KEY;
const GEOCODING_API_URL = 'https://api.openweathermap.org/geo/1.0/direct';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

export async function searchCities(search: string): Promise<City[]> {
  const response = await fetch(`${GEOCODING_API_URL}?q=${search}&limit=5&appid=${API_KEY}`);
  if (!response.ok) {
    throw new Error('Failed to fetch cities');
  }
  return response.json();
}

export async function fetchWeather(lat: number, lon: number): Promise<WeatherData> {
  const response = await fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
  if (!response.ok) {
    throw new Error('Failed to fetch weather data');
  }
  return response.json();
}
