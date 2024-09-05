function add(n1: number, n2: number) {
  return n1 + n2;
}

// return type of printResult is void, which means return statement is not required
// although typescript infers the void return type for printResult function, we can explicitly assign as well as shown below
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(2, 5));
