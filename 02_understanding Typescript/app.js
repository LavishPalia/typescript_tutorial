function addAndPrint(n1, n2, cb) {
    var sum = n1 + n2;
    var returnResult = cb(sum);
    console.log(returnResult);
}
addAndPrint(1, 4, function (result) {
    console.log(this);
});
