/*1*/

    console.log("ПЕРВОЕ ЗАДАНИЕ")
    let number = prompt("Введите число");
    if (isNaN(number)) {
        document.querySelector(".num").innerHTML = "Это не число!";
    } else {
        document.querySelector(".num").innerHTML = "Это число!";
        
    /*2*/
        console.log("ВТОРОЕ ЗАДАНИЕ")
        if (number > 0){
            console.log(`Введенное число ${number} положительное`)
        } else if (number < 0){
            console.log(`Введенное число ${number} отрицательное`)
        } else if(number == 0){
            console.log(`Введенное число ${number} ноль`)
        }
    }

    /*3*/
    console.log("ТРЕТЬЕ ЗАДАНИЕ")
    let a = parseInt(prompt("Введите коэффициент a:"))
    let b = parseInt(prompt("Введите коэффициент b:"))
    let c = parseInt(prompt("Введите коэффициент c:"))

    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Пожалуйста, введите числовые значения для коэффициентов")
    } else if (a === 0) {
        console.log("Коэфф a равен нулю, это не явл квадратным уравнением, введите натуральные числа)");
    } else {
        let D = b ** 2 - 4 * a * c
        if (D > 0) {
            console.log("Уравнение имеет 2 корня")
            let x1 = (-b + Math.sqrt(D)) / (2 * a)
            let x2 = (-b - Math.sqrt(D)) / (2 * a)
            console.log(`Первый корень: x1 = ${x1}\nВторой корень: x2 = ${x2}`)
        } else if (D === 0) {
            console.log("Уравнение имеет 1 корень")
            let x = -b / (2 * a);
            console.log(`Корень: x = ${x}`)
        } else {
            console.log("Уравнение не имеет корней")
        }
    }

    /*4*/
    console.log("ЧЕТВЁРТОЕ ЗАДАНИЕ")
    let side1 = parseInt(prompt("Введите длину первой стороны:"))
    let side2 = parseInt(prompt("Введите длину второй стороны:"))
    let side3 = parseInt(prompt("Введите длину третьей стороны:"))

    if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 % 1 !== 0 || side2 % 1 !== 0 || side3 % 1 !== 0) {
        alert("Введите целые числа для длин сторон треугольника")
    } else {
        if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
            console.log("Эти длины могут быть сторонами треугольника")
        } else {
            console.log("Эти длины не могут быть сторонами треугольника. Проверьте, что сумма длин любых двух сторон больше длины третьей стороны")
        }
    }

    /*5*/
    console.log("ПЯТОЕ ЗАДАНИЕ")
    const num1 = parseFloat(prompt("Введите первое число:"))
    const num2 = parseFloat(prompt("Введите второе число:"))
    const num3 = parseFloat(prompt("Введите третье число:"))
    const num4 = parseFloat(prompt("Введите четвертое число:"))

    if (isNaN(num1) || isNaN(num2) || isNaN(num3) || isNaN(num4)) {
        alert("Это не число. Обновите страницу и введите число")
    } else {
        const method = parseInt(prompt("Выберите способ вычисления:\n1. С использованием библиотеки Math\n2. Без использования массивов"))

        switch (method) {
            case 1:
                let sum1 = Math.max(num1 + num2, num1 + num3, num1 + num4, num2 + num3, num2 + num4, num3 + num4)
                console.log(`Максимальная сумма в паре: ${sum1}`);
                break;

            case 2:
                let maxSum = num1 + num2;
                if (num1 + num3 > maxSum) {
                    maxSum = num1 + num3;
                }
                if (num1 + num4 > maxSum) {
                    maxSum = num1 + num4;
                }
                if (num2 + num3 > maxSum) {
                    maxSum = num2 + num3;
                }
                if (num2 + num4 > maxSum) {
                    maxSum = num2 + num4;
                }
                if (num3 + num4 > maxSum) {
                    maxSum = num3 + num4;
                }
                console.log("Максимальная сумма: " + maxSum)
                break

            default:
                alert("Выбран неверный метод. Обновите страницу и выберите 1 или 2")
        }
    }