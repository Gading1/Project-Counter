const countEl = document.getElementById("count-el");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    if (count > 0) {
      countEl.style.color = "green";
    }
    if (count < 0) {
      countEl.style.color = "red";
    }
    if (count === 0) {
      countEl.style.color = "black";
    }

    countEl.textContent = count;
  });
});

// function ColorNmbr() {
//   if (count > 0) {
//     countEl.style.color = "green";
//   } else if (count < 0) {
//     countEl.style.color = "red";
//   } else {
//     countEl.style.color = "black";
//   }
// }

// function increase() {
//   count += 1;
//   countEl.textContent = count;
//   ColorNmbr();
// }

// function reset() {
//   countEl.textContent = 0;
//   count = 0;
//   ColorNmbr();
// }

// function decrease() {
//   let countStr = count;
//   count -= 1;
//   countEl.textContent = count;
//   ColorNmbr();
// }
