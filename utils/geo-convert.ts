const NodeGeocoder = require("node-geocoder");

const geocoder = NodeGeocoder({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
});