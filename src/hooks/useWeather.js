import { useEffect, useState } from "react";

const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    maxTemperature: "",
    minTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    longitude: "",
    latitude: "",
  });
  const [loading, setLoading] = useState({
    state: false,
    message: "",
  });
  const [error, setError] = useState(null);

  const fetchWeatherData = async (lat, lon) => {
    try {
      setLoading((prev) => ({
        ...prev,
        state: true,
        message: "Fetching weather data...",
      }));

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
          import.meta.env.VITE_API
        }&units=metric`
      );

      if (!response.ok) {
        throw new Error(
          `Error fetching data: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();

      setWeatherData((prev) => ({
        ...prev,
        location: data?.name,
        climate: data?.weather?.[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        longitude: lon,
        latitude: lat,
      }));
    } catch (error) {
      setError(error);
    } finally {
      setLoading((prev) => ({
        ...prev,
        state: false,
        message: "",
      }));
    }
  };

  useEffect(() => {
    let renderCount = 1;
    console.log(`How many times it render: ${renderCount++}`);

    setLoading((prev) => ({
      ...prev,
      state: true,
      message: "Getting location...",
    }));
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherData(latitude, longitude);
    });
  }, []);

  return { weatherData, loading, error, fetchWeatherData };
};

export default useWeather;
