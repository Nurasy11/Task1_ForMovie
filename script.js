/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */
'use strict'

let numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?', '');
let personalMovieDB={
    count:`${numberOfFilms}`,
    movies:{},
    actors:{},
    genres:[],
    privat:false 
};

const a=prompt('Один из последних просмотренных фильмов?', ''),
b=prompt('На сколько оцените его?', ''),
c=prompt('Один из последних просмотренных фильмов?', ''),
d=prompt('На сколько оцените его?', '');

if(typeof d=='string'){
personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
}
else{
    personalMovieDB
}
// personalMovieDB.movies[a]=b;
// personalMovieDB.movies[c]=d;
console.log(personalMovieDB);

// const num=50;
// if(num>51){
//     console.log("Error 404");
// }
// else if(num<49){
//     console.log("Error 49");
// }
// else{
//     console.log("Good")
// }
// const num2=50;

// switch(num2){
//     case 49:
//     console.log("Error 409");
//         break;
//     case 51:
//     console.log("Error 51");
//         break;
// default:
//     console.log("Інім айналып келси");
//     break;

// }

// let a1,b1,c1,d1='done';
// console.log(a1 || b1 || c1 || d1);
console.log( NaN || 2 || undefined ); //2
console.log( NaN && 2 && undefined ); // NaN
console.log( 1 && 2 && 3 ); //3
console.log( !1 && 2 || !3 ); //false
console.log( 25 || null && !3 ); //25
console.log( NaN || null || !3 || undefined || 5);  //5
console.log( NaN || null && !3 && undefined || 5); //5
console.log( 5 === 5 && 3 > 1 || 5); //true

// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;


// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;


// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!')
// }


let num=50;

// while(num <=55){
    
//     console.log('Number:'+num);
//     num++;
// }

// do{
//     console.log('Number:'+num);
//     num++;
// }while(num <=55);
 

for(let i=0; i<8; i++){
    console.log('Number:'+num);
    num++;
}