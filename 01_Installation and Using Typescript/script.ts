const button = document.querySelector("button") as HTMLButtonElement;
const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

// the issue with the current code is that input values are strings and the result is their concatenation and not addition
// with typescript we make sure to pass numbers to the add functions and throw error otherwise.
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
