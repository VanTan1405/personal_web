//$ thông báo với người dùng
// alert('Chao cac ban')
//Co the co dau ';' hoac khong 
// var fullName = 'Nguyen Van Tan';
// var age = 20
// alert (fullName); 
// alert (age);
// console.log(fullName);
// console.warn(fullName);
// console.error(fullName);
//
// confirm('Xac nhan ban du tuoi');
//$ Lấy thông tin từ người dùng
// prompt('Xac nhan ban du tuoi');
//*Cach khac: 
// var t = "Xac nhan ban du tuoi ?"
// prompt(t)
//Set timeout
// setTimeout(function() {
//     alert('Thong bao')
// }, 1000)

//SetInterval:
// setInterval(function() {
//     console.log('Thong bao' + Math.random())
// }, 1000)

//Toan tu
// arithmetic
// var a = 100 + 200;
// console.log(a)
// //Assignment
// var fullName = 'Nguyen Van Tan'
// //Comparson
// var a = 100;
// var b = 200;
// if(a<b){
//     alert('Dung');
//     console.log('Dung')
// }
// //Logic
// if(a>0 && b>0){
//     alert('Ca a va b deu lon hon 0');
//     console.log('Dung')
// }

//Toan tu so hoc
// var a = 6;
// var output = a--;
//Viec 1: a copy = 6
//Viec 2: +1 cho a, a = a + 1 => a = 7
//Viec 3: tra ve a copy
// console.log('output: ', output)
// console.log('a', a);

//Toan tu gan:
// x *= y <=> x = x * y;

// xu li chuoi 
// var mystring = "Nguyen Van Van Tan"
// console.log(mystring.length);
// console.log(mystring.("Va",8))

//Toan
// var age = 18;
// var i = 5.567;
// console.log(typeof age.toString())
// console.log(i.toFixed())

//array:
// var language = [
//     'javascrips',
//     'PHP',
//     'RUBY',
//     'C++',

// ];
// var language1 = [
//     'C#',
//     'CSS'
// ]
// console.log(language)
// console.log(language[3])

// console.log(language.toString()) // chuyen mang thanh chuoi
// console.log(language.join('- ')) // doi dau , thanh dau -
 
// language.splice(1,2,'html') // thay doi du lieu 
// console.log(language)

// console.log(language.concat(language1)) //  Noi 2 chuoi voi nhau 

/*          BAI --------- TAP --------- VAN ----------DUNG :
// tim phan tu thu2 cua mang // Chuyen mang thanh chuoi // doi dau - 
// thay doi du lieu thanh 'gg' // Noi 2 chuoi
var user = [
    'Minh dang hoc vaf lam viec voi ngon ngu'
]
var language = [
    'css',
    'html',
    'php'
]

console.log(language[1])

console.log(language.toString())

console.log(language.join(' - '))

language.splice(1,2,'gg')
console.log(language)

console.log(language.concat(user))
*/

/////////////////////////////////////////////////////////////////////////////////
//*/ ham function
// function write(){
//     alert("Nguyen Van Tan")
// }
// write()
// co tham so
// function write(message1, message2) {
//     //code 
  
//     console.log(message1)
//     console.log(message2)
// }
// write('Nguyen Van Tan', 'Le Huu Quang'); //truyen tham so

// function write(){
//     var mystring ='';
//     for(var param of arguments){
//         mystring += `${param} -`

//     }
//     console.log(mystring)
// }
// write("nguyen", "Van", "Tan")// dua cac chu len cung 1 dong / truyen khong gioi han tham so

// function cong(a,b){
//     //return a + b;
//    // return [a,b]
//     //return 'nguyen van'+ 'tan'
//     //return a.toString() + b.toString()
// }
// var pheptinh = cong(2,8)
// console.log(pheptinh)

/*ca loaij funtion 
1. Declaration function
2. Expression funtion 
3. Arrow funtion
*/
// message2()
// message1()
// function message1(){
//     console.log("Declaration function")
// }// goi ra truoc funtion 
// var message2 = function(){
//     console.log('Expression funtion')
// }// khong goi ra truoc funtion 

// // message2()

///////////////////////////////////////////////////////
//Object
// var myInfo = {
//     name: 'Van Tan',
//     age: 20,
//     address: 'Phu Yen, VN'
// }
/*
//1
myInfo.email = 'vantan0009@gmail.con' // khi ban muon them thong tin
myInfo.sdt = '0938875026'
//2
myInfo['my-email'] = 'vantan0009@gmail.con' // dat ten de khong vi pham cach dat ten trong js
console.log(myInfo)
//3
console.log(myInfo.age) // lay value cach1
console.log(myInfo['age'])  // lay value cach2
//4
delete myInfo.age; // Xoa value

*/

