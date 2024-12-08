// Detyre :
// Ndertoni nje array  me 4 elemente te ndryshem numra dhe shkronja . Nese array eshte numer te kalohet ne nje array  tjeter , nese eshte shkronje ti bashkangjitet stringut . Perdorni funksionet Anonime dhe CallBacks
//Zgjidheni ushtrimin ne 3 menyra te ndryshme
// do perdorni variablat let dhe const dhe var kur duhet  ,  gjithashtu perdorni konceptin hoisting  ne njeren prej zgjidhjeve

a = [1, 2.4, "asd","dsa"];

var numbers = function (arr) {
  var array = [];
  for (var x = 0; x < arr.length; x++) {
    if (typeof arr[x] == "number") {
      array.push(arr[x]);
    }
  }
  return array;
};
var strings = function (arr) {
  var array = [];
  for (var x = 0; x < arr.length; x++) {
    if (typeof arr[x] == "string") {
      array.push(arr[x]);
    }
  }
  return array;
};
console.log(numbers(a));

var stringbuilder = function(func){
  let string = strings(a);
  let y= string[0]+""+string[1];
  return y;
}
console.log(stringbuilder(strings(a)));
var a;