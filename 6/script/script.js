/*1 - url адрес*/
console.log("ПЕРВОЕ ЗАДАНИЕ")
let str = prompt('Введите строку')
    if (str) {
        const urlPattern = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}(:\d+)?(\/[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]*)?$/
        let isValid = urlPattern.test(str)
        console.log(isValid)
        alert(isValid ? "Супер!" : "Ошибка: некорректный URL")
    } else {
        alert("Вы не ввели строку(")
    }        

/*2 - корректность ввода назв переменной*/
console.log("ВТОРОЕ ЗАДАНИЕ")
let reg = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/
    let perem = prompt('Введите название переменной')
    if (perem && perem.trim() !== '') {
        let check = reg.test(perem)
        console.log(`Корректность: ${check ? "Да" : "Нет"}`)
        alert(check ? "Супер!" : "Ошибка: некорректное название переменной")
    } else {
        alert("Вы не ввели название переменной(")
    }

/*3 - буквы цифры*/
console.log("ТРЕТЬЕ ЗАДАНИЕ")
const usinput = prompt("Введите строку, состоящую только из букв и цифр:").trim()
const regex = /^[a-zA-Z0-9]+$/

if (!usinput) { 
    console.log("Строка пустая или содержит только пробелы")
} else if (regex.test(usinput)) {
    console.log("Строка состоит только из букв и цифр")
} else {
    console.log("Строка содержит недопустимые символы")
}

/*4 - без спецсимволов и цифр и длина не менее 10 симв*/
console.log("ЧЕТВЕРТОЕ ЗАДАНИЕ")
let stroka = prompt('Введите строку')
const no_special = /^[a-zA-Z]{10,}$/
let result = stroka.match(no_special)
if (result != null) {
    console.log('true')
} else {
    console.log('false')
}

/*5 - колво букв и цифр*/
console.log("ПЯТОЕ ЗАДАНИЕ")
let strk = prompt('Введите строку')
let strletters = strk.match(/[a-zA-Z]/g) || []
let kolvo_digital = strk.match(/[0-9]/g) || []
console.log('букв столько: ' + strletters.length + '   цифр столько: ' + kolvo_digital.length)
