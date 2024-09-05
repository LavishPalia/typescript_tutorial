interface UnionType {
  number1: string | number;
}

function combine(num1: string | number, num2: string | number) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + " " + num2.toString();
  }
}

const combinedAges = combine(30, 12);
console.log(combinedAges);

const fullname = combine("Lavish", "Palia");
console.log(fullname);
