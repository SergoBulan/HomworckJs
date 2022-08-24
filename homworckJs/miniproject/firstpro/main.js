// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html,
// которая имеет детальную информацию про объект на который кликнули

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        for (const user of users) {
            let div = document.createElement('div');
            div.innerText = `${user.id}  ${user.name}`;

            let button = document.createElement('button');
            button.innerText = 'info of user';
            button.onclick = function(){
            let list = JSON.parse(localStorage.getItem('users')) || [];
            list.push(user);
            localStorage.setItem('users', JSON.stringify(list));
        };
        div.appendChild(button);

        document.body.appendChild(div);
        }
    });



// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так,
// что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)



// let a = document.createElement('a');
// a.href = `user-details.html?data=${JSON.}`;
// a.innerText = ' info of user'
// div.appendChild(a);

//         let button = document.createElement('button');
//         button.innerText = 'info of user';
//         button.onclick = function(){
//             let list = JSON.parse(localStorage.getItem('users')) || [];
//             list.push(user);
//             localStorage.setItem('users', JSON.stringify(list));
//         };
//         div.appendChild(button);
//
//     }));
// let a = document.createElement('a');
// a.href = `user-details.html`;
// document.body.appendChild(a);