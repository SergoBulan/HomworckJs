// 1- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// S=b*a;-площа прямокутника

// function areaFormulas(a,b) {
//     let res = a*b;
//     return res;
// }
// let s = areaFormulas(20,30);
// console.log(s);

// let s =(a,b)=>a*b;
// console.log(s(20,30));

// 2- створити функцію яка обчислює та повертає площу кола з радіусом r

// let p = 3.14;
// function areaFormulas(p,r){
//     let res = p*r*2;
//     return res;
// }
// let s = areaFormulas(p,7);
// console.log(s);

//S = Pr2; площа кола де Пі-3.14;

// let s = (p,r)=>p*r*2;    -----> так можна?
// console.log(s(3.14,8));

// 3- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

//S(біч.) = 2PRH , де R — радіус циліндра, H — висота циліндра. площа циліндра де Пі=3.14 у попередньому прікладі.


// function area(p,r,h){
//     let res = 2*p*r*h;
//     return res;
// }
// console.log(area(p,10,3))



// 4- створити функцію яка приймає масив та виводить кожен його елемент
//
// function gigi(...a){
//     console.log(a)
// }
// gigi(1,2,3,4,5,6)

// 5- створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let text ='gigi call me'
// function textSmotret(words){
//     document.write(`<h>${text}</h>`);
// }
// textSmotret(text)

// наче й не важко але подуматі змушу...

// 6- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function dayMneUliLi(trust,NaN) {
//     document.write(`<ul>`)
//     for (let i = 0; i<=2;i++) {
//         document.write(`<li>${trust}</li>`);
//     }
//     document.write(`</ul>`)
// }
// dayMneUliLi('okroshka',6)

// let n = 2;
// let text = '=)';
// let array = [n];
// for (const item of array){
//    document.write(`<ul>`)
//     for (let i = 0; i<=2;i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.write(`</ul>`)
// }
// знаю може можна й краще та й з такою версією ледь не вмер...


// 7- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)




// function dayMneUliLi(tnt,number){
//
//     document.write(`<ul>`)
//         for ( let i = 0; i<number; i++) {
//             document.write(`<li>${tnt}</li>`)
//         }
//     document.write(`</ul>`)
// }
// dayMneUliLi('dead',7)




// 8- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список



function gigi(foo){
    document.write(`<ol>`)
    for(const item of foo){
        document.write(`<li>${item}</li>`)
    }
    document.write(`</ol>`)
}
gigi([23,true,'tea'])


// 9- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ.
// Для кожного об'єкту окремий блоці




// const users = [
//     {id:1,name:'Vova',age: 45},
//     {id:2,name:'Max',age: 18},
//     {id:3,name:'Yura',age: 33},
//     {id:4,name:'Sebas',age: 29},
// ]
// for (let i= 0;i<users.length;i++) {
//     document.write(`<div>${users[i].id} -- ${users[i].name} -- ${users[i].age}</div>`);
// }





// 10- створити функцію яка повертає найменьше число з масиву

// let minNumber = (a,b,c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else if (c < a && c < b){
//         console.log(c);
//     }
// };
// minNumber(34,3,16);


// 11- створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13


// function summa(a,s,d,f,g,h,action){
//     let res=0;
//     switch(action){
//         case'+':
//             res = a+s+d+f+g+h;
//             break;
//         case '-':
//             res = a-s-d-f-g-h;
//             break;
//     }
//     return res;
// }
// console.log(summa(8,2,5,6,12,5,'+'));
// console.log(summa(4,2,4,6,2,9,'-'));

// let numbers = (a,c,v,f,d,s) => {
//     return a+c+v+f+d+s
// }
// console.log(numbers(3,4,2,5,1,7));