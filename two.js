const mybutton = document.getElementById("mybtn");
const label1 = document.getElementById("mylab1");
const label2 = document.getElementById("mylab2");
const label3 = document.getElementById("mylab3");
const label4 = document.getElementById("mylab4");

const min = 0;
const max = 9;

let rollsLeft = 3; // 🎟 player has 5 chances

mybutton.addEventListener("click", function () {
  if (rollsLeft <= 0) return; // stop if no rolls left

  // Disable button while rolling
  mybutton.disabled = true;
  mybutton.textContent = `Rolling... (${rollsLeft} left)`;

  let count = 0;
  const roll = setInterval(() => {
    // generate random numbers
    let roundnum1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let roundnum2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let roundnum3 = Math.floor(Math.random() * (max - min + 1)) + min;
    let roundnum4 = Math.floor(Math.random() * (max - min + 1)) + min;

    // display numbers
    label1.textContent = roundnum1;
    label2.textContent = roundnum2;
    label3.textContent = roundnum3;
    label4.textContent = roundnum4;

    count++;

    // stop rolling after ~2 seconds
    if (count > 20) {
      clearInterval(roll);
      rollsLeft--; // reduce number of tries left

      if (rollsLeft > 0) {
        mybutton.disabled = false;
        mybutton.textContent = `Roll Again (${rollsLeft} left)`;
      } else {
        mybutton.disabled = true;
        mybutton.textContent = "No rolls left ❌";
      }
    }
  }, 10);
});
