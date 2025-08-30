export const getWeather = ({ latitude, longitude }, APIkey) => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterWeatherData = (data) => {
  const result = {};
  result.city = data.name;
  result.temp = { F: Math.round(data.main.temp) };
  result.type = getWeatherType(result.temp.F);
  result.condition = data.weather[0].main;
  result.isDay = getIsDay(data);
  return result;
};

const getWeatherType = (temperature) => {
  if (temperature > 86) {
    return "hot";
  } else if (temperature >= 66 && temperature < 86) {
    return "warm";
  } else {
    return "cold";
  }
};

const getIsDay = (data) => {
  if (data.sys && data.sys.sunrise && data.sys.sunset) {
    const currentTime = Math.floor(Date.now() / 1000); // Current time in Unix timestamp
    return currentTime >= data.sys.sunrise && currentTime < data.sys.sunset;
  }

  if (data.weather && data.weather[0] && data.weather[0].icon) {
    const iconCode = data.weather[0].icon;
    return iconCode.endsWith("day");
  }

  return true;
};
