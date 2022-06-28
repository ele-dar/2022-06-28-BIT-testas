const body = document.querySelector('body');

// 1 UŽDUOTIS
const firstName = 'Elena';
const lastName = 'Darškuvienė';
const birthYear = 1990;
const thisYear = 2022;
const age = thisYear - birthYear;

const task1 = document.createElement('h3');
task1.innerText = '1 užduotis';
const answer1 = document.createElement('p');
answer1.innerText = `Aš esu ${firstName} ${lastName}. Man yra ${age} metai.`;
body.append(task1, answer1);

// 2 UŽDUOTIS
const randomNum1 = Math.floor(Math.random() * 9000) + 1000;
const randomNum2 = Math.floor(Math.random() * 9000) + 1000;
const randomNum3 = Math.floor(Math.random() * 9000) + 1000;
const randomNum4 = Math.floor(Math.random() * 9000) + 1000;
const randomNum5 = Math.floor(Math.random() * 9000) + 1000;
const randomNum6 = Math.floor(Math.random() * 9000) + 1000;

let unsortedString =
	randomNum1 + ' ' + randomNum2 + ' ' + randomNum3 + ' ' + randomNum4 + ' ' + randomNum5 + ' ' + randomNum6;

const findBigger = (x, y) => {
	if (x > y) {
		return x;
	} else {
		return y;
	}
};
const biggest = findBigger(
	randomNum6,
	findBigger(randomNum5, findBigger(randomNum4, findBigger(randomNum3, findBigger(randomNum1, randomNum2))))
);

// 3 UŽDUOTIS
const alphabet = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z'
];
const generateString = (length, exclude = '') => {
	let string = '';
	for (let i = 0; string.length < length; i++) {
		const randomIndex = Math.floor(Math.random() * alphabet.length);
		const newLetter = alphabet[randomIndex];
		if (!exclude.includes(newLetter)) {
			string = string.concat(newLetter);
		}
	}
	return string;
};
const randomString3 = generateString(10, 'ABCDEFGHIJKLMNO');

const task3 = document.createElement('h3');
task3.innerText = '3 užduotis';
const answer3 = document.createElement('p');
answer3.innerHTML = `Atsitiktinis stringas iš didžiųjų raidžių: ${randomString3}`;
body.append(task3, answer3);

// 4 UŽDUOTIS
let arr4 = [];
for (let i = 0; i < 200; i++) {
	let randomNumber = Math.floor(Math.random() * 4);
	if (randomNumber === 0) {
		arr4.push('A');
	} else if (randomNumber === 1) {
		arr4.push('B');
	} else if (randomNumber === 2) {
		arr4.push('C');
	} else {
		arr4.push('D');
	}
}
const letterCount = arr4.reduce((letter, count) => {
	letter[count] = (letter[count] || 0) + 1;
	return letter;
}, {});

const task4 = document.createElement('h3');
task4.innerText = '4 užduotis';
const answer4 = document.createElement('div');
answer4.innerHTML = `<p>Masyvas iš atsitiktinių A, B, C, D: ${arr4}</p>
                    <p>Jame yra: ${letterCount.A} A, ${letterCount.B} B, ${letterCount.C} C, ${letterCount.D} D raidės</p>`;
body.append(task4, answer4);

// 5 UŽDUOTIS
const arr5 = arr4.sort();

const task5 = document.createElement('h3');
task5.innerText = '5 užduotis';
const answer5 = document.createElement('p');
answer5.innerHTML = `Pagal abėcėlę išrūšiuotas 4 užduoties masyvas: ${arr5}`;
body.append(task5, answer5);

// 6 UŽDUOTIS
let arr6 = [];
const firstNumber = Math.floor(Math.random() * 21) + 5;
const secondNumber = Math.floor(Math.random() * 21) + 5;
arr6.push(firstNumber, secondNumber);
for (let i = 1; i < 9; i++) {
	let nextNumber = arr6[i] + arr6[i - 1];
	arr6.push(nextNumber);
}

const task6 = document.createElement('h3');
task6.innerText = '6 užduotis';
const answer6 = document.createElement('p');
answer6.innerHTML = `Skaičių masyvas, kur kiekvienas skaičius yra dviejų ankstesnių suma: ${arr6}`;
body.append(task6, answer6);

// 7 UŽDUOTIS
let arr7 = [];
let arr7primes = [];

const isPrime = (number) => {
	for (let i = 2; i < number - 1; i++) {
		if (number % i === 0) return false;
	}
	return true;
};

for (let i = 0; arr7.length < 50; i++) {
	const newNumber = Math.floor(Math.random() * 200) + 1;
	if (!arr7.includes(newNumber)) {
		arr7.push(newNumber);
		isPrime(newNumber) && arr7primes.push(newNumber);
	}
}

arr7primes.sort(function(a, b) {
	return a - b;
});
const string1 = arr7.join(' ');
const string2 = arr7primes.join(' ');

const task7 = document.createElement('h3');
task7.innerText = '7 užduotis';
const answer7 = document.createElement('div');
answer7.innerHTML = `<p>Stringas iš atsitiktinių, nesikartojančių skaičių: ${string1}</p>
                     <p>Stringas iš akstesnio stringo pirminių skaičių: ${string2}</p>`;
body.append(task7, answer7);

// 8 UŽDUOTIS
// kas yra klasė javascripte?

// 9 UŽDUOTIS
let bitcoinValues = {};
let key = 1;

// NEVEIKIA:
// const fetchValue = async () => {
// 	const response = await fetch('https://blockchain.info/tobtc?currency=EUR&value=1');
// 	const result = await response.json();
// 	bitcoinValues[key] = result;
// 	key++;
// 	console.log(bitcoinValues);
// 	console.log(key);
// };

// VEIKIA:
// setInterval(async function() {
// 	const response = await fetch('https://blockchain.info/tobtc?currency=EUR&value=1');
// 	const result = await response.json();
// 	bitcoinValues[key] = result;
// 	key++;
// 	console.log(bitcoinValues);
// 	console.log(key);
// }, 1000);
