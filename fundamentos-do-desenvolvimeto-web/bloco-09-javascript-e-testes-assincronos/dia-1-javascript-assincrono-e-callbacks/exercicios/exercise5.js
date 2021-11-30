const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheith = (degreecelsius) => (degreecelsius * 9) / 5 + 32;

const temperatureInFarenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheith(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(
    `Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`
  );

const sendMarsTemperature = (success) => {
  const currentTemperature = getMarsTemperature();
  setTimeout(() => success(currentTemperature), messageDelay());
};

sendMarsTemperature(temperatureInFarenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo
