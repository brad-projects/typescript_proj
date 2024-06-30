export interface City {
    name: string;
    lat: number;
    lon: number;
    country: string;
  }
  
  export interface WeatherData {
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