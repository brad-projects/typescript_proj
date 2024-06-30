;import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import WeatherPage from './pages/WeatherPage';
import EditorPage from './pages/EditorPage';
import './styles/global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <div className="container">
          <Routes>
            <Route path="/" element={<WeatherPage />} />
            <Route path="/editor" element={<EditorPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;