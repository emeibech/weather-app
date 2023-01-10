const getCurrentWeatherInfo = (location) => {
  const currentWeatherInfo = {};
  const appID = 'a864b3057d366f0312e36cebd74c7077';
  const rawURL = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&appid=${appID}`;

  const fetchData = async (url) => {
    try {
      const response = await fetch(url, { mode: 'cors' });
      const data = await response.json();
      return data;
    } catch (err) {
      return console.log(err);
    }
  };

  const geocodeURL = async (type) => {
    try {
      const data = await fetchData(rawURL);
      const geocodedURL = `https://api.openweathermap.org/data/2.5/${type}?lat=${data[0].lat}&lon=${data[0].lon}&cnt=&appid=${appID}`;
      return geocodedURL;
    } catch (err) {
      return console.log(err);
    }
  };

  const getWeatherData = async () => {
    try {
      const url = await geocodeURL('weather');
      const data = await fetchData(url);
      return data;
    } catch (err) {
      return console.log(err);
    }
  };

  const getForecastData = async () => {
    try {
      const url = await geocodeURL('forecast');
      const data = await fetchData(url);
      return data;
    } catch (err) {
      return console.log(err);
    }
  };

  const getWeatherInfo = async () => {
    const data = await Promise.all([getWeatherData(), getForecastData()]);

    const [weatherData, forecastData] = data;

    currentWeatherInfo.description = weatherData.weather[0].description;
    currentWeatherInfo.pop = forecastData.list[0].pop;
    currentWeatherInfo.humidity = weatherData.main.humidity;
    currentWeatherInfo.visibility = weatherData.visibility;
    currentWeatherInfo.temp = weatherData.main.temp;
    currentWeatherInfo.feelsLike = weatherData.main.feels_like;
    currentWeatherInfo.tempMin = weatherData.main.temp_min;
    currentWeatherInfo.tempMax = weatherData.main.temp_max;
    currentWeatherInfo.windSpeed = weatherData.wind.speed;
    currentWeatherInfo.cloudCover = weatherData.clouds.all;
    currentWeatherInfo.sunrise = weatherData.sys.sunrise;
    currentWeatherInfo.sunset = weatherData.sys.sunset;
    currentWeatherInfo.country = weatherData.sys.country;
  };

  getWeatherInfo();

  console.log(currentWeatherInfo);
  return currentWeatherInfo;
};

export default getCurrentWeatherInfo;
