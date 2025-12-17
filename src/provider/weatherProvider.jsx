import { WeatherContext } from "../context";
import useWeather from "../hooks/useWeather";

const WeatherProvider = ({ children }) => {
  const { weatherData, error, loading, fetchWeatherData } = useWeather();

  return (
    <WeatherContext.Provider
      value={{ weatherData, error, loading, fetchWeatherData }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
