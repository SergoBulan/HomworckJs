
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id,name,surname,email,phone) {
//     this.id = id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;
// }
// let MyTeam = [
//     new User(1,'Kolya','Dmitrich','kolya@fugi.com',0934442023),
//     new User(11,'Vasya','Еencentimeters','gigantpolowoy@fugi.com',0666661307),
//     new User(14,'Roma','Gypsy','vseukradu@fugi.com',0711209454),
//     new User(666,'Vitya','Stopudov','yateotvechayu@fugi.com',0994005732),
//     new User(5,'Dima','Dayuslovo','balabol@fugi.com',0987114532),
//     new User(6,'Edvard','Folkin','nottolkin@fugi.com',0976543210),
//     new User(7,'Batman','Mouse','nighthero@fugi.com',911),
//     new User(85,'One','Punch-Man','prostohero@fugi.com',0664543031),
//     new User(45,'Rick','Sunches','brilliantscientist@fugi.com',0986542198),
// ];
// console.log(MyTeam);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

// console.log(MyTeam.filter(value => value.id % 2 === 0));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

// MyTeam.sort((a,b)=> a.id-b.id).log


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

function Client(id,name,surname,email,phone,order) {

    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}



let client = [];
    let user1 = new Client(1,'Kolya','Dmitrich','kolya@fugi.com',0934442023,[1,4,5,67]),
    let user3 = new Client(14,'Roma','Gypsy','vseukradu@fugi.com',0711209454,[23,3,4]),
    let user4 = new Client(666,'Vitya','Stopudov','yateotvechayu@fugi.com',0994005732,[1]),
    let user5 = new Client(5,'Dima','Dayuslovo','balabol@fugi.com',0987114532,[12,4]),
    let user6 = new Client(6,'Edvard','Folkin','nottolkin@fugi.com',0976543210,[12,65,4,33,2,56,8,4,3,9,5]),
    let user7 = new Client(7,'Batman','Mouse','nighthero@fugi.com',911,[1,4,6,2]),
    let user8 = new Client(85,'One','Punch-Man','prostohero@fugi.com',0664543031,[4,98,4,2]),
    let user9 = new Client(45,'Rick','Sunches','brilliantscientist@fugi.com',0986542198,[4,3]):

client.push(user1,user2,user3,user4,user5,user6,user7,user8,user9);

console.log(client);

let sort = client.sort((a,b) => a.id.length - b.id.length);
console.log(sort);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку