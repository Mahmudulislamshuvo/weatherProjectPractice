const data = [
  // --- BANGLADESH ---
  { location: "Dhaka", latitude: 23.8103, longitude: 90.4125 },
  { location: "Chittagong", latitude: 22.3569, longitude: 91.7832 },
  { location: "Sylhet", latitude: 24.8949, longitude: 91.8687 },
  { location: "Rajshahi", latitude: 24.3636, longitude: 88.6241 },
  { location: "Khulna", latitude: 22.8456, longitude: 89.5403 },
  { location: "Barisal", latitude: 22.701, longitude: 90.3535 },
  { location: "Rangpur", latitude: 25.7439, longitude: 89.2752 },
  { location: "Mymensingh", latitude: 24.7471, longitude: 90.4203 },
  { location: "Comilla", latitude: 23.4607, longitude: 91.1809 },
  { location: "Cox's Bazar", latitude: 21.4272, longitude: 92.0058 },
  { location: "Jessore", latitude: 23.1634, longitude: 89.2182 },
  { location: "Bogura", latitude: 24.8481, longitude: 89.373 },
  { location: "Pabna", latitude: 24.0063, longitude: 89.2372 },
  { location: "Feni", latitude: 23.0186, longitude: 91.3966 },
  { location: "Narayanganj", latitude: 23.6238, longitude: 90.5 },
  { location: "Gazipur", latitude: 24.0023, longitude: 90.4264 },

  // --- INDIA ---
  { location: "Kolkata", latitude: 22.5726, longitude: 88.3639 },
  { location: "Delhi", latitude: 28.7041, longitude: 77.1025 },
  { location: "Mumbai", latitude: 19.076, longitude: 72.8777 },
  { location: "Chennai", latitude: 13.0827, longitude: 80.2707 },
  { location: "Bangalore", latitude: 12.9716, longitude: 77.5946 },
  { location: "Hyderabad", latitude: 17.385, longitude: 78.4867 },
  { location: "Ahmedabad", latitude: 23.0225, longitude: 72.5714 },
  { location: "Pune", latitude: 18.5204, longitude: 73.8567 },
  { location: "Jaipur", latitude: 26.9124, longitude: 75.7873 },
  { location: "Lucknow", latitude: 26.8467, longitude: 80.9462 },
  { location: "Patna", latitude: 25.5941, longitude: 85.1376 },
  { location: "Agartala", latitude: 23.8315, longitude: 91.2868 },
  { location: "Guwahati", latitude: 26.1445, longitude: 91.7362 },
  { location: "Darjeeling", latitude: 27.041, longitude: 88.2663 },
  { location: "Srinagar", latitude: 34.0837, longitude: 74.7973 },
  { location: "Goa", latitude: 15.2993, longitude: 74.124 },

  // --- NEIGHBORS (South Asia) ---
  { location: "Karachi", latitude: 24.8607, longitude: 67.0011 },
  { location: "Lahore", latitude: 31.5204, longitude: 74.3587 },
  { location: "Islamabad", latitude: 33.6844, longitude: 73.0479 },
  { location: "Kathmandu", latitude: 27.7172, longitude: 85.324 },
  { location: "Colombo", latitude: 6.9271, longitude: 79.8612 },
  { location: "Thimphu", latitude: 27.4728, longitude: 89.6393 },
  { location: "Yangon", latitude: 16.8409, longitude: 96.1735 },
  { location: "Male", latitude: 4.1755, longitude: 73.5093 },

  // --- MIDDLE EAST & ASIA ---
  { location: "Dubai", latitude: 25.2048, longitude: 55.2708 },
  { location: "Riyadh", latitude: 24.7136, longitude: 46.6753 },
  { location: "Doha", latitude: 25.2854, longitude: 51.531 },
  { location: "Singapore", latitude: 1.3521, longitude: 103.8198 },
  { location: "Bangkok", latitude: 13.7563, longitude: 100.5018 },
  { location: "Kuala Lumpur", latitude: 3.139, longitude: 101.6869 },
  { location: "Tokyo", latitude: 35.6762, longitude: 139.6503 },
  { location: "Beijing", latitude: 39.9042, longitude: 116.4074 },
  { location: "Shanghai", latitude: 31.2304, longitude: 121.4737 },
  { location: "Seoul", latitude: 37.5665, longitude: 126.978 },
  { location: "Jakarta", latitude: -6.2088, longitude: 106.8456 },
  { location: "Hong Kong", latitude: 22.3193, longitude: 114.1694 },

  // --- EUROPE ---
  { location: "London", latitude: 51.5074, longitude: -0.1278 },
  { location: "Paris", latitude: 48.8566, longitude: 2.3522 },
  { location: "Berlin", latitude: 52.52, longitude: 13.405 },
  { location: "Madrid", latitude: 40.4168, longitude: -3.7038 },
  { location: "Rome", latitude: 41.9028, longitude: 12.4964 },
  { location: "Amsterdam", latitude: 52.3676, longitude: 4.9041 },
  { location: "Moscow", latitude: 55.7558, longitude: 37.6173 },
  { location: "Istanbul", latitude: 41.0082, longitude: 28.9784 },
  { location: "Zurich", latitude: 47.3769, longitude: 8.5417 },

  // --- NORTH AMERICA ---
  { location: "New York", latitude: 40.7128, longitude: -74.006 },
  { location: "Los Angeles", latitude: 34.0522, longitude: -118.2437 },
  { location: "Toronto", latitude: 43.6532, longitude: -79.3832 },
  { location: "Vancouver", latitude: 49.2827, longitude: -123.1207 },
  { location: "Chicago", latitude: 41.8781, longitude: -87.6298 },
  { location: "San Francisco", latitude: 37.7749, longitude: -122.4194 },
  { location: "Mexico City", latitude: 19.4326, longitude: -99.1332 },

  // --- SOUTH AMERICA ---
  { location: "São Paulo", latitude: -23.5505, longitude: -46.6333 },
  { location: "Buenos Aires", latitude: -34.6037, longitude: -58.3816 },
  { location: "Rio de Janeiro", latitude: -22.9068, longitude: -43.1729 },

  // --- AUSTRALIA & AFRICA ---
  { location: "Sydney", latitude: -33.8688, longitude: 151.2093 },
  { location: "Melbourne", latitude: -37.8136, longitude: 144.9631 },
  { location: "Cairo", latitude: 30.0444, longitude: 31.2357 },
  { location: "Cape Town", latitude: -33.9249, longitude: 18.4241 },
  { location: "Johannesburg", latitude: -26.2041, longitude: 28.0473 },
  { location: "Lagos", latitude: 6.5244, longitude: 3.3792 },
];

function getLocations() {
  return data;
}

function getLocationByName(location) {
  if (!location) return null;

  // Case-insensitive search for better UX
  const filtered = data.filter(
    (item) => item.location.toLowerCase() === location.toLowerCase()
  );

  if (filtered.length > 0) {
    return filtered[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
}

export { getLocationByName, getLocations };
