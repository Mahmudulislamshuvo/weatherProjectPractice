import Header from "./Components/header/Header";
import WeatherSection from "./Components/weatherSection/WeatherSection";
import useWeather from "./hooks/useWeather";

const App = () => {
  return (
    <>
      <div></div>
      <div className="bg-body font-[Roboto] text-light bg-no-repeat bg-cover h-screen grid ">
        <Header />
        <WeatherSection />
      </div>
    </>
  );
};

export default App;
