function createCounter() {
  var count = 0;
  return function () {
    count++;
    return count;
  }
}
