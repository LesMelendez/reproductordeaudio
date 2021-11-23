let audio = document.getElementById("cancion");
let play_btn = document.getElementById("play");
let pause_btn = document.getElementById("pause")

play_btn.addEventListener("click", () => {
    audio.play();
});
pause_btn.addEventListener("click", () => {
    audio.pause();
});

