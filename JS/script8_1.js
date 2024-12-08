var array = ["a", "c", 1, 4, 5, "d"];

console.log(array);

function replace(array) {
  for (var x = 0; x < array.length; x++) {
    if (typeof array[x] === "string") {
      array[x] = array[x].charCodeAt(0) - "a".charCodeAt(0) + 1;
    }
  }
  return array;
}

function sum(array) {
  for (let y = 0; y < array.length; y++) {
    for (let z = y + 1; z < array.length; z++) {
      let sum = array[y] + array[z];
      console.log("Shuma eshte " + sum);
    }
  }
}

function diff(array) {
  for (let y = 0; y < array.length; y++) {
    for (let z = y + 1; z < array.length; z++) {
      if (array[y] >= array[z]) {
        let diff = array[y] - array[z];
        console.log("Diferenca eshte " + diff);
      } else {
        let diff = array[z] - array[y];
        console.log("Diferenca eshte " + diff);
      }
    }
  }
}

replace(array);
console.log(array);
sum(array);
diff(array);
