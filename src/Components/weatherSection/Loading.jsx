const Loading = () => {
  return (
    <>
      {/* Parent Container is 'grid md:grid-cols-2'.
        We return two main DIVs inside a fragment so they occupy the left and right columns naturally.
      */}

      {/* --- LEFT COLUMN (Simulating WeatherMainInfo & FavouriteButton) --- */}
      <div className="flex flex-col justify-between h-full w-full pl-2 md:pl-0">
        {/* Top: Favourite Button Placeholder */}
        <div className="flex justify-end mb-6">
          <div className="w-8 h-8 rounded-full bg-white/5 relative overflow-hidden skeleton-shimmer"></div>
        </div>

        {/* Middle: Temperature, City & Icon */}
        <div className="flex flex-col gap-4">
          {/* Big Temperature Block */}
          <div className="h-24 w-40 md:h-28 md:w-52 bg-white/5 rounded-3xl relative overflow-hidden skeleton-shimmer"></div>

          {/* City Name & Icon Row */}
          <div className="flex items-center gap-3 mt-2">
            {/* Icon Circle */}
            <div className="h-10 w-10 md:h-12 md:w-12 bg-white/5 rounded-full relative overflow-hidden skeleton-shimmer"></div>
            {/* City Name Text */}
            <div className="h-6 w-32 md:w-40 bg-white/5 rounded-md relative overflow-hidden skeleton-shimmer"></div>
          </div>
        </div>

        {/* Bottom: Date/Time */}
        <div className="mt-8 md:mt-auto">
          <div className="h-4 w-48 bg-white/5 rounded relative overflow-hidden skeleton-shimmer"></div>
        </div>
      </div>

      {/* --- RIGHT COLUMN (Simulating WeatherDetails) --- */}
      <div className="flex flex-col justify-center h-full w-full p-2 md:p-6 mt-4 md:mt-0">
        {/* Header Title (e.g., 'WEATHER DETAILS') */}
        <div className="h-4 w-32 bg-white/5 rounded mb-8 relative overflow-hidden skeleton-shimmer"></div>

        {/* Details List (4 rows: Humidity, Wind, etc.) */}
        <div className="flex flex-col gap-5">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="flex justify-between items-center pb-3 border-b border-white/5 last:border-0"
            >
              {/* Label */}
              <div className="h-3 w-20 bg-white/5 rounded relative overflow-hidden skeleton-shimmer"></div>
              {/* Value */}
              <div className="h-3 w-12 bg-white/5 rounded relative overflow-hidden skeleton-shimmer"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Internal CSS for the Shimmer Animation.
        This creates a light gradient moving from left to right.
      */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .skeleton-shimmer::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.08) 50%,
            transparent 100%
          );
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </>
  );
};

export default Loading;
