var myAudio = document.getElementById("music");
var myAudioImage = document.getElementById("playpause");
var isPlaying = false;
var volume = document.getElementById('volume-slider');
var musicWindowTrigger = document.getElementById('musicNote');
var thePlayer = document.getElementById('musicPlayer');


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

musicWindowTrigger.addEventListener("click", function() {

  if(this.className.match('is-active')) {

    thePlayer.classList.toggle("is-active");

    setTimeout(function(){ 
  
      thePlayer.classList.toggle("display-none");
    }, 500); 

  } else {

      thePlayer.classList.toggle("display-none");
 

    thePlayer.classList.toggle("is-active");
  
  }

});

musicWindowTrigger.addEventListener("mousedown", function() {
  musicWindowTrigger.src="resource/music_note_pressed.png";
});

musicWindowTrigger.addEventListener("mouseup", function() {
  musicWindowTrigger.src="resource/music_note.png";
});




myAudioImage.addEventListener("mousedown", function() {


  if (isPlaying == false) {

    myAudioImage.src="resource/play_pressed.png";

  } else if (isPlaying == true) {

    myAudioImage.src="resource/pause_pressed.png";

  }

});

myAudioImage.addEventListener("mouseup", function() {

  if (isPlaying == false) {

    myAudioImage.src=="resource/play.png";

  } else if (isPlaying == true) {

    myAudioImage.src="resource/pause.png";

  }

});