// var date = new Date(); // Cach 1: Kieu DL object
// //var date = Date() // Cach 2: kieu DL string
// var year = date.getFullYear()
// var month = date.getMonth()
// console.log(year)
// console.log(month) // 0=11
// console.log(typeof date);

//console.log(date.getFullYear())
// var date = new Date()
// var year = date.getFullYear()
// console.log(year)
// console.log(date.getFullYear())
// var year = 2020;
// if (year < 2020){
//     console.log('Ban chua duoc 18 tuoi dau!!!')
// } 
// else if (year > 2020){
//     console.log('Ban  truong thanh  roi nha')
    
// }
// else{
//     console.log('Ban da du 18 tuoi roi nha')
// }
///////// ////////////////Ngay 4

/*Switch
So sanh tinh dung sai if else
Cho truoc cac gia tri -> switch case (<3 chon if else)
*/
// var date = 9;
// switch (date){
//     case 2:
//         console.log('Hom nay la thu 2')
//         break;
//     case 3:
//         console.log('Hom nay la thu 3')
//         break;
//     case 4:
//         console.log('Hom nay la thu 4')
//         break;
//     case 5:
//         console.log('Hom nay la thu 5')
//     default:
//         console.log('Khong biet')
// }
// Neu k co Break thi CT se lay tu truong hop dung tro xuong

/* Toan tu 3 ngoi: */
// var coin = {
//     price: 0,
//     Name: 'Nguyen Van Tan'
// }
// console.log(`${coin.price} Coin`)
// console.log(`${coin.Name} co` + ` ${coin.price} Coin`)

// if(coin.price > 0){
//     console.log('Ban co the mua no voi gia ' + coin.price)
// }
// else{
//     console.log('Ban co the dung no voi gia mien phi')
// }

//User toan tu 3 ngoi:
// var pay = coin.price > 0 ? `Ban phai thanh toan ${coin.price} Coin` : 'Mien phi';
// console.log(pay)

/*Vong lap-Loop
1.For - Lap voi dieu dien dung
2.For/in - Lap qua key cua doi tuong
3.For/of - Lap qua value cua doi tuong
4.While - Lap khi dieu kien dung
5.Do/While - Lap it nhat 1 laan sau do lap khi dieu kien dung
*/ 

//In ra gia tri tu 2 den 100
// var i = 1;
// for(; i<100;){
//     i++;
//     console.log(i)
// }

//
// var myArray = [
//     'C#',
//     'Python',
//     'C',
//     'Java'
// ]

// 
// console.log(myArray[3])
/* Cách 1: 
for (var i = 0; i <4;  i++){
    console.log(myArray[i])
}
*/
/* Cách 2:*/
// var arrayLength = myArray.length;
// for (var i = 0; i <arrayLength;  i++){
//     console.log(myArray[i])
// }

// myArray[4] = 'C++'
// console.log(myArray)

/*for/in: lay thong tin qua key*/ 

// var myInfo = {
//     name: 'Nguyen Van Tan',
//     address: 'Tay Hoa, Phu Yen, VN',
//     sdt: '0123456'
// }
// for (var key in myInfo){
//     console.log(key) // Lay cac truong thong qua key
//     console.log(myInfo[key]) // Lay cac thong tin thong qua key
// }

// var myArray = [
//     'C#',
//     'Python',
//     'C',
//     'Java'
// ]
// for (var key in myArray){
//     console.log( myArray[key])
// }

// 3.For/of - Lap qua value cua doi tuong
// var myArray = [
//     'C#',
//     'Python',
//     'C',
//     'Java'
// ]
// lAY RA TUNG PHAN TU TRONG CHUOI
// var array = 'Nguyen Van Tan'
// for(var value of array){
//     console.log(value)
// }
// lAY RA TUNG PHAN TU TRONG MANG
// for(var value of myArray){
//     console.log(value)
// }
// lAY RA TUNG PHAN TU TRONG OBJECT
// var language = {
//     language1: 'C#',
//     language2:'Python',
//     language3:'C',
//     language4:'Java'
// }
//CACH LAY KEY
// console.log(Object.keys(language))
// for (var value of Object.keys(language)){
//      console.log(language[value] )
// } // CACH1

// console.log(Object.values(language))
// for (var value of Object.values(language)){
//      console.log(value)
// } // CACH 2

