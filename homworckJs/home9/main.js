// Все робити за допомоги js.


// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

// let sides = [
//     {
//         name: 'Свино-собаки',
//         status: 'terrorist',
//         solders: 1500000,
//         flag: 'https://24tv.ua/resources/photos/news/1200x1200_DIR/202203/1924214.jpg',
//     },
//     {
//         name: 'Ukraine',
//         status: 'heroic-defender',
//         solders: 250000,
//         flag: 'https://gdb.rferl.org/24293B5E-DC8F-4AA0-9845-CA844C0ECD49_w1080_h608.jpg',
//     },
//     {
//         name: 'Бульбаші',
//         status: 'terrorists-assistant',
//         solders: 200000,
//         flag: 'https://zname.com.ua/watermark/watermark.php?image=https://zname.com.ua/image/cache/catalog/content/Flagi-mira/Belarus_2x3-800x533.jpg',
//     }
// ];
//
// for (const items of sides) {
//     let divInfo = document.createElement('div');
//     divInfo.classList.add('wrap');
//     wrap.style.width = '200px';
//
//     let h2 = document.createElement('h2');
//     h2.classList.add('alpha');
//     h2.alpha.innerText = items.name;
//     h2.style.beckground = blue;
//     h2.style.length = '200px';
//
//     let p = document.createElement('p');
//     p.classList.add('beta')
//     p.innerText = items.solders + ' ' + items.status;
//
//     let print = document.createElement('img');
//     print.classList.add('collapse');
//     print.src = items.flag;
//     collapse.style.width = '100%';
//
//     divInfo.wrap.appendChild(alpha);
//     divInfo.wrap.append(beta);
//     divInfo.wrap.append(collapse);
//
//     document.body.appendChild(divInfo);
// };
// wrap.appendChild(divInfo.cloneNode(true));

//чому спочатку все зпрацювало а потім після виконання classList.add помилки бити почало? навіть при приберанні цієї дії


// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.



// let ulEl = document.getElementsByClassName('menu')[0];
// let howArray = ['Main','Products','About us','Contacts'];
//
// function creatBlock (array) {
//     for (const item of array){
//         if (item.length !== 0){
//             let liList = document.createElement('li');
//             liList.innerText = item;
//             ulEl.appendChild(liList);
//         }
//
//     }
// }
// creatBlock(howArray);
//
//////////////////////////////////////
// for (const item of array) {
//     let liList = document.createElement('li');
//     liList.innerText = item;
//     ulEl.appendChild(liList);
// }
///////////////////////////////////




// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let div = document.createElement('div');
// div.classList.add('target');
// document.body.appendChild(div);
//
// function creatBlock (array) {
//     for (const item of array){
//         if (item.length !== 0){
//             let h2 = document.createElement('h2');
//             h2.innerText = item.title + ' ' + item.monthDuration;
//             div.appendChild(h2);
//         }
//
//     }
// }
// creatBlock(coursesAndDurationArray);


//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'>
// з monthDuration елементу.
//     Завдання робити через цикли


// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// let div = document.createElement('div');
// div.classList.add('target');
// document.body.appendChild(div);
//
//
// function creatBlock (array) {
//     for (const item of array){
//         if (item.length !== 0){
//             let h2 = document.createElement('h2');
//             h2.classList.add('heading');
//             h2.innerText = item.title;
//             div.appendChild(h2);
//
//             let p = document.createElement('p');
//             p.classList.add('description');
//             p.innerText = item.monthDuration;
//             div.appendChild(p);
//         }
//
//     }
// }
// creatBlock(coursesAndDurationArray);
//










