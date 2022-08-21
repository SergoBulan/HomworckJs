// Все робити за допомоги js.

// ?????????????????????????????????????????????????????????????????
// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let sides = [
    {
        name: 'Свино-собаки',
        status: 'terrorist',
        solders: 1500000,
        flag: 'https://24tv.ua/resources/photos/news/1200x1200_DIR/202203/1924214.jpg',
    },
    {
        name: 'Ukraine',
        status: 'heroic-defender',
        solders: 250000,
        flag: 'https://gdb.rferl.org/24293B5E-DC8F-4AA0-9845-CA844C0ECD49_w1080_h608.jpg',
    },
    {
        name: 'Бульбаші',
        status: 'terrorists-assistant',
        solders: 200000,
        flag: 'https://zname.com.ua/watermark/watermark.php?image=https://zname.com.ua/image/cache/catalog/content/Flagi-mira/Belarus_2x3-800x533.jpg',
    }
];

for (const items of sides) {
    if (items.length !== 0) {
        let divInfo = document.createElement('div');
        divInfo.classList.add('wrap');
        document.body.appendChild(divInfo);

        let h2 = document.createElement('h2');
        h2.classList.add('alpha');
        h2.alpha.innerText = items.name;
        h2.style.beckground = blue;


        let p = document.createElement('p');
        p.classList.add('beta')
        p.innerText = items.solders + ' ' + items.status;

        let print = document.createElement('img');
        print.classList.add('collapse');
        print.src = items.flag;
    }

    divInfo.wrap.appendChild(alpha);
    divInfo.wrap.append(beta);
    divInfo.wrap.append(collapse);


};
wrap.appendChild(divInfo.cloneNode(true));

//чому спочатку все зпрацювало а потім після виконання classList.add помилки бити почало? навіть при приберанні цієї дії

// ___________________________________________________________________________________________________________________



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
//
// let divFirst = document.createElement('div');
// divFirst.classList.add('alpha');
// document.body.appendChild(divFirst);
//
//
// function creatBlock (array) {
//     for (const item of array){
//         if (item.length !== 0){
//             let div = document.createElement('div');
//             div.classList.add('beta');
//             divFirst.appendChild(div);
//
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





// ============================================================================================================

// - є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];
//
// let div = document.createElement('div');
// div.classList.add('member');
//
//
// for (const item of simpsons){
//     if (item.length !== 0) {
//         let h2 = document.createElement('h2');
//             h2.classList.add('first');
//             h2.innerText = item.name + ' ' + item.surname;
//             div.appendChild(h2);
//
//             let p = document.createElement('p');
//             p.classList.add('second');
//             p.innerText = item.info + 'age' + ' ' + item.age;
//             div.appendChild(p);
//
//             let imgAll = document.createElement('img');
//             imgAll.classList.add('pictur');
//             imgAll.src = item.photo;
//             div.appendChild(imgAll);
//     }
// };
// document.body.appendChild(div);

// Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
// - взяти попередній масив з сімпсонами.
//     Проітерувати його, створиши для кожного елементу масиву <div class='member'>.
//     Для кожної властивості елементу створити окремий блок, та помістити його у div.member







// - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'git',
//             'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html',
//         'css',
//         'js',
//         'mysql',
//         'mongodb',
//         'react',
//         'angular',
//         'aws',
//         'docker',
//         'git',
//         'sass']
//     }
// ];


// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png














