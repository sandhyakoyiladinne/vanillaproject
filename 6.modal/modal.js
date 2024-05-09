const modalbtn = document.querySelector(".modalbtn");
const modal = document.querySelector(".page");
const closebtn = document.querySelector(".close");
const showModal = () => {
  modal.classList.add("nextpage");
};
const hideModal = () => {
  modal.classList.remove("nextpage");
};
modalbtn.addEventListener("click", showModal);
closebtn.addEventListener("click", hideModal);





// const modalbtn = document.querySelector(".modalbtn");
// const modal = document.querySelector(".page");
// const closebtn = document.querySelector(".close");

// modalbtn.addEventListener("click", function () {
//   modal.classList.add("nextpage");
// });
// closebtn.addEventListener("click", function () {
//   modal.classList.remove("nextpage");
// });


