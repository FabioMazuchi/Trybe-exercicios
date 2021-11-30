const API_URL = "https://icanhazdadjoke.com/";

const fetchJoke = () => {
  const myOject = {
    method: "GET",
    headers: { Accept: "application/json" },
  };

  const res = fetch(API_URL, myOject)
    .then((response) => response.json())
    .then((data) => {
      const h2 = document.querySelector("#jokeContainer");
      h2.innerHTML = data.joke;
    });
};

window.onload = () => fetchJoke();
