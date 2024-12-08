var tek = [];
var cift = [];

for (let x = 1; x <= 100; x++) {
  if (x % 2 == 0) {
    cift.push(x);
  } else {
    tek.push(x);
  }
}

function exists(sum) {
  return function (element) {
    return element == sum;
  };
}
let all = true;

for (let y = 0; y < tek.length; y++) {
  for (let z = y + 1; z < tek.length; z++) {
    let sum = tek[y] + tek[z];
    if (sum<=100 && cift.find(exists(sum))) {
      console.log(tek[y] + " + " + tek[z] + " = " + sum);
    } else {
      all = false;
    }
  }
}

if (all) {
  console.log("All in the array");
} else {
  console.log("Not all");
}
