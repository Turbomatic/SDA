var a = 5 ;
var b = 9 ;
var c = 3 ;
// if((a+b)%2==1){
//     console.log(a+b);
// }
// else{
//     console.log(a%b);
// }

// if((a+b)%c==0){
//     console.log((a+b)%c);
// }
// if((a+b)%c==0&&(a+c)%2==0){
//     console.log(a+c);
// }
// if((a+b)&c==0 || ((a+b)%5==0 && (a+b)%2==0)){
//     console.log("Jonil");
// }
// else{
//     console.log("failed");
// }

// var sum = 0;
// var sum1 = 0;
// // for(var i=0;i<=100;i++){
// //     if(i%2==0){
// //         sum+=i;
// //     }
// //     if(i%2==1){
// //         sum1+=i;
// //     }
// // }
// // console.log(sum);
// // console.log(sum1);

// var i = 0 ;
// while (i<=100){
//     if(i%2==1){
//         sum+=i;
//     }
//     if(i%2==0){
//     sum1+=i;
//     }
//     i++;
// }
// sum=sum+sum1;
// console.log(sum);


// var a=[100];
// for(var i =0;i<a.length;i++){
//     a[i]==i+1;
// }
// for(var j in a){
//     sum += j;
// }
// console.log(sum);


// function add(a,b){
//     var sum = a+b;
//     return sum;
// }
// function mult(a,b){
//     var mult = a*b;
//     return mult;
// }

// console.log(mult(a,b));

var a = new Array(10);
for(var i = 0;i<a.length;i++){
    a[i]=i+1;
}

function adEv(array){
    var sum = 0;
    for(var x in array){
        if(x%2==0){
            sum += array[x];
        }
    }
    return sum;
}

function adOd(array){
    var sum = 0;
    for(var x in array){
        if(x%2==1){
            sum+= array[x];
        }
    }
    return sum;
}

function adBoth(array){
    var evens = adEv(array);
    var odds = adOd(array);
    var total = evens+odds;
    return total;
}
console.log(adEv(a));
console.log(adOd(a));
console.log(adBoth(a));

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

function replace(array){
    var add = array[array.length-1]+2
    for(var x=0;x<array.length;x++){
        if(array[x]%2==1){
            if(array[x]%3==0){
                array[x] = add;
                add += 2;
                var sum = 0;
                for(var y=0; y<array.length;y++){
                    sum += y;
                }
                console.log(sum);
            }
        }
    }
    return array;
}

console.log(replace(array));