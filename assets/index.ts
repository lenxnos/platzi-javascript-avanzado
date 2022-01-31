import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause()] });

const playButton: HTMLElement = document.querySelector("#playButton");
playButton.onclick = () => player.tooglePlay();

const muteButton: HTMLElement = document.querySelector("#muteButton");
muteButton.onclick = () => player.toogleMute();


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register(
    new URL('/sw.js', import.meta.url),
    { type: 'module' }
  )
    .catch((error) => {
      console.log(error.message);
    })
}