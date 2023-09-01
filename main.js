// alert('Hello world!')
// Giới thiệu hàm bull-in:
//     -alert
//     -console.log
//     -confirm
//     -prompt
//     -setTimeout
//     -setInterval
//tao ham dau tien
// function showDialog() {
//     alert('Hello xin chao cac ban!');
// }
// showDialog();
// function test(message) {
//     console.log(message);
// }
// test('day la 1 test log'); //truyen tham so vao ham thong qua bien massage
// function write(message,message2) {
//     console.log(message);
//     if (message2) {
//         console.log(message2); //neu co tham so massage2 thi moi thuc hien console khong thi se khong thuc hien
//     }
// }
// write('TEST', 'TEST_2');
// function arguments(){
//     console.log(arguments);
// }
// arguments('test1','test2') //tham so arguments duoc dung trong ham ma khong can khai bao
// function FOR() {
//     var myString = '';
//     for (var param of arguments) {
//         // console.log(param);
//         myString += `${param} -`//chu y dau ` chu khong phai dau '
//     }
//     console.log(myString);
// }
// FOR('1', '2', '3', '4');
// var isConfirm = confirm('Out web?');
// console.log(isConfirm)  //lay gia tri cua thao tac kick vao OK hay CANCEL
// function cong(a, b) {
//     return a + b;
// }
// var result = cong(2, 10);
// console.log(result);
// function showMessage() {
//     function showMessage2() {
//         console.log('anh yeu em');
//     }
//     showMessage2();
// }
// showMessage();
// var fullName = 'Ten toi la \"Hoang\"';
// var fullName1 = "Toi ten la Hoang"
// "1.Toi ten la Hoang"
// "2.Toi ten la Hoang"
// "3.Toi ten la Hoang"
// "4.Toi ten la Hoang"
// "5.Toi ten la Hoang"  //ta co the khai bao bang cach xuong dong va them dau ngoac kep

// alert(fullName);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// var fisrtName = 'Minh'
// var lastName = 'Hoang'
// alert('Toi ten ' + fisrtName + ' ' + lastName)
//ta co the hien bang cach them dau cong giua cac sau

// var fisrtName = 'Minh'
// var lastName = 'Hoang'
// alert(`Toi ten: ${fisrtName} ${lastName}`);
// khi dung cach ghep sau thong qua bien bang dau $ thi ta phai thay cap dau '' bang ``

var myString = '    Toi ten Minh Hoang Hoang   '
// Lam viec voi chuoi
//1.Lenght
// console.log(myString.length)
//2.Find index
// alert(myString.indexOf('Hoang',a)); //8 a  la vi tri bắt đầu tìm kiếm tùy vào phần văn bản mình muốn tìm
// alert(myString.indexOf('Minh'));    //-1
//tìm chuỗi kí tự cuối thì ta dùng cú pháp lastIndexOf()
//alert(myString.search('Minh'));
//3.Cut string
// alert(myString.slice(8, 13));//cut tu vi tri 8 den vi tri 13
// alert(myString.slice(-7, 10000))//cut tu trai sang phai thi ta chi can dung so am de bieu thi vi tri cut
//4.Replace
// alert(myString.replace('Hoang', 'Minh Hoang'))
// alert(myString.replace(/Hoang/g, 'Minh Hoang'))//cach de thay the tat ca chu Hoang bang Minh Hoang
//5.Convert to upper case (chuyen tat ca thanh chu hoa)
// alert(myString.toUpperCase())
//5.Convert to lower case (chuyen tat ca thanh chu thuong)
// alert(myString.toLowerCase())
//7.Trim   xoa dau cach thừa trong cac chuoi (chỉ những kí tự thừa ở đầu vào cuối)
// alert(myString.trim())
//8.Split    tách một chuỗi thành các phần tử trong mảng bằng cách tìm ngăn cách bằng những điểm chung
// var languages = 'Javascript, PHP, Ruby'
// console.log(languages.split(', ')) //dấu phân cách ở đây là ', ' ta sẽ tách được thành ba phần tử
//để tách từng chữ cái thành từng phần tử của mảng thì ta cho điểm trung là chuỗi rỗng ''
// 9.Get a character by index
// const myString2 = 'Minh Hoang';
// alert(myString2.charAt(4)) lay chu cai o vi tri 4


