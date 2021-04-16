"use strict"; //клевая штука - новый стандарт
let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}
start();
console.log(numberOfFilms);
const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?',''),
        b = prompt('На сколько оцените его?','');
  if (a != null && b != null && a.length < 50 && b.length < 50 && a !='' && b != '') {
    personalMovieDB.movies[a]=b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
  }
}
rememberMyFilms();
function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    alert ('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    alert ('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    alert ('Вы киноман');
  } else {
    alert ('Произошла ошибка');
  }  
}
detectPersonalLevel();
console.log(personalMovieDB);

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  } 
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt (`Ваш любимый жанр под номером ${i}`);
  }
}
writeYourGenres();
// const num= 50;
// switch (num) {
//   case 49:
//     console.log('Nope');
//     break;
//   case 100:
//     console.log('Nope');
//     break;
//   case 50:
//     console.log('Yep')
//     break;
//   default:
//     console.log('Nevermind');
//     break;
// }// switch === строгое сравнение
// let num = 50;
// // while (num < 55) {
// //   console.log(num);
// //   num++;
// // }
// // do {
// //   console.log(num);
// //   num++;
// // } while (num < 55);
// for (let i = 1; i < 8; i++) {
//   console.log(num);
//   num++;
// }
