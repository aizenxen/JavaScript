let tovarsObj=[
    {nameTovar:"Фитнес-браслет Mi Band 7",
        imgSrc:"img/1.png",
        corpus:"Черный",
        remen:"Черный",
        displaySize:"0.96\"",
        displayType:"OLED",
        bluetooth: true,
        OS:{
            os1:"Android 4.2",
            os2:"iOS 8",
        }
    },
    {nameTovar:"Смарт-часы DEXP 4",
        imgSrc:"img/2.png",
        corpus:"Черный",
        remen:"Черный",
        displaySize:"1.43\"",
        displayType:"AMOLED",
        bluetooth: true,
        OS:{
            os1:"Android 8.0",
            os2:"iOS 13",
        }
    },
    {nameTovar:"Часы Apple Watch 9",
        imgSrc:"img/3.png",
        corpus:"Черный",
        remen:"Черный",
        displaySize:"1.9\"",
        displayType:"OLED",
        bluetooth: true,
        OS:{
            os1:"iOS 17",
            os2:"??",
        }
    },
]

let cards = Array.from(document.querySelectorAll(".card"))
console.log(cards)

cards.forEach(function(elem,index) {
    elem.querySelector("img").src=`${tovarsObj[index].imgSrc}`
    elem.querySelector("h5").innerHTML=`<br>${tovarsObj[index].nameTovar}`
    let str=`<br>Корпус: ${tovarsObj[index].corpus}
    <br>Ремешок: ${tovarsObj[index].remen}
    <br>Размер дисплея: ${tovarsObj[index].displaySize}
    <br>Тип дисплея: ${tovarsObj[index].displayType}`
    if (tovarsObj[index].bluetooth) str+= "<br>Bluetooth: есть"
    else str += "<br>Bluetooth: нет"
    str += `<br>Операционные системы: ${tovarsObj[index].OS.os1}, ${tovarsObj[index].OS.os2}`
    elem.querySelector(".card-text").innerHTML = str
 })