// Bai 2: 
// var courses = [
//     {
//         id: 1,
//         Name: 'js',
//         coin: 0
//     },
//     {
//         id: 2,
//         Name: 'HTML,CSS',
//         coin: 50
//     },
//     {
//         id: 3,
//         Name: 'RUBY',
//         coin: 60
//     },
//     {
//         id: 4,
//         Name: 'PHP',
//         coin: 70
//     },
//     {
//         id: 5,
//         Name: 'js',
//         coin: 2500
//     },
//     {
//         id: 6,
//         Name: 'HTML,CSS',
//         coin: 500
//     },
// ];
// Tinh tong tien cac khoa hoc
// var totalcoin = 0; //Bien luu tru
// for (var course of courses){ // Lap qua cac pt
        // Thuc hien viec luu tru
//      totalcoin += course.coin
// }
// console.log(totalcoin)

// 4.While - Lap khi dieu kien dung
// var i = 1;
// while(i < 100){
//     i++;
//     console.log(i)
// } // 2->100

// var myArray = [
//     'C#',
//     'Python',
//     'C',
//     'Java'
// ]
// var i = 0;
// while(i < myArray.length){
//     console.log(myArray[i])
//     i++;
// } // LAY PHAN TU TRONG MANG 

//5.Do/While - Lap it nhat 1 laan sau do lap khi dieu kien dung
// var i = 0;
// do{
//     i++;
//     console.log(i);
// }while(i<10) // 1-> 10

///////////// VONG LAP LONG NHAU 
// var array = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
// ]
// for(var i = 0; i <array.length; i++){
//     for(var j = 0; j < array[i].length; j++){
//         console.log(array[i][j]);
//     }
// }

// Phuong thuc lam viec voi mang // su dung ham
/*
    forEach()     Duyet/ in từng phần tử của mảng và trả về tham số thứ 2      
    every()       Kiểm tra tất cả phần tử của mảng phải thõa mãn điều kiên                          
    some()        Kiem tra 1 dieu kien , chi can 1 phan tu thoa man tra ve True 
    find()        Tim phan tu trong mang (* Chi tim duoc 1 phan tu dung gan nhat trong mang )
    filter()      Tim phan tu trong mang (*Tim tat ca cac phan tu dung trong mang) 
    map()         Chinh sua/ thay doi noi dung cua tung phan tu 
    reduce()
*/

var courses = [
    {
        id: 1,
        Name: 'js',
        coin: 0
    },
    {
        id: 2,
        Name: 'HTML,CSS',
        coin: 50
    },
    {
        id: 3,
        Name: 'RUBY',
        coin: 60
    },
    {
        id: 4,
        Name: 'PHP',
        coin: 70
    },
    {
        id: 5,
        Name: 'js',
        coin: 2500
    },
    {
        id: 6,
        Name: 'HTML,CSS',
        coin: 500
    },
];

// FOREACH: Duyệt qua từng phần tử của mảng 
// courses.forEach(function(course, index){
//     console.log(index, course)
// });
// 
// EVERY: Kiểm tra tất cả phần tử của mảng phải thõa mãn điều kiên
// var isFree = courses.every(function(course, index){
//     return course.coin === 0; // CO TAT CA KHOA HOC FREE
// });
// console.log(isFree)

// kIEM TRA  PHAN TU 
// var isFree = courses.some(function(course, index){
//     return course.coin === 0; // 1 KHOA HOC FREE
// });
// console.log(isFree)

// FIND 
// var isFree = courses.find(function(course, index){
//     return course.Name === 'RUBY'; // 1 KHOA HOC FREE
// });
// console.log(isFree)

//FILTER
// var isFree = courses.filter(function(course, index){
//     return course.Name === 'HTML,CSS'; // 1 KHOA HOC FREE
// });
// console.log(isFree)

//map(): Chinh sua phan tu trong mang 
// function courseHandler(course, index, originArray){ //originArray: mang goc
//     return {
//         id: course.id,
//         Name :`khoa hoc: ${course.Name}`,
//         coin: course.coin,
//         coinText: `Gia: ${course.coin}`,
//         index: index,
//         originArray: originArray // courses
//     } /// return gi duoi tra ve do 
// }
// var newcourse = courses.map(courseHandler);
// console.log(newcourse)

//Lay tat ca ten khoa hoc
// function courseHandler(course, index){ //originArray: mang goc
//     return  course.Name;
// }
// var newcourse = courses.map(courseHandler);
// console.log(newcourse)
//Cho nguoi dung nhin thay HTML
// function courseHandler(course, index){ //originArray: mang goc
//     return `<h2>${course.Name}</h2>`;
// }
// var newcourse = courses.map(courseHandler);
// console.log(newcourse.join(''));

