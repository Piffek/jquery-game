'use strict';
document.addEventListener('DOMContentLoaded', function () {
	const cards = [
        'ciri.png',
        'iorweth.png',
        'ciri.png',
        'jaskier.png',
        'jaskier.png',
        'triss.png',
        'yen.png',
        'geralt.png',
        'triss.png',
        'iorweth.png',
        'yen.png',
        'geralt.png'
    ];


	var array = [];



	for (var i = 0; i <= 11; ++i) {
		array.push(cards[Math.floor(Math.random() * cards.length)]);

	};



	const folderWIthImage = '/img/';
	const c = [];
	const score = document.getElementById('score');
	let firstCard = false;
	let scoreExtend = 0;
	let firstCard_nr = 0;
	let pairs = 6;
	let lock = false;


	for (var i = 0; i <= 11; ++i) {
		c[i] = document.getElementById('card' + i);
	}


	c[0].addEventListener('click', function () {
		reverseCard(0, c[0])
	});
	c[1].addEventListener('click', function () {
		reverseCard(1, c[1])
	});
	c[2].addEventListener('click', function () {
		reverseCard(2, c[2])
	});
	c[3].addEventListener('click', function () {
		reverseCard(3, c[3])
	});
	c[4].addEventListener('click', function () {
		reverseCard(4, c[4])
	});
	c[5].addEventListener('click', function () {
		reverseCard(5, c[5])
	});
	c[6].addEventListener('click', function () {
		reverseCard(6, c[6])
	});
	c[7].addEventListener('click', function () {
		reverseCard(7, c[7])
	});
	c[8].addEventListener('click', function () {
		reverseCard(8, c[8])
	});
	c[9].addEventListener('click', function () {
		reverseCard(9, c[9])
	});
	c[10].addEventListener('click', function () {
		reverseCard(10, c[10])
	});
	c[11].addEventListener('click', function () {
		reverseCard(11, c[11])
	});

	function reverseCard(nr, cardID) {
		const image = folderWIthImage + array[nr];
		let opacityThisElement = cardID.style.opacity;

		if (opacityThisElement == '' && lock == false) {
			lock = true;
			cardID.style.backgroundImage = 'url(' + image + ')';
			cardID.style.border = '3px solid #e9b64a';
			if (firstCard && firstCard_nr !== nr) {

				if (array[firstCard_nr] === array[nr]) {
					setTimeout(function () {
						c[nr].style.opacity = 0;
						c[firstCard_nr].style.opacity = 0;
						lock = false;

						pairs--;
						if (pairs === 0) {
							document.getElementById('board').innerHTML = 'You win in round' + scoreExtend;
						}
					}, 750);

				} else {

					setTimeout(function () {
						c[nr].style.backgroundImage = 'url(/img/karta.png)';
						c[firstCard_nr].style.backgroundImage = 'url(/img/karta.png)';
						c[nr].style.border = '3px solid blue';
						c[firstCard_nr].style.border = '3px solid blue';
						lock = false;
					}, 1000);

				}

				score.innerHTML = 'Score: ' + ++scoreExtend;
				firstCard = false;

			} else {

				firstCard = true;
				firstCard_nr = nr;
				lock = false;
			}
		}

	}

});
