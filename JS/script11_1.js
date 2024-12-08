// function surface(b) {
//   return b * b;
// }

// var a = function (b) {
//   return b * b;
// };

// let surface = (b) => {
//   return b * b;
// };

// let b = 5;

// let array = [5, 9, 10, 16];

// function search(value, index, array) {
//   if (value % 2 == 1) {
//     return value;
//   }
// }

// var b = array.find(search);

// console.log(b);

// let arr = ["text", "js", "c#", "java"];

// let string = "";
// for (let i = 0; i < arr.length; i++) {
//   string += `${arr[i]} `;
// }

// console.log(string);

// class Car{
//   constructor(brand, model){
//     this.brand = brand;7
//     this.model = model;
//   }
// }

// var car1 = new Car("Shit", "Ass");
// var (brand,model) = car1;
// console.log(brand,model);

var array = ["Ore", "Oreore", 1, 2];
let string = "";
let sum = 0;

function sortish(array) {
  let sum = 0;
  let string = "";

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      if (array[i].length <= 4) {
        array[i] = null;
      } else {
        string += array[i];
      }
    } else if (typeof array[i] === "number") {
      sum += array[i];
    }
  }
  array = array.filter((item) => item !== null);
  return { array, sum, string };
}

result = sortish(array);
console.log(result.sum);
console.log(result.string);
console.log(result.array);
