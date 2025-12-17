import { useContext, useEffect, useState } from "react";
import Header from "./Components/header/Header";
import WeatherSection from "./Components/weatherSection/WeatherSection";
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";
import { WeatherContext } from "./context";

const Page = () => {
  const { weatherData } = useContext(WeatherContext);

  function getBackgroundImage(climate) {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatterdCloudsImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      default:
        return ClearSkyImage;
    }
  }

  const BgImage = getBackgroundImage(weatherData.climate);

  //   useEffect(() => {
  //     const bgImage = getBackgroundImage(weatherData.climate);
  //     setClimateImage(bgImage);
  //   }, [weatherData.climate]);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${BgImage})` }}
        className="bg-body font-[Roboto] text-light bg-no-repeat bg-cover h-screen grid "
      >
        <Header />
        <WeatherSection />
      </div>
    </div>
  );
};

export default Page;
