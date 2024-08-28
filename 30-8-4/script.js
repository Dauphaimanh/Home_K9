// JS

var progressBar = document.querySelector(".progress-bar");
var progress = document.querySelector(".progress-bar .progress");
var progressSpan = document.querySelector(".progress-bar .progress span");

var progressBarWidth = progressBar.clientWidth;
var isDragging = false;
var offsetLeft = 0;
var rate = 0;

function handleDrag(e) {
  var spaceMove = e.clientX - progressBar.offsetLeft;
  rate = Math.max(0, Math.min(100, (spaceMove / progressBarWidth) * 100));
  progress.style.width = `${rate}%`;
  updateTimer(rate);
}

function updateTimer(newRate) {
  var currentTime = (audio.duration / 100) * newRate;
  timer.innerText = getTimeFormat(currentTime);
  if (isDragging) {
    timer.style.display = "block";
    timer.style.left = `${progressBar.offsetLeft + (newRate / 100) * progressBarWidth}px`;
  } else {
    timer.style.display = "none";
  }
}

progressBar.addEventListener('mousedown', function (e) {
  if (e.button === 0) {
    isDragging = true;
    offsetX = e.offsetX;
    offsetLeft = progressBar.offsetLeft;
    handleDrag(e);
    document.addEventListener('mousemove', handleDrag);
  }
});

progressSpan.addEventListener('mousedown', function (e) {
  if (e.button === 0) {
    e.stopPropagation();
    isDragging = true;
    offsetX = e.offsetX;
    offsetLeft = e.target.offsetLeft;
    handleDrag(e);
    document.addEventListener('mousemove', handleDrag);
  }
});

document.addEventListener('mouseup', function () {
  document.removeEventListener('mousemove', handleDrag);
  if (isDragging) {
    isDragging = false;
    audio.currentTime = (audio.duration / 100) * rate;
  }
});

var clientXSpan = 0;
var offsetLeft = 0;
function handleDrag(e) {
    console.log(offsetLeft);
    var spaceMove = e.clientX - clientXSpan + offsetLeft;
    var rate = (spaceMove / progressBarWidth) * 100;
    if (rate < 0) {
        rate = 0;
    }
    if (rate > 100) {
        rate = 100;
    }
    progress.style.width = `${rate}%`;
}

// deal with the player

var audio = document.querySelector("audio");
console.log(audio.duration);
var playAction = document.querySelector(".player .play-action i");
var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;


var getTimeFormat = function(seconds) {
    var mins = Math.floor(seconds / 60);
    seconds = Math.floor(seconds - mins * 60);
    return `${mins < 10 ? "0" + mins : mins}:${seconds < 10 ? "0" + seconds : seconds}`;
};

audio.addEventListener('canplay', function () {
    durationEl.innerText = getTimeFormat(audio.duration);
});

playAction.addEventListener('click', function () {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

audio.addEventListener('play', function () {
    playAction.classList.replace('fa-play', 'fa-pause');
});
audio.addEventListener('pause', function () {
    playAction.classList.replace('fa-pause', 'fa-play');
});
audio.addEventListener('timeupdate', function () {
    currentTimeEl.innerText = getTimeFormat(audio.currentTime);
    var rate = (audio.currentTime / audio.duration) * 100;
    progress.style.width = `${rate}%`;
});

var timer = document.querySelector(".player .progress-bar .progress span");

progressBar.addEventListener("mousemove", function (e) {
    timer.style.display = "block";
    timer.style.left = `${e.offsetX}px`;
    rate = (e.offsetX / this.clientWidth) * 100;
    var currentTime = (audio.duration / 100) * rate;
    timer.innerText = getTimeFormat(currentTime);
});

progressBar.addEventListener("mouseout", function () {
    timer.style.display = "none";
});

progressSpan.addEventListener("mousemove", function (e) {
    e.stopPropagation();
});