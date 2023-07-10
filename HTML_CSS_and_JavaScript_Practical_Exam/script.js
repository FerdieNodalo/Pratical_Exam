let banner = document.querySelector('.banner');
banner.style.display = 'none';

let headLine2 = document.getElementById('headLine2-img');
headLine2.style.display = 'none';

let subHeadLine = document.getElementById('subHeadLine-img');
subHeadLine.style.display = 'none';

let learnMore = document.getElementById('learnMore-img');
learnMore.style.display = 'none';

let logo = document.getElementById('logo-img');
logo.style.display = 'none';

let replay = document.getElementById('replay-img');
replay.style.display = 'none';

setTimeout(() => {
	banner.style.display = 'block';

	setTimeout(() => {
		let femaleImg = document.getElementById('female-img');
		femaleImg.style.display = 'none';

		setTimeout(() => {
			let headline1 = document.getElementById('headLine1-img');
			headline1.style.display = 'none';
		}, 1000);

		setTimeout(() => {
			let headline2 = document.getElementById('headLine2-img');
			headline2.style.display = 'block';
		}, 100);

		setTimeout(() => {
			let subHeadLine = document.getElementById('subHeadLine-img');
			subHeadLine.style.display = 'block';
		}, 1000);

		setTimeout(() => {
			let learnMore = document.getElementById('learnMore-img');
			learnMore.style.display = 'block';
		}, 2000);

		setTimeout(() => {
			let logo = document.getElementById('logo-img');
			logo.style.display = 'block';
		}, 3000);

		setTimeout(() => {
			let replay = document.getElementById('replay-img');
			replay.style.display = 'block';
			replay.addEventListener('click', () => {
				// Refresh only the banner by reloading the page
				banner.style.display = 'none';
				location.reload();
			});
		}, 4000);
	}, 1000);
}, 1000);

setTimeout(() => {
	banner.style.display = 'none';
}, 10000);
