// 1.classes
// class Course {
//     constructor(name, price) {
//         this.name = name,
//             this.price = price
//     }
//     getName() {
//         return this.name;
//     }
// }
//giúp cho việc dễ kiểm soát khi code quá dài và phức tạp
// function logger(log, type = 'log') {
//     console[type](log);
// }
// logger('Message...', 'warn')


//REST
// var array = ['Javascript', 'PHP', 'Ruby'];
// var [a, ...rest] = array;  //...rest la phan con lai trong mang
// console.log(a);
// console.log(rest);

//tuong tu với object

// var logger = (...params) => {
//     return params
// };
// console.log(logger(1, 2, 3, 4, 5, 6, 7, 8))


//Spread (...)

// var array1 = ['Javascript', 'PHP', 'ruby'];
// var array2 = ['ReactJS', 'NodeJS'];
// var array3 = [...array1, ...array2]

// console.log(...array1);
// console.log(array3);

// ta có thể hiểu rest là cho các phần tử còn lại vào trong mảng
//còn spread thì ngược lại nó sẽ lấy những phần từ trong ngoặc ra ngoài

//tương tự cho array và object

//Tagged template literals


// function highlight([first, ...strings], ...values) {
//     return values.reduce(
//         (acc, curr) => [
//             ...acc, `<span>${curr}</span>`, strings.shift()
//         ], [first])
// }

// var brand = "F8";
// var course = "Javascript";

// const html = highlight`Học lập trình ${course} tại ${brand} !`

// console.log(html);

//Modules

// import logger from './logger.js'
// import * as constants from './logger.js'
// console.log(constants);
// logger('Test massage :', constants.TYPE_error);

//optional chaning (?.)
//kiem tra xme key nao do có ton tai hay không đặt trước key
//dùng với obj vd (obj.key1?.key2) trường hợp nếu không tồn tại key1 thì hệ thống cũng không bị lỗi
// const obj = {
//     number: {
//         number1: 1,
//         obj2: {
//             number2: 2
//         }
//     }
// }

// obj.number.obj2?.number2


//thực hành lại
var boxElement = document.querySelector('.box');
boxElement.classList.add('red', 'blue');
setInterval(() => {
boxElement.classList.toggle('red');
},1000)