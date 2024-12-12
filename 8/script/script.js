/*1*/
console.log("ПЕРВОЕ ЗАДАНИЕ")
function createLinkTovar(category){
    return function(artikul){
        return `https://aizenxenshop.ru/${category}/${artikul}`
    }
}

let categories=["pc", "monitors", "notebooks"]

let createPCLink=createLinkTovar(categories[0])
let createMonitorLink=createLinkTovar(categories[1])
let createNotebooksLink=createLinkTovar(categories[2])

console.log(createPCLink(1001))
console.log(createNotebooksLink(4004))
console.log(createMonitorLink(345))


/*2*/
let orders = [
    { fio: "Ivan", tovar: "phone", price: 10000, quantity: 2 },
    { fio: "Peter", tovar: "usb", price: 2300, quantity: 5 },
    { fio: "Mary", tovar: "connector", price: 100, quantity: 100 },
]

function showOrder(){
    let str = `Заказ покупателя ${this.fio} составил ${this.price * this.quantity}` 
    let p = document.createElement("p")
    p.textContent = str;
    document.body.append(p)
}

orders.forEach(elem => showOrder.call(elem))

document.body.append(document.createElement("br"))

/*3*/
let orderss = [
    { fio: "Ivan", tovar: "phone", price: 10000, quantity: 2 },
    { fio: "Peter", tovar: "usb", price: 2300, quantity: 5 },
    { fio: "Mary", tovar: "connector", price: 100, quantity: 100 },
]

   function showOrderss(action){
    let str = `Заказ покупателя ${this.fio} составил ${this.price * this.quantity * (100 - action) / 100}, скидка составила ${action}%`
    let p = document.createElement("p")
    p.textContent = str;
    document.body.append(p)
   }

   orderss.forEach(elem => showOrderss.call(elem, 0))
   document.body.append(document.createElement("br"))
   orderss.forEach(elem => showOrderss.call(elem, 10))

/*4*/
function Menu(...navList) {
    this.navList = navList
    this.wrapperA = function(...anchor) {
        return this.navList.map(function(elem, i) {
            let str = `<a href='${elem}'>${anchor[i]}</a>`
            return str
        })
    }
}

let mainMenu = new Menu("home.html", "services.html", "price.html", "about.html")
    console.log(mainMenu.wrapperA("домой", "услуги", "цены", "о нас"))

let footerMenu = new Menu("newPage.html", "checkPage.html", "seoPage.html")
    console.log(footerMenu.wrapperA("создание страниц", "чек страниц", "сеo страниц")) 