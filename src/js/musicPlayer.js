var myAudio = document.getElementById("music");
var myAudioImage = document.getElementById("playpause");
var isPlaying = false;
var volume = document.getElementById('volume-slider');
myAudio.volume = volume.value / 100;

function togglePlay() {
  isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function() {
  isPlaying = true;
  myAudioImage.src="resource/pause.png";
};
myAudio.onpause = function() {
  isPlaying = false;
  myAudioImage.src="resource/play.png";
};

volume.addEventListener("change", function(e) {
    myAudio.volume = e.currentTarget.value / 100;
})