// VD2:
// var information = [
//     {
//         id: 1,
//         name: 'Tan',
//         wage: 50000000
//     },
//     {
//         id: 2,
//         name: 'Lau',
//         wage: 50000000
//     },
//     {
//         id: 3,
//         name: 'Phan',
//         wage: 50000000
//     }
// ]

// function informationHander(param, index){
//     return{
//         id: param.id,
//         name: `Nguyen Van: ${param.name}`,
//         wage: param.wage,
//         index: index
//     }
// }
// var coure = information.map(informationHander)
// console.log(coure);

//REDUCE: reduce()
// function coinHandler(){

// }
// var totalCoin = courses.reduce(coinHandler, 0);
/*          BAI --------- TAP --------- VAN ----------DUNG*/
/*  1. Duyệt từng phần tử của mảng coures
    2. Kiểm tra thử có phải tất cả khóa học đều miễn phí hay không
    3. Kiểm tra thử có 1 khóa học nào miễn phí dung không 
    4. Tim phan tu co ten la PHP
    5. Tim tat ca cac phan tu co ten la HTML, CSS
    6. Lay tat ca ten khoa hoc
    7.Cho nguoi dung nhin thay HTML
    
    */
//                      GIAI
//  1
// courses.forEach(function(course, index){
//     console.log(course)
// })
//  2
// var myFree = courses.every(function(course, index){
//     return course.coin === 0
// })
// console.log(myFree)
//  3
// var isFree = courses.some(function(course, index){
//     return course.coin === 0
// })
// console.log(isFree)
//  4
// var phpname =  courses.find(function(course, index){
//     return course.name = 'PHP'
// })
// console.log(phpname)
//  5 
// var htmlcssname = courses.filter(function(course, index){
//     return course.Name === 'HTML,CSS'
// })
// console.log(htmlcssname)


///////////////////////////////////////////////////////
//includes method: su dung cho array va string 
// console.log(Array.prototype.includes)
// console.log(String.prototype.includes)
// console.log(Object.prototype.includes)

// //string
// var title = 'Nguyen Van Tan';

// console.log(title.includes('Van'));
// //Array
// var coures = ['java', 'C#']
// console.log(coures.includes('C#'));


// console.log(Math.PI)
// console.log(Math.round(1.23)) // tron so

// console.log(Math.abs(-9)) // GT tuyet doi

// console.log(Math.ceil(4.01)) // Lam tron tren

// console.log(Math.floor(4.99)) // Lam tron duoi

// console.log(Math.random() * 4) // Tra ve so thap phan < 4
// console.log(Math.min)

// console.log(Math.max)

// radom so
// console.log(Math.floor(Math.random() * 5))
// var random = Math.floor(Math.random() * 5)
// var bonus = [
//     '10 coin',
//     '20 coin',
//     '30 coin',
//     '40 coin',
//     '50 coin',
// ]
// console.log(bonus[random]);

// var random = Math.floor(Math.random() * 4)
// var win = [
//     '100 coin',
//     '500 coin',
//     '900 coin',
//     '10000 coin',

// ]
// console.log(win[random])

////////////////////////////////////////////////////////////////
// CALLBACK : dinh nghia funtion truyen qua doi so funtion khac 
/**Ham
 * Duoc truyen qua doi so
 * Duoc goi lai trong ham nhan doi so
 */
// function myfuntion(param){
//     // console.log(typeof param)
//     if(typeof param == 'function'){
//         param('Hoc lap trinh') 
//     }
// }
// function mycallback(value){ //HAM
//     console.log('value: ', value)
// }
// myfuntion(mycallback) //Duoc truyen qua doi so

// CALLBACK 2

///////////////////////////////////////////////////
// forEach, find, filter, some, every, reduce:
// var courses = [
//     'javascript',
//     'PHP',
//     'ruby'
// ]
// console.log(courses)

// courses.length =10;
// for(var index in courses){
//     console.log(courses[index])
// } // Loc phan tu khong theo do dai (10)

// FOREACH:
// courses.forEach(function(course, index, array){
//     console.log(course, index, array)
// })















////////////////////////////////////////////////////
//HTML DOM 
/** 3 Thanh phan:
 * 1.Element
 * 2.Atribute
 * 3.Text
 */

// -------------------------------------------------------

// Javascrip: Browser | Server (NodeJS)
// Browser: HTML -> DOM -> WED API

// console.log(document);

// document.write('hello guys')

// 66 Get element methods

var idNode =  document.getElementById('heading');
console.log({
    element: idNode
}) // cach 1
// console.log(idNode) // cach 2 

var classNode = document.getElementsByClassName('hoclaptrinh')
console.log(classNode)