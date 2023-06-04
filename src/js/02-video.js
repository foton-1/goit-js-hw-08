// --//
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe, {
  // id: ,
  width: iframe.width,
});

// player.on('play', function () {
//   console.log('played the video!');
// });

const onPlay = function ({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
  console.log(seconds);
};
player.on('timeupdate', throttle(onPlay, 2000));
let actualTime = localStorage.getItem('videoplayer-current-time');
console.log(actualTime);
player
  .setCurrentTime(actualTime)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });

/* 1-- Додана бібліотека Vimeo плеєра: npm install @vimeo/player --
   2-- Ініціалізація плеєра у файлі скрипта: import Player from '@vimeo/player'; const iframe = document.querySelector('#vimeo-player');
   3-- Відстеження події timeupdate - оновлення часу відтворення: player.on('timeupdate', onPlay); 
   4-- Запис в локальне сховище часу відтворення: localStorage.setItem('videoplayer-current-time', 'timeupdate.seconds');
   5-- Відновлення відтворення зі збереженої позиції під час перезавантаження методом setCurrentTime()
   6-- Налаштування, щоб час відтворення оновлювався у сховищі не частіше 1с за допомогою бібліотеки lodash.throttle : npm i -g npm; throttle
*/
