//  Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

// ??????????????????????????????????????????????????????????????
// Перевірте  скрипт при a, що дорівнює 1, 0, -3
// ??????????????????????????????????????????????????????????????????
//треба просто цими числами перевірити чи то вводити їх якось в саму схему?


// let x = +prompt('gift');
// if ( x>0) {
//     console.log('true');
// } else if (x<0) {
//     console.log('true');
// } else {
//     console.log('false')
// }

// let x = +prompt('gift');
//  if ( x !== 0) {
//   console.log('true');
//   } else if (x===0) {
//      console.log('false');
//  }

//Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).


// let time = +prompt('what a decade in training. write down the time of approach')
// if (time <= 15) {
//     console.log('first decade');
//     } else if ( time >=16 && time <=30) {
//     console.log('second decade');
//     } else  if ( time >=31 && time <=45) {
//     console.log('the third decade');
//     } else if ( time >= 46 && time <=59) {
//     console.log('the fourth decade');
//     } else if (time > 59){
//     console.log('you are a machine dude');
// }



//У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


// let dayInMonth = +prompt('enter your day')
// if (dayInMonth <= 10) {
//     console.logcond('first decade');
//     } else if (dayInMonth >= 11 && dayInMonth <= 20) {
//      console.log('second decade');
//     } else  if (dayInMonth >= 21 && dayInMonth <= 31) {
//     console.log('the third decade');
//     } else if (dayInMonth > 31){
//     console.log('haha welcom in the club dude');
// }


//Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано
//     на цей день (можна замість плану на день, назву дня англійською).



// let week = +prompt('ordinal number of the week?');
// switch (week) {
//     case 1:
//         console.log('Monday: Buy eggs, go to Lyse, cook bull eggs');
//         break;
//     case 2:
//         console.log('Tuesday: Go to a therapist, practice yoga, cook balanaise');
//         break;
//     case 3:
//         console.log('Wednesday: Clean the house, wash up, still go to work');
//         break;
//     case 4:
//         console.log('Thursday: Do yoga, buy a dress, go on a date, be disappointed and eat all the ice cream');
//         break;
//     case 5:
//         console.log('Friday: Go to work, meet with girlfriends, get drunk in a nightclub');
//         break;
//     case 6:
//         console.log('Saturday: Make breakfast, hate yourself for last night, go to the beauty salon');
//         break;
//     case 7:
//         console.log('Sunday: sleep all day');
//         break;
// }



// 5 - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.


// ???????????????????????????????????????????????????????????

// let x = +prompt('your number');
// let y = +prompt('Your second namber');
// if (x > y){
//     console.log(x);
// }else if (y>x){
//     console.log(y);
// }else if (y=x){
//     console.log('non stop');
// }

//  6 - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//  за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//  (хибноподыбне, тобто кастується до false)


// ???????????????????????????????????????????????????????????

let  x = prompt('GustDoIt') || 'default'
console.log('everything is much easier than I thought?');