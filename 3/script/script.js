/*1*/

console.log("ФУНКЦИИ")
console.log("ПЕРВОЕ ЗАДАНИЕ")

let input = prompt("Каков ваш пол? М или Ж: ")
function polDefine(pol) {
    pol = pol.toUpperCase()
    if (pol == 'М') {
        return "Ваш пол мужской"
    } else if (pol == 'Ж') {
        return "Ваш пол женский"
    } else {
        return "Ваш пол не определён"
    }
}

console.log(polDefine(input))

/*2*/
console.log("ВТОРОЕ ЗАДАНИЕ")

let dayNumber = prompt("Введите число от 1 до 7: ")
function dayDefine(number) {
    switch (number) {
        case "1":
            return "Понедельник"
        case "2":
            return "Вторник"
        case "3":
            return "Среда"
        case "4":
            return "Четверг"
        case "5":
            return "Пятница"
        case "6":
            return "Суббота"
        case "7":
            return "Воскресенье"
        default:
            return "Недопустимый номер дня"
    }
}

console.log(dayDefine(dayNumber))

/*3*/
console.log("ТРЕТЬЕ ЗАДАНИЕ")

let number1 = parseInt(prompt("Введите первое число: "))
let number2 = parseInt(prompt("Введите второе число: "))
let number3 = parseInt(prompt("Введите третье число: "))

function findMin(a, b, c) {
    return Math.min(a, b, c)
}

function findMax(a, b, c) {
    return Math.max(a, b, c)
}

console.log("Минимум: " + findMin(number1, number2, dayNumber))
console.log("Максимум: " + findMax(number1, number2, dayNumber))

/*4*/
console.log("ФУНКЦИОНАЛЬНЫЕ ВЫРАЖЕНИЯ")
console.log("ЧЕТВЁРТОЕ ЗАДАНИЕ")

let a = prompt("Как вас зовут?: ")
let b = parseInt(prompt("Сколько вам лет?: "))

let Greetings = function(name, age) {
    if (typeof age == 'number' && !isNaN(age)) {
        if (age < 18) {
            console.log(`${name}, вы еще очень молоды!`)
        } else if (age >= 18 && age <= 50) {
            console.log(`${name}, добро пожаловать в личный кабинет!`)
        } else {
            console.log(`${name}, моё почтение!`)
        }
    } else {
        console.log("Укажите корректные данные!")
    }
}

console.log(Greetings(a, b))

/*5*/
console.log("ПЯТОЕ ЗАДАНИЕ")

let checkType = function(a) {
    return typeof a
}

console.log(checkType(54))
console.log(checkType("Привет"))
console.log(checkType(checkType))
console.log(checkType(true))

/*еще одно по стрелочным*/
console.log("СТРЕЛОЧНЫЕ")
let randomNumber = Math.floor(Math.random() * 100 % 20 + 10)

let num1 = randomNumber
let num2 = randomNumber

let question = `Сколько будет ${num1} + ${num2}?`
let answer = prompt(question)

if (parseInt(answer) === num1 + num2) {
    console.log("Правильно")
} else {
    console.log("Неправильно((")
}
