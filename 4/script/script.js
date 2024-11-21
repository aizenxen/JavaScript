

let inputString = prompt("Введите строку: ")
let result = ""

for (let i = 0; i < inputString.length; i += 2) {
    result += inputString[i]
}

console.log("Результат:", result)