import React from 'react';
import { City } from '../../types/weather';
import styles from '../../styles/Weather.module.css';

interface CityListProps {
  cities: City[];
  onCitySelect: (lat: number, lon: number) => void;
}

const CityList: React.FC<CityListProps> = ({ cities, onCitySelect }) => {
  if (cities.length === 0) return null;

  return (
    <div className={styles.cityList}>
      <h2>Select a city:</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>
            <button 
              onClick={() => onCitySelect(city.lat, city.lon)}
              className={styles.cityButton}
            >
              {city.name}, {city.country}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityList;