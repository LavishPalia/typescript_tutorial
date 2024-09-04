var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
// the issue with the current code is that input values are strings and the result is their concatenation and not addition
// with typescript we make sure to pass numbers to the add functions and throw error otherwise.
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
