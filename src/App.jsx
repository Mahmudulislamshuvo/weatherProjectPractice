import Header from "./Components/header/Header";
import WeatherSection from "./Components/weatherSection/WeatherSection";
import { WeatherProvider } from "./provider";

const App = () => {
  return (
    <>
      <WeatherProvider>
        <div className="bg-body font-[Roboto] text-light bg-[url('./assets/backgrounds/rainy-day.jpg')] bg-no-repeat bg-cover h-screen grid ">
          <Header />
          <WeatherSection />
        </div>
      </WeatherProvider>
    </>
  );
};

export default App;
