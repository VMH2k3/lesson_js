//callback
//goi ham trong ham;
// var courses = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ]
// Array.prototype.map2 = function (call) {
//     var output = [], arrlength = this.length //tiet kiem bo nho
//     for (let i = 0; i < arrlength; i++) {
//         var result = call(this[i], i);
//         output.push(result);
//     }
//     return output;
// }
// var html = courses.map2(function (course, index) {
//     return course;
// })
// console.log(html.join(', '));
// var html = courses.map(function (course) {
//     return course;
// })


// MyforEach()
// Array.prototype.forEach2 = function (cb) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             cb(this[index], index, this);
//         }
//     }
// };
// // var courses = ['JS', 'HTML', 'PHP'];
// var courses = new Array(100);
// courses.push('JS', 'PHP');
// courses.forEach2(function (course, index, arr) {
//     console.log(course, index, arr);
// })


//myfilter()

var courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 502
    },
    {
        id: 2,
        name: 'HTML,CSS',
        coin: 1
    },
    {
        id: 3,
        name: 'PHP',
        coin: 400
    },
    {
        id: 4,
        name: 'Ruby',
        coin: 500
    },
    {
        id: 5,
        name: 'Ruby',
        coin: 500
    }

]
// Array.prototype.filter2 = function (cb) {
//     var output = [];
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = cb(this[index], index, this);
//             console.log(result);
//             if (result) {
//                 output.push(this[index]);
//             }
//         }
//     }
//     return output;
// }
// var filterCourses = courses.filter2(function (course, index, arr) {
//     return course.coin > 400;
// })
// console.log(filterCourses);


//some2;

// Array.prototype.some2 = function (cb) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = cb(this[index], index, this);
//             if (result) {
//                 return true
//             }
//         }
//     }
//     return false
// }

// var result = courses.some2(function (course, index, arr) {
//     return course.coin > 501;
// })
// console.log(result);


//every2

// Array.prototype.every2 = function (cb) {
//     for (var index in this) {
//         if (this.hasOwnProperty(index)) {
//             var result = cb(this[index], index, this);
//             if (result === false) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// var result = courses.every2(function (course, index, arr) {
//     return course.coin >= 1;
// })
// console.log(result);


//HTML DOM

// document.write(' Hoàng làm được mà');
// 1.ELement getelement : Id, class, tag, CSS slector, HTML colection
//2.Attribute
//3.Text

// var headingId = document.getElementById('heading');
// console.log(headingId);
// var headingClass = document.getElementsByClassName('heading');
// console.log(headingClass);
// var headingTag = document.getElementsByTagName('h1')

// var headingNode = document.querySelector('.heading');  //selector thk dau tien
// var headingNodes = document.querySelectorAll('.heading'); //selector all

//selector phần tử con của những phần tử đã được select
// var boxNode = document.querySelector('.box-1');
// var boxNodeList = boxNode.querySelectorAll('li');
// console.log(boxNodeList);

//DOM Attribute

// var headingElement = document.querySelector('h1')
// // console.log(headingElement);
// // headingElement.title = "Hoàng đang rất cố gắng !:((";
// // headingElement.className = "gambatte";
// headingElement.setAttribute('title', 'Cố gắng lên nào!');

// console.log(headingElement.getAttribute('title'));

//DOM Text
//innerText chỉ lấy ra text trong element hiện ra trên màn hình
//textContent lấy ra nguyên bản kể cả dấu cách trong element đó và cũng bỏ những tag;

// var ElementText = document.querySelector('h1');
// console.log(ElementText.innerText);
// console.log(ElementText.textContent);

// ElementText.innerText = "Mình đang rất cố gắng nè !";

//innerHTML,
// outerHTML đè lên tại element đang được chọn !!!!


// var boxElement = document.querySelector('.box');
// boxElement.innerHTML = ('<h2>Cố gắng lên nàoo!</h2>');
// console.log(document.querySelector('h2').innerText);

//DOm CSS
// boxElement.style.width = '100px';
// boxElement.style.height = '100px';
// boxElement.style.backgroundColor = 'red';

// Object.assign(boxElement.style, {
//     width: '200px',
//     height: '150px',
//     backgroundColor: 'black'
// })

//ClassList property
//add
//contains kiem tra xem 1 class nao do co nam trong do khong.
//remove
//toggle neu co thi xoa neu khong co thi them


var boxElement = document.querySelector('.box');
boxElement.classList.add('red', 'blue'); //them nhieu class thi cach nhau boi dau ,


// console.log(boxElement.classList.contains('red')) //true

// boxElement.classList.remove('blue');

setInterval(() => {
    boxElement.classList.toggle('blue')
}, 500)

// boxElement.classList.replace('red', 'blue'); thay the class red bang class blue



//DOM events
// var h1element = document.querySelector('.box1');
// h1element.onclick = function () {
//     console.log(`Bạn vừa click vào ${h1element.innerText}`);
// };



// var h1elements = document.querySelectorAll('h1');
// for (let i = 0; i < h1elements.length; i++) {
//     h1elements[i].onclick = function (e) {
//         console.log(e.target);
//     };
// }


//1. Input / select
//2. Key up / down    

//keyup la sau khi nhan xong thi se lay gia tri
//keydown la an xuong la lay gia tri

