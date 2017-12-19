const env = process.env.NODE_ENV;
const darkSkyApiKey = require(`../env/${env}.json`).darksky.apiKey;
const googleApiKey = require(`../env/${env}.json`).google.apiKey;

const apis = [
  {
    name: 'darkSkyWeather',
    url: `https://api.darksky.net/forecast/${darkSkyApiKey}/`
  },
  {
    name: 'google',
    url: `https://maps.googleapis.com/maps/api/geocode/json?`,
    apiKey: googleApiKey
  }
];
// example api call
// https://api.darksky.net/forecast/<apiKey>/37.8267,-122.4233
// https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY

exports.apis = apis;
