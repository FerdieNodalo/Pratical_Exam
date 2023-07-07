const dynastyReign = [
	{ name: 'San Dynasty', reign: 'MXLI' },
	{ name: 'Viloria Dynasty', reign: 'MCCCIIII' },
	{ name: 'Tan Dynasty', reign: 'MCCCXCVIII' },
	{ name: 'Bon Dynasty', reign: 'MCDXLV' },
	{ name: 'Maiko Dynasty', reign: 'MDCLXIV' },
	{ name: 'Paul Dynasty', reign: 'MCMXLIX' },
	{ name: 'Andre Dynasty', reign: 'MMMXICX' },
];

const romanNumerals = {
	M: 1000,
	D: 500,
	C: 100,
	L: 50,
	X: 10,
	V: 5,
	I: 1,
};

const convertYear = (romanNumeral) => {
	let year = 0;
	let remaining = romanNumeral;

	for (const numeral in romanNumerals) {
		while (remaining.startsWith(numeral)) {
			year += romanNumerals[numeral];
			remaining = remaining.slice(numeral.length);
		}
	}

	if (remaining !== '') {
		return 'Invalid';
	}

	return year;
};

const longestDynasty = (dynastyReign) => {
	if (dynastyReign.length === 0) {
		return 'No Data';
	}

	let longestDynasty = '';
	let longestDuration = 0;

	dynastyReign.forEach((dynasty) => {
		const startYear = convertYear(dynasty.reign);

		if (startYear === 'Invalid') {
			return;
		}

		const duration = startYear - 1000;

		if (duration > longestDuration) {
			longestDuration = duration;
			longestDynasty = dynasty.name;
		}
	});

	return longestDynasty;
};

console.log('Longest Reigning Dynasty:', longestDynasty(dynastyReign));
console.log('Year:', convertYear('MCCCIIII'));
