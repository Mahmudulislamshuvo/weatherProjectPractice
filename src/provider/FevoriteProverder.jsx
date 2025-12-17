import { useLocalStorage } from "../hooks";
import { FavoriteContext } from "../context";

//   {
//     location: 'Tongi',
//     climate: 'Haze',
//     temperature: 26.98,
//     maxTemperature: 26.98,
//     minTemperature: 26.98,
//     humidity: 44,
//     cloudPercentage: 0,
//     wind: 1.54,
//     time: 1765961408,
//     longitude: 90.3774208,
//     latitude: 23.9730688
//   }

const FevoriteProverder = ({ children }) => {
  const [storedValue, setStoredValue] = useLocalStorage("fevorite", []);

  const addToFavorite = ({ lat, long, location }) => {
    setStoredValue((prev) => [
      ...prev,
      { latitude: lat, longitude: long, location },
    ]);
  };

  const removeFromFavorite = (location) => {
    setStoredValue((prev) => prev.filter((item) => item.location !== location));
  };

  return (
    <FavoriteContext.Provider
      value={{ addToFavorite, removeFromFavorite, storedValue }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FevoriteProverder;
