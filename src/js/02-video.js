import Player from '@vimeo/player';

const player = new Player('iframe', {
  id: 'vimeo-player',
});

player.on('play', function () {
  console.log('played the video!');
});

/* 1-- Додана бібліотека Vimeo плеєра npm install @vimeo/player --
   2-- */
