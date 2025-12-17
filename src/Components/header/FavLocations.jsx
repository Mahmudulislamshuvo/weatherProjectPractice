import { useContext } from "react";
import { FavoriteContext, LocationContext } from "../../context";

const FavLocationsModal = () => {
  const { storedValue } = useContext(FavoriteContext);
  const { setLocation } = useContext(LocationContext);

  return (
    <>
      <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
        <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
        <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
          {storedValue.length > 0 ? (
            storedValue?.map((item) => (
              <li key={item.location} className="hover:bg-gray-200">
                <a onClick={() => setLocation({ ...item })}>{item.location}</a>
              </li>
            ))
          ) : (
            <li className="px-4">No favourite locations added.</li>
          )}
        </ul>
      </div>
    </>
  );
};

export default FavLocationsModal;
