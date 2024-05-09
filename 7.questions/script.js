document.addEventListener("click", function (event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("question-btn")) {
      const question = clickedElement.closest(".question");
      if (question) {
        document.querySelectorAll(".question").forEach(function (item) {
          if (item !== question) {
            item.classList.remove("content");
          }
        });
        question.classList.toggle("content");
      }
    }
});
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const question = e.currentTarget.parentElement.parentElement;

    question.classList.toggle("content");
  });
});





























// const questions = document.querySelectorAll(".question");
// questions.forEach(function (question) {
//   const btn = question.querySelector(".question-btn");x 
//   btn.addEventListener("click", function () {
//     questions.forEach(function (item) {
//       if (item !== question) {
//         item.classList.remove("show-text");
//       }
//     });
//     question.classList.toggle("show-text");
//   });
// });
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });