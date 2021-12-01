const fetchCrypto = async () => {
  const crypto = await fetch("https://api.coincap.io/v2/assets")
    .then((response) => response.json())
    .then((data) => data.data)
    .catch((erro) => console.log(`Erro ao acessa API: ${erro}`));

	return crypto;	
};

const setCrypto = async () => {
  const crypto = await fetchCrypto();

	const listCoins = document.getElementById('crypto');

	crypto.forEach(crypto => {
		const li = document.createElement('li');
		const priceUsd = Number(crypto.priceUsd);
		
		li.innerText = `${crypto.name} (${crypto.symbol}): ${priceUsd.toFixed(2)}`;

		listCoins.appendChild(li);
	});
};

window.onload = setCrypto;
