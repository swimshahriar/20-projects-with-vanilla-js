const video = document.getElementById('video');
const playBtn = document.getElementById('play');
const stopBtn = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');

// play and pause video
const toggleVideoStatus = () => {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
};

// update play/pause icon
const updatePlayIcon = () => {
  if (video.paused) {
    playBtn.innerHTML = '<i class="fa fa-play fa-2x" ></i>';
  } else {
    playBtn.innerHTML = '<i class="fa fa-pause fa-2x" ></i>';
  }
};

// update progress
const updateProgress = () => {
  progress.value = (video.currentTime / video.duration) * 100;

  // get mins
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // get secs
  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
};

// stop video
const stopVideo = () => {
  video.currentTime = 0;
  video.pause();
};

// set video progress
const setVideoProgress = () => {
  video.currentTime = (+progress.value * video.duration) / 100;
};

// Event Listener
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

playBtn.addEventListener('click', toggleVideoStatus);

stopBtn.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
