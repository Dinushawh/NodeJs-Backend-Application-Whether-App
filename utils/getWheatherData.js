const axios = require("axios");

async function getWheatherData(props) {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${props}&appid=${process.env.WHEATHER_API_KEY}`
  );
  console.log(response.data);
  return response.data;
}

module.exports = getWheatherData;
