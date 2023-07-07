const productProfitArray = [
	{ name: 'Product A', profit: 100 },
	{ name: 'Product B', profit: -50 },
	{ name: 'Product C', profit: 200 },
	{ name: 'Product D', profit: 90 },
	{ name: 'Product E', profit: 50 },
];

const topProduct = (productProfitArray) => {
	if (productProfitArray.length === 0) {
		return 'No Data';
	}

	let maxProfit = -Infinity;
	let topProduct = '';

	productProfitArray.forEach((product) => {
		if (product.profit > maxProfit) {
			maxProfit = product.profit;
			topProduct = product.name;
		}
	});

	return topProduct;
};

const bottomProduct = (productProfitArray) => {
	if (productProfitArray.length === 0) {
		return 'No Data';
	}

	let minProfit = Infinity;
	let bottomProduct = '';

	productProfitArray.forEach((product) => {
		if (product.profit < minProfit) {
			minProfit = product.profit;
			bottomProduct = product.name;
		}
	});

	return bottomProduct;
};

const zeroProfitProduct = (productProfitArray) => {
	if (productProfitArray.length === 0) {
		return 'No Data';
	}

	let closestProfit = Infinity;
	let zeroProfitProduct = '';

	productProfitArray.forEach((product) => {
		const profit = Math.abs(product.profit);
		if (
			profit < Math.abs(closestProfit) ||
			(profit === closestProfit && product.profit > 0)
		) {
			closestProfit = product.profit;
			zeroProfitProduct = product.name;
		}
	});

	return zeroProfitProduct;
};

const topProductResult = topProduct(productProfitArray);
console.log('Top Product:', topProductResult);

const bottomProductResult = bottomProduct(productProfitArray);
console.log('Bottom Product:', bottomProductResult);

const zeroProfitProductResult = zeroProfitProduct(productProfitArray);
console.log('Product with Profit Closest to 0:', zeroProfitProductResult);
