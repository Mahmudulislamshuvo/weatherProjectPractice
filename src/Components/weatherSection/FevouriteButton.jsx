import { useContext } from "react";
import heart from "../../assets/heart.svg";
import readHeart from "../../assets/heart-red.svg";
import { FavoriteContext, WeatherContext } from "../../context";

const FavouriteButton = () => {
  // context to manage the favourite locations
  const { addToFavorite, removeFromFavorite, storedValue } =
    useContext(FavoriteContext);

  // context to get the current weather data
  const { weatherData } = useContext(WeatherContext);

  // destructure the necessary data from the weatherData
  const { latitude, longitude, location } = weatherData;

  // function to handle the click of the favourite button add and remove from favourite
  const handleFavouriteClick = () => {
    const found = storedValue.find((item) => item.location === location);

    if (!found) {
      addToFavorite({ lat: latitude, long: longitude, location });
    } else {
      removeFromFavorite(location);
    }
  };
  // Upgreation without useeffect here
  const isFavourite = storedValue.find((item) => item.location === location);

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavouriteClick}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>
            {isFavourite ? "Remove from Favourite" : "Add to Favourite"}
          </span>
          <img src={isFavourite ? readHeart : heart} alt="heart" />
        </button>
      </div>
    </div>
  );
};

export default FavouriteButton;
