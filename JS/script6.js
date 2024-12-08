let a = new Array(50);
function randomizer(array){
    for(let x=0;x<array.length;x++){
        array[x]=Math.floor(Math.random()*(100+1));
    }
}
function add(array){
    randomizer(array);
    let sum = 0;
    for (var x = 0; x < array.length; x++) {
        sum += array[x];
    }
    return sum;
}
console.log(a);
console.log(add(a));