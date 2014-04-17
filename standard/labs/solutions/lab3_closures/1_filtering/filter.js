function isYoungerThan(age) {
  return function (person) {
    return person.age < age;
  }
}

function isOlderThan(age) {
  return function (person) {
    return person.age > age;
  }
}
