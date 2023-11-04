// Simple music app   
// Array of 5 songs
const playList = [
    'assets/audio/song1.mp3',
    'assets/audio/song2.mp3',
    'assets/audio/song3.mp3',
    'assets/audio/song4.mp3',
    'assets/audio/song5.mp3'
];
// current song playing
let currentSong = 0;
let audio = new Audio(`${playList[currentSong]}`);

document.querySelector('#playBtn').addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        document.querySelector('#playBtn').innerHTML = `<i class = "fa-solid fa-pause"></i>`;
    } else {
        audio.pause();
        document.querySelector('#playBtn').innerHTML = `<i class="fa-solid fa-play"></i>`;
    }
});
// progress bar
const ProgressBar = document.getElementById('progress_bar');
audio.addEventListener('timeupdate', updateProgressBar);

function updateProgressBar() {
    const currentTime = audio.currentTime;

    const duration = audio.duration;

    const progress = (currentTime / duration) * 100;
    ProgressBar.style.width = progress + '%';




}
// Next song 

document.querySelector('#nextBtn').addEventListener('click', () => {

    if (currentSong < playList.length - 1) {
        currentSong++;
        audio.src = `${playList[currentSong]}`;

        audio.play();

        document.querySelector('#playBtn').innerHTML = `<i class = "fa-solid fa-pause">`;

    }

});
// Previous song
document.querySelector('#previousBtn').addEventListener('click', () => {

    if (currentSong > 0) {
        currentSong--;
        audio.src = `${playList[currentSong]}`;

        audio.play()
    }

});