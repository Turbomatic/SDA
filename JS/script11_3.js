const a = (a, b, c) => {
  if (
    a * a + b * b === c * c ||
    b * b + c * c === a * a ||
    a * a + c * c === b * b
  ) {
    return true;
  } else {
    return false;
  }
};
console.log(a(3, 4, 5));