import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);

const videoTimeSaver = evt => {
  localStorage.setItem('videoplayer-current-time', JSON.stringify(evt.seconds));
};

player.on('timeupdate', throttle(videoTimeSaver, 1000));

const time = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(time || 0);
