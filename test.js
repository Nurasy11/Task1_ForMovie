"use strict"

for(let i = 0; i <3;i++) {
    console.log("Name:"+i);
    for(let j = 0; j <3;j++) {
        console.log(`Value of ${i}:`+j);
}
}
// *
// **
// ***
// ****
// *****
// var lines = 7;
// var str = " ";
// var star = "*";
// for (var i = 0; i < lines; i++) {
//   str += star;
//   console.log(str);
// }

// let star='*';
// let str ='';
// for (let i = 0; i < 5; i++) {
//     str+=star;
//     console.log(str);
// }

let length=7;
let result='';
for(let i=0; i<length; i++) {
    for(let j=0; j<i; j++) {
        result+='*';
    }
    result+='\n';

}

console.log(result);


function firstTask() {
    // Пишем решение вот тут
    // let num=5;
   for(let num=5; num<=10; num++){
    console.log("Number:"+num);
   }
}
firstTask();

function secondTask() {
    // Пишем решение вот тут
    for(let num=20; num>=10; num--){
        if(num>13){
        console.log("Number:"+num);
        }
       }
    
}
secondTask();

function thirdTask() {
    // Пишем решение вот тут
    for(let i=0;i<=10;i++){
        if(i%2===0 && i>1){
        console.log("Number:"+i);
        }
    }
    
}
thirdTask();

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

let i=2;
while(i<=16){
    if (i % 2 === 0) {
        i++;
       continue;    
    } else {
        console.log(i);      
    }
    i++;
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
}

function fifthTask() {
    const arrayOfNumbers = [];

    for(let i = 5; i < 11; i++) {
        arrayOfNumbers[i-5]=i;
    }
    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}

fifthTask()


