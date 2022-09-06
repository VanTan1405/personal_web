var array = [1,5,7,8,9,15,8]

//In ra cac so chan trong mang:
// for(var i = 0; i<array.length;i++){
//     // var item = array[i]
//     if(array[i] %2==0){
//         console.log(array[i])
//     }
// }

//In ra cac so le trong mang:
// for(var i = 0; i<array.length;i++){
//     // var item = array[i]
//     if(array[i] %2==1){
//         console.log(array[i])
//     }
// }
//In ra cac so >= 5 trong mang
// for(var i = 0; i<array.length;i++){
//     // var item = array[i]
//     if(array[i] >=5){
//         console.log(array[i])
//     }
// }
//Tinh tong cac so chia het cho 5 trong mang:
// tong = 0;
// for (i=0;i<array.length;i++){
//     if(array[i] % 5 ==0){
//         tong += array[i]
//     }
// }
// console.log(tong)
//Tim tich 3 so dau trong mang 
// var i = array[0] * array[1] * array[2]
// console.log(i)
//Trong mang co phan tu nao la so 5 khong 
// var sonam = array.some(function(tim, index){
//     return array[tim] === 5; //CACH 1
// })
// console.log(sonam) 
// for(var i=0;i<array.length;i++){
//     if(array[i] == 5){
//         console.log('Tim thay phan tu ' + array[i])
//     }
// }





//////////
//MAP: map()
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
function courseHandler(course){
    return {
        id: course.id,
        Name: `Hoc ${course.Name}`
    }
}
var newcourse = courses.map(courseHandler)
console.log(newcourse)


//callback
function myfuntion(param){
    if(param == 'function'){
        param()
    }
}
function mycallback(value){
    console.log('value', value)
}
myfuntion(mycallback)