// var Inputelement = document.querySelector('input[type="text"]');

// Inputelement.onchange = (e) => {
//     console.log(e.target.value);
// }


// var Inputelement = document.querySelector('input[type="checkbox"]');

// Inputelement.onchange = (e) => {
//     console.log(e.target.checked);
// }


// var Inputelement = document.querySelector('select');

// Inputelement.onchange = (e) => {
//     console.log(e.target.value);
// }

// var Inputelement = document.querySelector('input[type="text"]');
// Inputelement.onkeyup = (e) => {
//     console.log(e.target.value);
// }
// Inputelement.onkeydown = (e) => {
//     console.log(e);
// }

//1. preventDefault xoa bo thuoc tinh mac dinh
//2. stopPropagation xoa bo thuoc tinh noi bot

// var aelement = document.links;
// for (let i = 0; i < aelement.length; i++) {
//     aelement[i].onclick = (e) => {
//         if (!e.target.href.startsWith('https://f8.edu.vn')) {
//             e.preventDefault();
//         }
//     }
// }

// document.querySelector('div').onclick = (e) => {
//     console.log('DIV');
// }


// document.querySelector('button').onclick = (e) => {
//     e.stopPropagation();
//     console.log('Click me!');
// }

var btnelement = document.querySelector('button');


// setTimeout(() => {
// btnelement.onclick = (e)=>{
//     //viec 1
//     console.log('Viec 1')
//     //viec 2
//     console.log('Viec 2')
//     //viec 3
//     console.log('Viec 3')
//     //thuc hien nhieu cong viec trong mot lan click
// }

// }, 3000); //sau 3s thì mới thực


//Them su kien lang nghe
// btnelement.addEventListener('click', () => {
//     console.log('viec 1');
// })
// function viec2() {
//     console.log('viec 2');
// }

// btnelement.addEventListener('click', viec2)

// setTimeout(() => {
//     btnelement.removeEventListener('click', viec2)
// }, 3000) //sau 3s xoa bo su kien lang nghe viec


//JSON, Fetch, Postman

//Stringify: Tu JS sang JSON
//Parse: Tu JSON sang JS
// var a = '"abc"';
// console.log(JSON.parse(a));

// console.log(JSON.stringify([
//     'Javascript',
//     'PHP'
// ]))


//Promise
//Sync /  Async
//setTimeout, setInterval, fetch, XMLHttpreQuest

// 1. newPromise
// 2. Executor

// var promise = new Promise(
//     //Executor
//     function (resolve, reject) {
//         //Logic
//         //Thành công thì gọi đến resolve
//         //Thất bại thì gọi đến reject
//         resolve();
//     }
// )

// .then(function () {
//     return 1;
// })
// .then(function (data) {
//     console.log(data);
//     return 2
// })
// .then(function (data) {
//     console.log(data);
// })
// .catch(function () {
//     //that bai
// })
// .finally(function () {
//     //ket thuc
// })


//Promise.resolve
//Promise.reject

// var promise = Promise.resolve('Success!');
// var promise = Promise.reject('Fail :(');
// promise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((err) => {
//         console.log(err)
//     })

//Promise.all

// var promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([1])
//     }, 2000)
// })
// var promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([2, 3])
//     }, 5000)
// })

// Promise.all([promise1, promise2])
//     .then(([result1, result2]) => {
//         console.log(result1.concat(result2));
//     })
//Note chi can 1 torng 2 thang co loi la no se khong thuc hien

var users = [
    {
        id: 1,
        name: 'Minh Hoàng'
    },
    {
        id: 2,
        name: 'Trọng Minh'
    },

]
var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh dang ở đâu ?'
    },
    {
        id: 2,
        user_id: 2,
        content: 'Anh đang ở nhà !'
    }
]

//1.Lay comments
//2.Lay id nguoi dung tuong ung voi tung comment 

//Fake API



function getUserbyID(Userids) {
    return new Promise(function (resolve) {
        var result = users.filter((user) => {
            return Userids.includes(user.id);
        });
        setTimeout(() => {
            resolve(result);
        }, 2000);
    })
}

function getcomments() {
    return new Promise(function (resolve) {
        setTimeout(() => {
            resolve(comments);
        }, 1000);
    });
}

getcomments()
    .then((comments) => {
        var Userids = comments.map((comment) => {
            return comment.user_id;
        })
        return getUserbyID(Userids)
            .then((users) => {
                return {
                    users: users,
                    comments: comments
                }
            })
    })
    .then((data) => {
        var commentBLock = document.getElementById('comment_block');

        var html = '';
        data.comments.forEach(function (comment) {
            var user = data.users.find(function (user1) {
                return user1.id === comment.user_id;
            });
            html += `<li>${user.name}: <br> ${comment.content}</li>`;
        })
        commentBLock.innerHTML = html;
    })

//fetch()

// var postApi = 'https://jsonplaceholder.typicode.com/todos/1'
// fetch(postApi)
//     .then((response) => {
//         return response.json();
//     })
//     .then((posts) => {
//         console.log(posts);
//     })

//-JSON server : API Server

//CRUD
// Create: Tạo mới
// Read: Lấy thông tin
// Update: Chỉnh sửa
// Delete: Xóa


