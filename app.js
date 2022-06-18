const open = document.getElementById("open");
const modal_container = document.getElementById("modal_container");
const close = document.getElementById("close");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");
const videoPlayer = document.querySelector(".video_player");
const video = videoPlayer.querySelector(".video");
const playButton = videoPlayer.querySelector(".play_button");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

open.addEventListener("click", () => {
  modal_container.classList.add("show");
});

close.addEventListener("click", () => {
  modal_container.classList.remove("show");
});

playButton.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
    e.target.textContent = "||";
  } else video.pause();
  e.target.textContent = "▶";
});
