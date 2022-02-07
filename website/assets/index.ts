import MediaPlayer from '@lenxnos/platzimediaplayer/lib/MediaPlayer';
import AutoPlay from '@lenxnos/platzimediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@lenxnos/platzimediaplayer/lib/plugins/AutoPause';
import Ads from '@lenxnos/platzimediaplayer/lib/plugins/Ads';

const video = document.querySelector("video");
const player = new MediaPlayer({ el: video, plugins: [new AutoPlay(), new AutoPause(), new Ads()] });

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