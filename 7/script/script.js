/*1*/
console.log("ПЕРВОЕ ЗАДАНИЕ")
function getDayOfWeek(date) {
    let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
    return days[date.getDay()]
  }
let input = prompt("Введите дату (дд.мм.гг)")
let [dd, mm, yy] = input.split('.').map(Number)

let today = new Date(yy, mm - 1, dd)
console.log(getDayOfWeek(today))  

/*2*/
console.log("ВТОРОЕ ЗАДАНИЕ")
function daysForNY(data) {
    let ny = new Date(data.getFullYear() + 1, 0, 1)
    return Math.floor((ny-data)/(1000*60*60*24))
  }
  let data = new Date()
  console.log(daysForNY(data))

/*3*/
console.log("ТРЕТЬЕ ЗАДАНИЕ")
function getWeekDays() {
    let dayss = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
    let todayr = new Date().getDay()
    let next = (todayr + 1) % 7
    let prev = (todayr - 1 + 7) % 7

    return {
    next: dayss[next],
    curr: dayss[todayr],
    prev: dayss[prev]
    }
}
console.log(getWeekDays())

/*4*/
console.log("ЧЕТВЕРТОЕ ЗАДАНИЕ")
function getTimeOfMS(milsec) 
{
    return{
      d:milsec/(1000*60*60*24),
      h:milsec/(1000*60*60),
      m:milsec/(1000*60),
      s:milsec/1000,
    }
}
console.log(getTimeOfMS(1234567890))

/*5*/
console.log("ПЯТОЕ ЗАДАНИЕ")
function calculateAge(birthDate){
    let currentDate = new Date()
    let years = currentDate.getFullYear() - birthDate.getFullYear()
    let months = currentDate.getMonth() - birthDate.getMonth()
    return `Возраст в годах: ${years}, в месяцах: ${years * 12 + months}, в днях: ${Math.floor(years * 365 + months * 30 + currentDate.getDate() - birthDate.getDate() + years / 4)}`
}

let userBirthDate = new Date(prompt("Введите вашу дату рождения гг.мм.дд"))
console.log(calculateAge(userBirthDate))

/*6*/
console.log("ШЕСТОЕ ЗАДАНИЕ")
function findBlackFridays(){
    let currentYear = new Date().getFullYear()
    let blackFridays = []

    for (let month = 0; month < 12; month++) {
        let checkDate = new Date(currentYear, month, 13)
        if (checkDate.getDay() === 5) {
            blackFridays.push(checkDate.toLocaleDateString("ru-RU"))
        }
    }
    return blackFridays
}
console.log(findBlackFridays())


/*7*/
console.log("СЕДЬМОЕ ЗАДАНИЕ")
function generateGreeting() {
    const currentHour = new Date().getHours() 

    if (currentHour >= 7 && currentHour < 11) {
        return "Доброе утро!"
    } else if (currentHour >= 11 && currentHour < 15) {
        return "Добрый день!"
    } else if (currentHour >= 15 && currentHour < 23) {
        return "Добрый вечер!"
    } else {
        return "Доброй ночи!"
    }
}
alert(generateGreeting())

/*8*/
console.log("ВОСЬМОЕ ЗАДАНИЕ")
let weekDays = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"]
let months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]

let specialDates = [
    { day: 1, month: 0, year: new Date().getFullYear() },
    { day: 25, month: 0, year: new Date().getFullYear() },
    { day: 23, month: 1, year: new Date().getFullYear() },
    { day: 8, month: 2, year: new Date().getFullYear() },
    { day: 9, month: 4, year: new Date().getFullYear() },
    { day: 1, month: 8, year: new Date().getFullYear() }
]

function determineWeekDay(specificDate) {
    return weekDays[specificDate.getDay()]
}

specialDates.forEach(function (event) {
    let eventDate = new Date(event.year, event.month, event.day)
    console.log(`${event.day} ${months[event.month]} ${event.year} отмечается в ${determineWeekDay(eventDate)}`)
})
