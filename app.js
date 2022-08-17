console.clear();
const geoLocation = navigator.geolocation;

const getLocation = () => {
  if (geoLocation) {
    geoLocation.getCurrentPosition(showCurrentPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
};

const showCurrentPosition = (position) => {
  console.log("This is latitude: ", position.coords.latitude);
  console.log("This is longitude: ", position.coords.longitude);
};
