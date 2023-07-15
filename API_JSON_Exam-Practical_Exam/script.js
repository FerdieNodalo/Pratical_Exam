const fetchCryptocurrencyRates = async () => {
	fetch('https://api.coingecko.com/api/v3/exchange_rates')
		.then((response) => {
			if (!response.ok) {
				throw new Error('Failed to fetch cryptocurrency rates');
			} else {
				return response.json();
			}
		})
		.then((data) => {
			const { rates } = data;
			displayDataInHTML(rates);
		})
		.catch((error) => {
			console.error(error.message);
		});
};

fetchCryptocurrencyRates();

const displayDataInHTML = (data) => {
	for (let i = 1; i <= 4; i++) {
		let currency = Object.keys(data)[i - 1];
		let currencyData = data[currency];
		console.log(currencyData);

		let rateElement = document.querySelector(
			'#currency' + i + ' .rate_heading'
		);
		let nameElement = document.querySelector('#currency' + i + ' .crypto_name');
		let unitElement = document.querySelector('#currency' + i + ' .crypto_unit');

		rateElement.textContent = 'Rate: ' + currencyData.value;
		nameElement.textContent = 'Crypto name: ' + currencyData.name;
		unitElement.textContent = 'Crypto unit: ' + currencyData.unit;
	}
};
