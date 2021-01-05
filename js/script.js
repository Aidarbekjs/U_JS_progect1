let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколко фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколко фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

// let num = 0;
// do {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//   b = prompt('На сколько оцените его?', '');

//   if (a != null && b != null && a !='' && b !='' && a.length < 50) {
//   personalMovieDB.movies[a] = b;
//   console.log('done');
//   } else {
//     console.log('error');
//     num--;
//   }
// num++;
// }
// while (num<2);
// while (num < 2) {
//   const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a !='' && b !='' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//         } else {
//           console.log('error');
//           num--;
//         }
//    num++;
//       }

function rememberMyFilms() {

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a !='' && b !='' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done');
        } else {
          console.log('error');
          i--;
        }
}
}

rememberMyFilms();

function detectPersonalLevel() {
if (personalMovieDB.count<10) {
  alert('not much films watched');
} else if (personalMovieDB.count >=10 && personalMovieDB.count<30) {
  alert('classic filmwatcher');
} else if(personalMovieDB.count >=30) {
  alert('you are a movie fan');
}else {
  alert('error');
}
}
detectPersonalLevel();


function showMyDB() {
  if(personalMovieDB.privat === false) {
    console.log(personalMovieDB);
  }
}
showMyDB();

function writeYourGenres() {
  for(let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i-1] = prompt(`Your favourite genre number ${i}`, '');
  }
}

writeYourGenres();