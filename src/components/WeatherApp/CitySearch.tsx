import React, { useState, KeyboardEvent } from 'react';
import styles from '../../styles/Weather.module.css';

interface CitySearchProps {
  onSearch: (search: string) => void;
  loading: boolean;
}

const CitySearch: React.FC<CitySearchProps> = ({ onSearch, loading }) => {
  const [search, setSearch] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      onSearch(search);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && search.trim() && !loading) {
      onSearch(search);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm}>
      <input
        type="text"
        placeholder="Enter city name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={handleKeyPress}
        className={styles.searchInput}
      />
      <button type="submit" disabled={!search.trim() || loading}>
        Search Cities
      </button>
    </form>
  );
};

export default CitySearch;