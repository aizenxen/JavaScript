/*1*/
console.log("ПЕРВОЕ ЗАДАНИЕ")

for (let i = 1; i <= 100; ++i){
    console.log(i)
}

/*2*/
console.log("ВТОРОЕ ЗАДАНИЕ")

for (let i = -100; i <= 0; i += 1){
    console.log(i)
}

/*3*/
console.log("ТРЕТЬЕ ЗАДАНИЕ")

for (let i = 0; i <= 100; i ++){
     if (i % 2 == 0){
        console.log(i)
    }
}

/*4*/
console.log("ЧЕТВЁРТОЕ ЗАДАНИЕ")

while (true) {
    start = parseInt(prompt("Введите начальное число:"))
    if (!isNaN(start)) {
        break
    } else {
        alert("Пожалуйста, введите корректное число.")
    }
}

while (true) {
    end = parseInt(prompt("Введите конечное число:"))
    if (!isNaN(end)) {
        break
    } else {
        alert("Пожалуйста, введите корректное число.")
    }
}


if (start > end) {
    [start, end] = [end, start]
}


for (let i = start; i <= end; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }
}

/*5*/
console.log("ПЯТОЕ ЗАДАНИЕ")

let continueTest = true

while (continueTest) {
    const operand1 = Math.floor(Math.random() * (10 - 2 + 1)) + 2
    const operand2 = Math.floor(Math.random() * (10 - 2 + 1)) + 2
    const correctAnswer = operand1 * operand2

    const userAnswer = parseInt(prompt(`Сколько будет ${operand1} * ${operand2}?`))

    if (!isNaN(userAnswer) && userAnswer == correctAnswer) {
        console.log("Правильно!")
    } else {
        console.log("Неправильно. Правильный ответ: " + correctAnswer)
    }

    const continuePrompt = prompt("Хотите продолжить тест? (Введите 'y' для продолжения)")
    continueTest = continuePrompt.toLowerCase() == "y"
}

