import { useState } from "react";

interface City {
    name: string;
    lat: number;
    lon: number;
    country: string;
}

interface WeatherData {
    main: {
        temp: number;
        humidity: number;
    };

    weather: Array<{
        description: string;
        icon: string;
    }>;

    name: string;
}

const API_KEY = import.meta.env.VITE_WEATHTER_API_KEY;
const GEOCODING_API_URL = 'https://api.openweathermap.org/geo/1.0/direct';
const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function App() {
    const [search, setSearch] = useState<string>('');
    const [cities, setCities] = useState<City[]>([]);
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const searchCities = async () => {
        setLoading(true);
        setError(null);
        setCities([]);
        setWeather(null);
        try {
            const response = await fetch(`${GEOCODING_API_URL}?q=${search}&limit=5&appid=${API_KEY}`);
            if (!response.ok) {
                throw new Error('Failed to fetch cities');
            }
            const data: City[] = await response.json();
            setCities(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    const fetchWeather = async (lat: number, lon: number) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`${WEATHER_API_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data: WeatherData = await response.json();
            setWeather(data);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="App">
            <h1>Weather App</h1>
            <input
                type="text"
                placeholder="Enter city name"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchCities} disabled={!search || loading}>
                Search Cities
            </button>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {cities.length > 0 && (
                <div className="city-list">
                    <h2>Select a city:</h2>
                    <ul>
                        {cities.map((city, index) => (
                            <li key={index}>
                                <button onClick={() => fetchWeather(city.lat, city.lon)}>
                                    {city.name}, {city.country}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            {weather && (
                <div>
                    <h2>
                        <h2>{weather.name}</h2>
                    </h2>
                    <p>Temperature: {weather.main.temp}°C</p>
                    <p>Humidity: {weather.main.humidity}%</p>
                    <p>{weather.weather[0].description}</p>
                    <img
                        src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                        alt={"Weather icon"}
                    />
                </div>
            )}
        </div>
    )
}

export default App;