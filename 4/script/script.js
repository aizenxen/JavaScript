/*1*/
console.log("ПЕРВОЕ ЗАДАНИЕ")
let messages = {
    'error': "Неверно",
    'success': "Правильно",
    'checkAns': function(userAns, correctAns) {
        if (userAns === correctAns) {
            console.log(this.success)
        } else {
            console.log(this.error)
        }
    }
}

let num1 = Math.floor(Math.random() * 40 - 20)
let num2 = Math.floor(Math.random() * 40 - 20)
let userAns = parseInt(prompt(`Вычислите ${num1} * ${num2}`), 10)
let correctAns = num1 * num2

messages.checkAns(userAns, correctAns)

/*2*/
document.getElementById("btn2").onclick = function() {
    let inputText = document.getElementById("txt2").value
    let str = ""

    for (let i = 1; i < inputText.length; i += 2) {
        str += inputText[i]
    }
    console.log("ВТОРОЕ ЗАДАНИЕ")
    console.log(str)
}

/*3*/
document.getElementById("btn3").onclick = function() {
    let inputText = document.getElementById("txt3").value
    let result = 1

    for (let i = 0; i < inputText.length; i++) {
        result *= parseInt(inputText[i], 10)
    }
    console.log("ТРЕТЬЕ ЗАДАНИЕ")
    console.log(result)
}

/*4*/
function reverse(number) {
    const isNegative = number < 0
    number = Math.abs(number)
    let reversed = 0

    while (number > 0) {
        const digit = number % 10
        reversed = reversed * 10 + digit
        number = Math.floor(number / 10)
    }
    return isNegative ? -reversed : reversed
}
document.getElementById("btn4").onclick = function() {
    let inputnum = parseInt(document.getElementById("txt4").value, 10)
    let reversednum = reverse(inputnum)
    console.log("ЧЕТВЁРТОЕ ЗАДАНИЕ")
    console.log(reversednum)
}

/*5*/
document.getElementById("btn5").onclick = function() {
    let inptext = document.getElementById("txt5").value
    let remove = parseInt(document.getElementById("txt6").value, 10)
    let modtext = inptext.slice(0, remove) + inptext.slice(remove + 1)

    console.log("ПЯТОЕ ЗАДАНИЕ")
    console.log(modtext)
}
