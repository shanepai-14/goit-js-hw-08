import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const VCT_KEY = 'videoplayer-current-time';
const onPlay = function (event) {
  localStorage.setItem(VCT_KEY, event.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(JSON.parse(localStorage.getItem(VCT_KEY)) || 0);
