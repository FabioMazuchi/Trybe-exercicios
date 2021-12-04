const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9) / 5 + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(
    `Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`
  );

const handleError = (errorReasom) =>
  console.log(`Error geeting temperature: ${errorReasom}`);

const sendMarsTemperature = (error, success) => {
  const currentTemperature = getMarsTemperature();
  const aleatorio = Math.random() <= 0.6;
  setTimeout(() => {
    if (aleatorio) {
      success(currentTemperature);
    } else {
      error("Robot is busy!");
    }
  }, messageDelay());
};

sendMarsTemperature(handleError, temperatureInFahrenheit);