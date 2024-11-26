// Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах  1, 0, -3.

// let value;
// value = prompt("Enter number");
// if (value > 0) {
// 	console.log(true);
// }
// else {
// 	console.log(false);
// };


// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах  'test', "qwerty", true

// let text;
// text = prompt("Enter something");
// if (text === "test") {
// 	console.log(true);
// }
// else if (text === null) {
// 	console.log("User canceled input");
// }
// else {
// 	console.log(false);
// };

// Якщо змінна більше 10 -  відніміть 5,
//менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах  1, 10, 13.

// let number;
// let sum;
// number = Number(prompt("Enter number"));
// if (number >= 10) {
// 	sum = number - 5;
// }
// else {
// 	sum = number + 5;
// }
// console.log(sum);

//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// let month;
// month = Number(prompt("Enter number from 1 to 12"));
// switch (month) {
// 	case 1:
// 		console.log("January");
// 		break;
// 	case 2:
// 		console.log("February");
// 		break;
// 	case 3:
// 		console.log("March");
// 		break;
// 	case 4:
// 		console.log("April");
// 		break;
// 	case 5:
// 		console.log("May");
// 		break;
// 	case 6:
// 		console.log("June");
// 		break;
// 	case 7:
// 		console.log("July");
// 		break;
// 	case 8:
// 		console.log("August");
// 		break;
// 	case 9:
// 		console.log("September");
// 		break;
// 	case 10:
// 		console.log("October");
// 		break;
// 	case 11:
// 		console.log("November");
// 		break;
// 	case 12:
// 		console.log("December");
// 		break;
// 	default:
// 		console.log("You entered incorrect value!");
// 		break;
// }

//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу суму цих чисел

// let number = Number(prompt("Enter a 3-digit number"));

// if (isNaN(number) || number < 100 || number > 999) {
//     console.log(`${number} не є тризначне`);
// } else {
//     let hundreds = Math.floor(number / 100); // Отримуємо сотні
//     let tens = Math.floor((number % 100) / 10); // Отримуємо десятки
//     let ones = number % 10; // Отримуємо одиниці

//     let sum = hundreds + tens + ones; // Сума цифр
//     console.log(`Сума цифр числа ${number} дорівнює ${sum}`);
// }
