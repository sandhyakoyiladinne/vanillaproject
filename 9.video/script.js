// const btn = document.querySelector(".switch");
// const video = document.querySelector(".video video");

// btn.addEventListener("click", function () {
//   if (!btn.classList.contains("slide")) {
//     btn.classList.add("slide");
//     video.pause();
//   } else {
//     btn.classList.remove("slide");
//     video.play();
//   }
// });


document.addEventListener("DOMContentLoaded", function () {
  const switchBtn = document.querySelector(".switch");
  const video = document.querySelector(".video");

  switchBtn.addEventListener("click", function () {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});