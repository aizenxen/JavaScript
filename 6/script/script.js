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

/*3 - мин и макс*/
console.log("ТРЕТЬЕ ЗАДАНИЕ")
function find_max(a, b, c) {
    return Math.max(a, b, c);
}
function find_min(a, b, c) {
    return Math.min(a, b, c);
}
let a = parseInt(prompt('Введите первое число'))
let b = parseInt(prompt('Введите второе число'))
let c = parseInt(prompt('Введите еще одно число'))

if (isNaN(a)) {
    alert('Первое число не явл числом')
} else if (isNaN(b)) {
    alert('Второе число не явл числом')
} else if (isNaN(c)) {
    alert('Третье число не явл числом')
} else {
    alert('Все числа корректны, едем дальше')

    let chislo = prompt('Введите 1, чтобы найти макс число, если мин - введите 2')
    switch (chislo) {
        case '1':
            alert(find_max(a, b, c))
            break
        case '2':
            alert(find_min(a, b, c))
            break
        default:
            alert('Введите 1 или 2')
    }
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
let strk = prompt('введите строку')
let strletters = strk.match(/[a-zA-Z]/g) || []
let kolvo_digital = strk.match(/[0-9]/g) || []
console.log('букв столько: ' + strletters.length + '   цифр столько: ' + kolvo_digital.length)
