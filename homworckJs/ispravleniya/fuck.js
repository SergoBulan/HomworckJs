// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

// function User (id, name, surname, email, phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
//
// let users = [];
// let user1 = new User(12,'Sasha','Bedros','sasha@gmail.com',380949554321);
// let user2 = new User(8,'Petya','Gashish','Rasta@gmail.com',380754432562);
// let user3 = new User(125,'Vitya','AK','rapdno@gmail.com',380678954322);
// let user4 = new User(143,'Sofia','Rotaru','kalina@gmail.com',380987654321);
// let user5 = new User(14,'Bilbo','Begins','moyaprelist@gmail.com',380123456789);
// let user6 = new User(66,'Boromir','Drennoy','duyvdudku@gmail.com',380754578654);
// let user7 = new User(6,'Frodo','Begins','pochtisam@gmail.com',380566432853);
// let user8 = new User(999,'Legolas','Ostrouh','yafeya@gmail.com',380945689351);
// let user9 = new User(75,'Aragorn','Putnik','yasliguzatoboy@gmail.com',380964122421);
// let user0 = new User(78,'Gimli','Kopatel','kopay@gmail.com',380949647383);
//
// users.push(user1,user2,user3,user4,user5,user6,user7,user8,user9,user0);
// console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)


// let filter = users.filter(value=>value.id % 2 === 0);
// console.log(filter);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// let sort = users.sort((a,b)=> a.id - b.id);
// console.log(sort);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client extends User {
//     constructor(id, name, surname, email, phone, order){
//         super(id, name, surname, email, phone);
//         this.order = order;
//     }
// }
//
// let clients = [];
//
// let client0 = new Client(12,'Sasha','Bedros','sasha@gmail.com',380949554321,[1,4,2,5]);
// let client1 = new Client(8,'Petya','Gashish','Rasta@gmail.com',380754432562,[56,4,33]);
// let client2 = new Client(125,'Vitya','AK','rapdno@gmail.com',380678954322,[67]);
// let client3 = new Client(143,'Sofia','Rotaru','kalina@gmail.com',380987654321,[43,1]);
// let client4 = new Client(14,'Bilbo','Begins','moyaprelist@gmail.com',380123456789,[4,5,8,3,5,1,56]);
// let client5 = new Client(66,'Boromir','Drennoy','duyvdudku@gmail.com',380754578654,[5,6,12,4]);
// let client6 = new Client(6,'Frodo','Begins','pochtisam@gmail.com',380566432853,[54,6,11,0]);
// let client7 = new Client(999,'Legolas','Ostrouh','yafeya@gmail.com',380945689351,[5,43,21,6]);
// let client8 = new Client(75,'Aragorn','Putnik','yasliguzatoboy@gmail.com',380964122421,[45,21,6,3]);
// let client9 = new Client(78,'Gimli','Kopatel','kopay@gmail.com',380949647383,[7,9,2]);
//
// clients.push(client0,client1,client2,client3,client4,client5,client6,client7,client8,client9);
// console.log(clients);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

// let sort1 = clients.sort((a,b) => a.order.length - b.order.length);
// console.log(sort1);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// function Car (model, producer, age, maxSpid, engin){
//     this.model = model;
//     this.producer = producer;
//     this.age = age;
//     this.maxSpid = maxSpid;
//     this.engin = engin;

//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpid} на годину`);
//     }
//
//     this.info = function () {
//         for (const item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     }
//
//     this.increaseMaxSpeed = function (newSpid){
//         this.maxSpid += newSpid;
//     }
//
//     this.changeYear = function (newAge){
//         this.age = newAge;
//     }
//
//     this.addDriver = function (driver){
//         this.driver = driver;
//     }
// }
// let car = new Car ('opel', 'Franch', 2012, 180, 3.8);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(30);
// car.changeYear(2020);
// car.addDriver({name:'Kesha', age:22});
// console.log(car);
//


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
// class Car {
//     constructor(model, producer, age, maxSpid, engin){
//         this.model = model;
//         this.producer = producer;
//         this.age = age;
//         this.maxSpid = maxSpid;
//         this.engin = engin;
//     }
//     drive(){
//         console.log(`їдемо зі швидкістю ${this.maxSpid} на годину`);
//     }
//     info() {
//         for (const item in this) {
//             if (typeof this[item] !== 'function') {
//                 console.log(`${item} -- ${this[item]}`);
//             }
//         }
//     };
//     increaseMaxSpeed(newSpid){
//         this.maxSpid += newSpid;
//     }
//     changeYear(newAge){
//         this.age = newAge;
//     }
//     addDriver(driver){
//         this.driver = driver;
//     }
//
// }
// let car = new Car ('Ferrari', 'Italy', 2019, 160, 1.8);
// console.log(car);
// car.drive();
// car.info();
// car.increaseMaxSpeed(30);
// car.changeYear(2020);
// car.addDriver({name:'Dicaprio', age:42});
// console.log(car);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку


// class Cinderella {
//     constructor(name,age,fuutSize) {
//         this.name = name;
//         this.age = age;
//         this.fuutSize = fuutSize;
//     }
// }
// let pretendents = [];
//
// let cin0 = new Cinderella('Alisha', 32, 40);
// let cin1 = new Cinderella('Fifi', 29, 41);
// let cin2 = new Cinderella('Gigi', 27, 39);
// let cin3 = new Cinderella('Sasha', 21, 35);
// let cin4 = new Cinderella('Vasya',38, 43);
// let cin5 = new Cinderella('Esmiralda', 22, 38);
// let cin6 = new Cinderella('Paprica', 19, 34);
// let cin7 = new Cinderella('Eva Elfie', 20, 37);
// let cin8 = new Cinderella('Silvia', 39, 40);
// let cin9 = new Cinderella('horse', 10, 45);
//
// pretendents.push(cin0,cin1,cin2,cin3,cin4,cin5,cin6,cin7,cin8,cin9);
// console.log(pretendents);
//
// class Princ extends Cinderella {
//     constructor(name, age, slipper) {
//         super (name, age);
//         this.slipper = slipper;
//     }
//
// }
//
// let princ = new Princ('Malfoy', 24, 43);
// console.log(princ);
//
// let find = (pretendents,princ) => {
//     for(const item of pretendents){
//         if (princ.slipper === item.fuutSize){
//             return `End winner ${item.name}`;
//         }
//     }
// }
// console.log(find(pretendents, princ));
//
// let winner = pretendents.find(value => princ.slipper === value.fuutSize);
// console.log(winner);
//
//




