import heart from "../../assets/heart.svg";

const FavButton = ({ setFevLocationToggle }) => {
  return (
    <button onClick={() => setFevLocationToggle((prev) => !prev)}>
      <div class="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
        <img src={heart} alt="heartSvg" />
        <span>Favourite Locations</span>
      </div>
    </button>
  );
};

export default FavButton;
