import pinSvg from "../../assets/pin.svg";
import cloudSvg from "../../assets/cloud.svg";
import hazeSvg from "../../assets/haze.svg";
import snowvg from "../../assets/icons/snow.svg";
import sunnySvg from "../../assets/icons/sunny.svg";
import rainySvg from "../../assets/rainy.svg";
import thunderSvg from "../../assets/thunder.svg";
import { useContext } from "react";
import { WeatherContext } from "../../context";

const WeatherMainInfo = () => {
  const { weatherData } = useContext(WeatherContext);

  if (!weatherData) return null;

  const { location, temperature, time, climate } = weatherData;

  // convert UNIX time → readable
  const formattedTime = new Date(time * 1000).toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  function getWeatherIcon(climate) {
    switch (climate) {
      case "Rain":
        return rainySvg;
      case "Clouds":
        return cloudSvg;
      case "Clear":
        return sunnySvg;
      case "Snow":
        return snowvg;
      case "Thunder":
        return thunderSvg;
      case "Fog":
        return hazeSvg;
      case "Haze":
        return hazeSvg;
      case "Mist":
        return hazeSvg;

      default:
        return sunnySvg;
    }
  }

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt={climate || "weather"} />

        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {Math.round(temperature)}°
          </h1>

          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pinSvg} alt="pin" />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>

      <p className="text-sm lg:text-lg">{formattedTime}</p>
    </div>
  );
};

export default WeatherMainInfo;
