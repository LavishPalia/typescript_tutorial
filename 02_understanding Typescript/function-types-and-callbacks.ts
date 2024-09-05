function addAndPrint(n1: number, n2: number, cb: (result: number) => void) {
  const sum = n1 + n2;

  cb(sum);
}

addAndPrint(1, 4, (result) => console.log(result));

// although the return type of callback function is void, we can still retrun some value from it and
// typescript will not through any error, this is because
// return type of void means, the function will not handle any return value
