console.log("Welcome to spotify");
let songIndex = 0;
let audioElement = new Audio("audios/1.mp3");
let masterPlay = document.getElementById("masterplay");
let myProgressBar = document.getElementById("myProgressBar");
let songs = [
    {songName: "salam-e-Ishq",    filePath: "audios/1.mp3",  coverPath: "covers/1.jpg"},
    {songName: "salam-e-Ishq",  filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
]
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-regular fa-circle-play");
    masterPlay.classList.add("fa-regular fa-circle-pause");
  }
  else{
    audioElement.pause();
    masterPlay.classList.remove("fa-regular fa-circle-pause");
    masterPlay.classList.add("fa-regular fa-circle-play");
  }
});
audioElement.addEventListener('timeupdate', ()=>{ 
  // Update Seekbar
  progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
  myProgressBar.value = progress;
})