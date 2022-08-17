// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';
// let str3 = 'javascript is cool';
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);



// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1 = 'hello world';
// let str2 = 'lorem ipsum';    ----> використовував стрінги з першого завдання. сюди скопіпастив після закінчення
// let str3 = 'javascript is cool';

// console.log(str1.toUpperCase());
// console.log(str2.toUpperCase());
// console.log(str3.toUpperCase());



// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1 = 'HELLO WORLD';
// let str2 = 'LOREM IPSUM'; ----> але використовував стрінгі з першого завдання з дією другого. сюди додав після закінчення
// let str3 = 'JAVASCRIPT IS COOL';

// console.log(str1.toLowerCase());
// console.log(str2.toLowerCase());
// console.log(str3.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string    ';
// clear = str.trim();
// console.log(clear);

// let indexSpese1 = str.indexOf(' ',2);
// let indexSpese2 = str.indexOf(' ', 8);
// let str2 = str.substring(1,indexSpese1);
// console.log(str2);
// let str3 = str.substring(indexSpese1 +1,13)
// console.log(str3);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let split = str.split(' ');           ----> але я не певен шо саме таке хтіли чи малось на увазі
// console.log(split);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let arr = [10,8,-7,55,987,-1011,0,1050,0];
// let map = arr.map(value =>value);
// console.log(map);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

// let nums = [11,21,3];
// let sortNums = nums.sort((a,b) =>{
//     return a - b;
// });
// console.log(sortNums);


// let sortNums = nums.sort((a,b) =>{
//     return b - a;
// });
// console.log(sortNums);



// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];

// console.log(coursesAndDurationArray.sort((a, b) => {
//     if (a.monthDuration < b.monthDuration) {
//         return 1;
//     }
//     if (a.monthDuration > b.monthDuration) {
//         return -1;
//     }
//     if (a.monthDuration === b.monthDuration)
//         return 0;
// }));
//
// let list = coursesAndDurationArray.filter(value => value.monthDuration > 5);
// console.log(list);



// описати колоду карт
// - знайти піковий туз +
// - всі шістки +
// - всі червоні карти +
// - всі буби +
// - всі трефи від 9 та більше +
//
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
//
//
// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }


// let cards = [
//     {cardSuit: 'clubs', value: 'Ace', color:'black'},
//     {cardSuit: 'clubs', value: 2, color:'black'},
//     {cardSuit: 'clubs', value: 3, color:'black'},
//     {cardSuit: 'clubs', value: 4, color:'black'},
//     {cardSuit: 'clubs', value: 5, color:'black'},
//     {cardSuit: 'clubs', value: 6, color:'black'},
//     {cardSuit: 'clubs', value: 7, color:'black'},
//     {cardSuit: 'clubs', value: 8, color:'black'},
//     {cardSuit: 'clubs', value: 9, color:'black'},
//     {cardSuit: 'clubs', value: 10, color:'black'},
//     {cardSuit: 'clubs', value: 'Jack', color:'black'},
//     {cardSuit: 'clubs', value: 'Queen', color:'black'},
//     {cardSuit: 'clubs', value: 'King', color:'black'},
//
//     {cardSuit: 'diamonds', value: 'Ace', color:'red'},
//     {cardSuit: 'diamonds', value: 2, color:'red'},
//     {cardSuit: 'diamonds', value: 3, color:'red'},
//     {cardSuit: 'diamonds', value: 4, color:'red'},
//     {cardSuit: 'diamonds', value: 5, color:'red'},
//     {cardSuit: 'diamonds', value: 6, color:'red'},
//     {cardSuit: 'diamonds', value: 7, color:'red'},
//     {cardSuit: 'diamonds', value: 8, color:'red'},
//     {cardSuit: 'diamonds', value: 9, color:'red'},
//     {cardSuit: 'diamonds', value: 10, color:'red'},
//     {cardSuit: 'diamonds', value: 'Jack', color:'red'},
//     {cardSuit: 'diamonds', value: 'Queen', color:'red'},
//     {cardSuit: 'diamonds', value: 'King', color:'red'},
//
//     {cardSuit: 'hearts', value: 'Ace', color:'red'},
//     {cardSuit: 'hearts', value: 2, color:'red'},
//     {cardSuit: 'hearts', value: 3, color:'red'},
//     {cardSuit: 'hearts', value: 4, color:'red'},
//     {cardSuit: 'hearts', value: 5, color:'red'},
//     {cardSuit: 'hearts', value: 6, color:'red'},
//     {cardSuit: 'hearts', value: 7, color:'red'},
//     {cardSuit: 'hearts', value: 8, color:'red'},
//     {cardSuit: 'hearts', value: 9, color:'red'},
//     {cardSuit: 'hearts', value: 10, color:'red'},
//     {cardSuit: 'hearts', value: 'Jack', color:'red'},
//     {cardSuit: 'hearts', value: 'Queen', color:'red'},
//     {cardSuit: 'hearts', value: 'King', color:'red'},
//     {value: 'Joker', color:'red'},
//
//     {cardSuit: 'spades', value: 'Ace', color:'black'},
//     {cardSuit: 'spades', value: 2, color:'black'},
//     {cardSuit: 'spades', value: 3, color:'black'},
//     {cardSuit: 'spades', value: 4, color:'black'},
//     {cardSuit: 'spades', value: 5, color:'black'},
//     {cardSuit: 'spades', value: 6, color:'black'},
//     {cardSuit: 'spades', value: 7, color:'black'},
//     {cardSuit: 'spades', value: 8, color:'black'},
//     {cardSuit: 'spades', value: 9, color:'black'},
//     {cardSuit: 'spades', value: 10, color:'black'},
//     {cardSuit: 'spades', value: 'Jack', color:'black'},
//     {cardSuit: 'spades', value: 'Queen', color:'black'},
//     {cardSuit: 'spades', value: 'King', color:'black'},
//     {value: 'Joker', color:'black'},
//
// ];
//
// // let find = cards.filter(item => item.value === 'Ace' && item.cardSuit === 'spades');
// // console.log(find);
//
// // let list = cards.filter(item => item.value === 6);
// // console.log(list);
//
// // let diamondsList = cards.filter(item => item.cardSuit === 'diamonds');
// // console.log(diamondsList);
//
// // let redList = cards.filter(item => item.color === 'red');
// // console.log(redList);
//
// // let clubsfind = cards.filter(item => item.cardSuit === 'clubs' && item.value != 8 && item.value != 6 && item.value != 7 && item.value != 5 && item.value != 4 && item.value !=3 && item.value !=2);
// // let clubsfind = cards.filter(item => item.cardSuit === 'clubs' && item.value > '8' );
// // console.log(clubsfind);
//
// let reduce = cards.reduce((asimilyator,card) => {
//     if (card.cardSuit === 'spades'){
//         asimilyator.suitSpades.push(card);
//     }
//     if (card.cardSuit === 'hearts') {
//         asimilyator.suitHearts.push(card);
//     }
//     if (card.cardSuit === 'diamonds') {
//         asimilyator.suitDiamonds.push(card);
//     }
//     if (card.cardSuit === 'clubs') {
//         asimilyator.suitClubs.push(card);
//
//     }
//     return asimilyator;
//
// },{suitSpades:[],suitHearts:[],suitDiamonds:[],suitClubs:[]});
//
// console.log(reduce);