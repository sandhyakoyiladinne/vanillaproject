let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".butn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("1")) {
      count--;
    } 
    else if (styles.contains("3")) {
      count++;
    } 
    else {
      count = 0;
    }

    if (count > 0) {
      value.style.color = "blue";
    }
    if (count < 0) {
      value.style.color = "orange";
    }
    if (count === 0) {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});