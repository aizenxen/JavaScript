/*1*/
console.log("ПЕРВОЕ ЗАДАНИЕ")
kk = new Array()
let summa = 0

for (let i = 0; i < 5; i++) {
    kk[i] = Math.floor(Math.random() * 40 - 20)
    console.log(kk[i])
}

let newAr = kk.filter((index) => index > 0 && index < 10)
let sum = newAr.reduce((acc, num) => acc + num, 0)
console.log(sum)

/*2*/
console.log("ВТОРОЕ ЗАДАНИЕ")
function check(num) {
    return num.every(index => index % 2 === 0) ? "Все числа четные" : "Есть нечетные числа"
}

numbers = new Array()
for (let i = 0; i < 2; i++) {
    numbers[i] = Math.floor(Math.random() * 40 - 20)
    console.log(numbers[i])
}
console.log(check(numbers))

/*3*/
console.log("ТРЕТЬЕ ЗАДАНИЕ")

function filter(nn) {
    return nn.filter(index => index % 5 === 0)
}

nns = new Array()
for (let i = 0; i < 20; i++) {
    nns[i] = Math.floor(Math.random() * 40 - 20)
    console.log(nns[i])
}
console.log(filter(nns))

/*4*/
console.log("ЧЕТВЕРТОЕ ЗАДАНИЕ")

function aver(ss) {
    let average = ss.reduce((sum, num) => sum + num, 0) / ss.length
    if (ss.length === 0) return 0
    return average.toFixed(1)
}

nums = new Array()
for (let i = 0; i < 3; i++) {
    nums[i] = Math.floor(Math.random() * 40 - 20)
    console.log(nums[i])
}
console.log(aver(nums))

/*5*/
console.log("ПЯТОЕ ЗАДАНИЕ")
let urls = ["ftp://example.com", "http://mywebsite.com", "http://testsite.org", "https://securepage.com"]
let newurls = urls.filter(url => url.startsWith("http://"))

console.log(newurls)

/*6*/
console.log("ШЕСТОЕ ЗАДАНИЕ")
let records = [
    { a: 11, b: 12, c: 13 },
    { a: 21, b: 22, c: 23 },
    { a: 24, b: 25, c: 26 }
]

let keysArray = []
let valuesArray = []

records.forEach(record => {
    keysArray.push(Object.keys(record))
    valuesArray.push(Object.values(record))
})

let totalSum = records.reduce((accum, record) => {
    return accum + Object.values(record).reduce((innerSum, value) => innerSum + value, 0)
}, 0)

console.log("Ключи:", keysArray)
console.log("Значения:", valuesArray)
console.log("Сумма элементов:", totalSum)