//Làm việc với số (Number)
var age = 20;
var PI = 3.1375725724;
// var result = 20 / 'ABC'
// alert(result) //NaN la gia tri khong hop le
// de kiem tra  xem ket qua co mang gia tri NaN(khong hop le) hay khong thi ta có hàm isNaN()

//Để chuyển đổi kiểu Number thành kiểu String : toString
// console.log(age,toString())

//Để làm tròn số ta dung toFixed : (đồng thời cũng được chuyển về kiểu String)
// alert(PI.toFixed()); //trong đó a là số giá trị muốn làm tròn sau dấu thập phân  


//Mảng trong js-Array
//1.Tạo mảng
// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
//     'Python',
//     'Html',
//     null,
//     undefined,
//     function () {

//     },
//     {},
//     123,
//     //mảng nhận tất cả mọi kiểu dữ liệu làm phẩn tử.
// ];
// console.log(languages)
// console.log(typeof languages)
// console.log(Array.isArray(languages))
// console.log(languages.length)
// console.log(languages[2]) //lay phan tu vi tri 2 trong mang



//Làm việc với Mảng (Array)
// var languages = [
//     'Javascript',
//     'PHP',
//     'Ruby',
// ]
//1.toString()
// console.log(languages.toString) //chuyen mang qua array va cac phan tu cach nhau boi dau ','

//2.Join()
// console.log(languages.join('. ')); //cung bien mang thanh string
// Tuy nhien ta co the thay doi dau ngan cach giua cac phan tu trong mang

//3.Pop() xóa element cuối mảng và trả về phần tử đó ra màn hình
// console.log(languages.pop());
//Trường hợp đã xóa hết thì trả ra màn  undefined

//4.Push() thêm element vào cuối mảng có thể 1 hoặc nhiều element vào cuối mảng và trả về độ dài(length) của mảng
// console.log(languages.push('Java', 'C#')); //tra ve length cua mang la 5

//5.Shift xóa đi element vào đầu mảng và trả về phần tử đó
// console.log(languages.shift()); //nguoc lai voi pop()

//6. unShift() them 1 hoac nhieu phan tu ve dau mang va tra ve so luong phan tu trong mang
// console.log(languages.unshift('Java', 'C#'));

//7. Splicing xoa cut hoac chen phan tu moi vao mang
// languages.splice(vị trí con trỏ,số phần tử muốn xóa,phần tử muốn thêm)
// languages.splice(1, 1, 'Java', 'C#');
// console.log(languages);

//8.concat() //giup ta chuyen nhung phan tu cua mot mang vao cuoi cua mot mang khac
// var languages2 = ['Java', 'C#'];
// console.log(languages.concat(languages2));
// console.log(languages2);

//9.slice()  cop lay mot vai element
// console.log(languages.slice(vị trí bắt dầu,vị trí kết thúc quá trình cut))
// console.log(languages.slice(1, 2));

//làm việc với object

var information = {
    name: "Vu Minh Hoang",
    age: 20,
    adrress: "Tien Phong, HP"
}

// them 
// information.ny = "khong co";
// console.log(information.ny);

//xoa 
// delete (information.age);
// console.log(information.age);
//information.hasOwnProperty(propname)  tim kiem xem co thuoc tinh propname;

//Object constructor 

function User(fisrtName, lastName, Avatar) {
    this.fisrtName = fisrtName,
        this.lastName = lastName,
        this.Avatar = Avatar
}

// var author = new User("Vu", "Minh Hoang", "Avatar");
// console.log(author);
// var user = new User("Minh","Vu",  "Avatar")
// console.log(user);
// author.title='Day la quan tri vien';
// user.comment = 'toi la nguoi su dung';
//ta co the them nhung thuoc tinh don le cho tung doi tuong khac nhau

// Object prototype
//để thêm thuộc tính vào hàm tạo ta dùng prototype
// User.prototype.class = "ITE6-04";

//đối tượng DATE
// var date = new Date();
// console.log(date);  //object

// var year = date.getFullYear();
// var month = date.getMonth() + 1; //do chi hien tu thang 0-11
// var day = date.getDate();
// console.log(day);

// var date = Date();
// console.log(date); //string


//Math object

