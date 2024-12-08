var a = function () {
  var array = [];
  for (var x = 1; x <= 30; x++) {
    array.push(x);
  }
  return array;
};

var tek = function (arr) {
  var array = [];
  for (var x = 0; x < arr.length; x++) {
    if (x % 2 == 0) {
      array.push(arr[x]);
    }
  }
  return array;
};

var nextTek = function (arr) {
  sum = 0;
  for (var x = 0; x < arr.length; x += 2) {
    sum += arr[x];
  }
  console.log(sum);
};

nextTek(tek(a()));
//console.log(nextTek(tek(a())));
