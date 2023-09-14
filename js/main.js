// вывод информации
console.log("1111")
alert("dfdfff")
document.write("<h1>text</h1>")
// Встраивание выражений
document.write(`<h1>text ${12+5}</h1>`)

// Переменные
// let создает ( ОбЪявляет) переменную с именем
let age
// Присвоение
age = "12 лет"

// console.log - вывод переменной
console.log(age)

// строки заключаются в кавычки
// цифры-  без кавычек

let time
age = 12
console.log(age)

// Присвоение переменной со значением в одну строку

let one = 13
console.log(one)

let two = 2023 - 1997
console.log(two)

let cost = 2000 - 100*2
document.write(`Цена: ${2000- 200}`)

let cost2 = 2000 - 100*2
document.write(`Цена: ${cost2}`)

let currentYear = 2023  
// значение переменной currentYear

let age1 = currentYear - 2000 
let age2 = currentYear - 1997
let age3 = currentYear - 1980
// значение переменной age1/age2/age3

document.write(`<p>Возраст:${age1} </p>`)
document.write(`<p>Возраст: ${age2} </p>`)
document.write(`<p>Возраст: ${age3} </p>`)

{/* <p> - параграф  используем для начала с новой строки  */}



// Пример 

// document.write - вывод в сам документ

document.write("<h1>Список пользователей</h1>")
let userName1 = "Оля"
let userAge1 = 2023-1998
document.write(`<p><strong>${userName1}</strong>, возраст:${userAge1}</p>`)

// только ОБРАТНЫЕ КАВЫЧКИ позволяют встраивать выражения или переменные!!!!!!!!!!!!!!!!!!!!!!

let userName2 = "Саша"
let userAge2 = 2023-1999
document.write(`<p><strong>${userName2}</strong>, возраст:${userAge2}</p>`)

let userName3 = "Павел"
let userAge3 = 2023-2001
document.write(`<p><strong>${userName3}</strong>, возраст:${userAge3}</p>`)

