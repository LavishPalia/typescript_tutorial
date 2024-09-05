function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

let combineValues: (a: number, b: number) => number; // function as type

combineValues = add;

// combineValues = printResult;

console.log(combineValues(5, 6));
