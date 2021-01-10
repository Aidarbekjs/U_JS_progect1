"use strict";

const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  
  start: () => {
    personalMovieDB.count = +prompt('Сколко фильмов вы уже посмотрели?', '');
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколко фильмов вы уже посмотрели?', '');
    }
  },
  rememberMyFilms: () => {
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
    },
  detectPersonalLevel: () => {
    if (personalMovieDB.count<10) {
      alert('not much films watched');
    } else if (personalMovieDB.count >=10 && personalMovieDB.count<30) {
      alert('classic filmwatcher');
    } else if(personalMovieDB.count >=30) {
      alert('you are a movie fan');
    }else {
      alert('error');
    }
    },
    toggleVisibleMyDB:() => {
      if(personalMovieDB.privat) {
        personalMovieDB.privat = false;
      }else {
        personalMovieDB.privat = true;
      }
    },
  showMyDB: () => {
    if(personalMovieDB.privat === false) {
      console.log(personalMovieDB);
    }
  },
 
  writeYourGenres: () => {
    for(let i = 1; i <= 3; i++) {
      let genre = prompt(`Your favourite genre number ${i}`, '');

      if (genre == '' || genre === null) {
        alert('Wrong inputs');
        i--;
      } else {
        personalMovieDB.genres[i-1] = genre;
      }
    
    } 
      personalMovieDB.genres.forEach((item, i) => {
        console.log(`Favourite genre ${i+1} is ${item}`);
       });
    
  }
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


