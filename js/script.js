"use strict";

// #1 Напишіть функцію, яка приймає рядок
// і виводить його в консоль затримкою у 2 секунди.

/*const printMessage = text => console.log(text)

setTimeout(printMessage, 2000, "Hello world")*/

// #2 Створіть таймер, який відлічує час у
// зворотному напрямку від 10 до 0. Виведіть
// кожне число затримкою у 1 секунду.


/*const timeCountdown = (time) => {
	console.log(time--)
	return time
}

const customInterval = (func, interval, args) => {
	setTimeout(() => {
		if (args >= 0) {
			args = func(args)
			customInterval(func, interval, args)
		}
	}, 1000)
}

customInterval(timeCountdown, 1000, 10)*/

/*const timeCountdown = () => {
	let time = 10

	const decrement = () => {
		console.log(time--)
		if (time < 0)
			clearInterval(timerId)
	}

	const timerId = setInterval(decrement, 1000)
}

timeCountdown()*/


// #3 Створіть функцію, яка випадковим
// чином виводить одне з трьох повідомлень
// в консоль кожні 2 секунди.

/*const rng = max => Math.floor(Math.random() * max)

const printRandomMsg = () => {
	switch (rng(3)) {
		case 0:
			console.log("Hello world")
			break;
		case 1:
			console.log("random message")
			break;
		case 2:
			console.log("another random message")
			break;
	}
}

setInterval(printRandomMsg,2000)*/

// #4 Всі завдання зі статті: https://uk.javascript.info/settimeout-setinterval

// #4.1
// #4.1.1
/*const printNumbers = (from, to) => {
	const increment = () => {
		console.log(from++)

		if (from > to)
			clearInterval(intervalId)
	}

	const intervalId = setInterval(increment, 1000)
}

printNumbers(5, 10)*/

// #4.1.2

/*const printNumbers = (from, to) => {
	const increment = () => {
		console.log(from++)
	}

	const customInterval = (func, interval) => {
		const timeoutId = setTimeout(() => {
			func()

			if (from > to)
				clearTimeout(timeoutId)
			else
				customInterval(func, interval)

		}, interval)
	}

	customInterval(increment, 1000)
}
printNumbers(5, 10)*/