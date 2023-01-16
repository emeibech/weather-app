import { fetchData } from './clientLocation';

const getCurrentWeatherInfo = (location) => {
  const appID = 'a864b3057d366f0312e36cebd74c7077';

  const getWeatherData = async () => {
    try {
      const data = await fetchData(`https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${appID}`);
      return data;
    } catch (err) {
      return console.log(err);
    }
  };

  const getForecastData = async () => {
    try {
      const data = await fetchData(`https://api.openweathermap.org/data/2.5/forecast?q=${location}&APPID=${appID}`);
      return data;
    } catch (err) {
      return console.log(err);
    }
  };

  const getWeatherInfo = async () => {
    const data = await Promise.all([getWeatherData(), getForecastData()]);

    const [weatherData, forecastData] = data;

    if (weatherData.cod > 399 || forecastData.cod > 399) {
      return weatherData;
    }
    return {
      description: weatherData.weather[0].description,
      pop: forecastData.list[0].pop,
      humidity: weatherData.main.humidity,
      visibility: weatherData.visibility,
      temp: weatherData.main.temp,
      feelsLike: weatherData.main.feels_like,
      windSpeed: weatherData.wind.speed,
      cloudCover: weatherData.clouds.all,
      sunrise: weatherData.sys.sunrise,
      sunset: weatherData.sys.sunset,
      country: weatherData.sys.country,
      timezone: weatherData.timezone,
      city: weatherData.name,
      icon: weatherData.weather[0].icon,
    };
  };

  return getWeatherInfo();
};

export default getCurrentWeatherInfo;