//--Math.PI

//--Math.round()  lam tron so thap phan thanh so nguyen

//-Math.abs()   gia tri tuyet doi

//--Math.ceil()  lam tron tren

//-Math.floor() lam tron duoi

//-Math.random()  tao so thap phan ngau nhien < 1

//-Math.min(a, b, c, d, e)  tim ra so nho nhat trong day

//-Math.max(a, b, c, d, e)  tim ra so lon nhat trong day
//-parseInt(str, he co so muon chuyen ve) phan tich mot str tra ve 1 so nguyen  vd "006" -> 6

//a?b:c;
// var number = 6;
// switch (number) {
//     case 2:
//         alert("Hôm nay là thứ 2");
//         break;
//     case 3:
//         alert("Hôm nay là thứ 3");
//         break;
//     case 4:
//         alert("Hôm nay là thứ 4");
//         break;
//     case 5:
//         alert("Hôm nay là thứ 5");
//         break;
//     case 6:
//         alert("Hôm nay là thứ 6");
//         break;
//     case 7:
//         alert("Hôm nay là thứ 7");
//         break;
//     case 8:
//         alert("Hôm nay là Chủ nhật");
//         break;

//     default:
//         break;
// // }
// switch (key) {
//     case 1:
//     case 2:
//     case 3:
//         console.log("đây là trường hợp key =2 or 3 or 4");
//         break;

//     default:
//         break;
// }

var myInfo = {
    name: 'Minh Hoang',
    age: 20,
    adrress: 'Hai Phong'
}
// for(var key in myInfo){
//     console.log(key);   //in ra name,key,adrress
// }


var languages = [
    'Javascript',
    'PHP',
    'Ruby',
]
// for(var value of languages){
//     console.log(value); //in ra tat ca cac phan tu trong languages (khong use cho object)
// }

//từ mảng có các phần tử lặp nhau nếu muốn xóa những phần tử lặp thì ta dùng Set();

//Arrar methods:


// courses.forEach(function (course, index) {
//     console.log(index, course);
// });//duyet qua tung phan tu cua mang

// var isFree = courses.every(function (course, index) {
//     console.log(index);
//     return course.coin === 0; //kiem tra xem tat ca cac phan tu trong mang co coin bang 0 hay khong
//     //dung lai khi gap phan tu co coin !==0
// });
// console.log(isFree);


// var isFree = courses.some(function (course, index) {

//     console.log(index);

//     return index, course.coin === 0; // chi can 1 course.coin === 0 thi no se tra ve true .
// });
// console.log(isFree);


// var course = courses.find(function (course, index) {
//     return course.name === 'Ruby'; //tim ra phan tu dau tien co name là Ruby
// });
// console.log(course); chi đưa ra phần tử đầu tiên thỏa mãn điều kiện


// var course = courses.filter(function (course, index) {
//     return course.name === 'Ruby'; // giong find nhung tra ra tat ca nhung phan tu thoa man dk
// });

// console.log(course);

//

// var newCourse = courses.map(courseHandler(course, index) {
//     return {
//         id: course.id,
//         name: `Khoa hoc ${course.name}`,
//         CoinText: `Gia tien ${course.coin}`,
//         index: index,
//     }
// }); //duyet theo cac phan tu cua mang va dung du lieu cua mang
// //de tao ra mot mang khac co cung so luong phan tu ;

// console.log(newCourse);

//array.reduce()

// function courseHandler( ần biến lưu trữ, phtử trong mảng, vị trí phần tử, mảng){
//         return cái gì thì biến lư trữ sẽ mang giá trị đó;
// }
// var  totalCoin = courses.reduce(courseHandler, giá trị khởi tạo ban đầu);


// var totalCoin = courses.reduce(function (total, course) {
//     return total += course.coin;
// }, 0); //gia tri tra ve se cung kieu voi gia tri khoi tao
// console.log(totalCoin);


//includes method (only string  and array)

var title = 'Responsive web design';
//console.log(title.includes('web',vi tri bat dau)); //return true
//console.log(title.includes('hoang'));   //return false

var courses = ['Javascript', 'PHP', 'HTML'];
//console.log(courses.includes('PHP', 2)); return false;
//console.log(courses.includes('PHP', 1)); return true;

