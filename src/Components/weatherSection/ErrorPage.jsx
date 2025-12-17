import { useContext } from "react";
import { WeatherContext } from "../../context";

const ErrorPage = () => {
  const { fetchWeatherData } = useContext(WeatherContext);

  const handleRetry = () => {
    fetchWeatherData(28.6139, 77.209);
  };

  return (
    <div className="col-span-2 flex flex-col items-center justify-center text-center p-10 h-full min-h-[400px]">
      {/* Error Icon */}
      <div className="bg-red-500/10 p-6 rounded-full border border-red-500/20 mb-6 backdrop-blur-sm animate-pulse">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-red-400"
        >
          <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
          <line x1="12" y1="9" x2="12" y2="13"></line>
          <line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      </div>

      {/* Error Message */}
      <h2 className="text-3xl font-bold text-white mb-2 tracking-wide">
        Something Went Wrong
      </h2>
      <p className="text-gray-300 max-w-sm mb-8 text-sm md:text-base leading-relaxed">
        We couldn't fetch the weather data. Please check your internet
        connection or try searching for a valid city.
      </p>

      {/* Retry Button */}
      <button
        onClick={handleRetry}
        className="group relative px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-white/10 transition-all duration-300 flex items-center gap-3 overflow-hidden"
      >
        <span className="relative z-10 font-medium">Try Again</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative z-10 transition-transform duration-500 group-hover:rotate-180"
        >
          <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3" />
        </svg>

        {/* Button Hover Glow Effect */}
        <div className="absolute inset-0 bg-blue-500/20 blur-xl group-hover:bg-blue-500/30 transition-colors opacity-0 group-hover:opacity-100"></div>
      </button>
    </div>
  );
};

export default ErrorPage;
