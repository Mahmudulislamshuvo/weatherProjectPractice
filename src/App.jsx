import Page from "./Page";
import {
  FevoriteProverder,
  LocationProvider,
  WeatherProvider,
} from "./provider";

const App = () => {
  return (
    <>
      <LocationProvider>
        <WeatherProvider>
          <FevoriteProverder>
            <Page />
          </FevoriteProverder>
        </WeatherProvider>
      </LocationProvider>
    </>
  );
};

export default App;
