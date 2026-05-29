// var sum= function(a){
//     console.log("Hello World"+a);
//     var c=10;
//     return function(b){
//        return a+b+c;
//     }
// }
//  var store= sum(2);//calling the outer function and storing the inner function in a variable
//  console.log(store(3));


////////////////////////

// function main(name){
   
//     function sayMyName(){
//         console.log(name);
//     }
//     return sayMyName;
// }
//  let consoleVidya= main("Vidya");

//  console.log(consoleVidya);


function adder(num){
    function add(b){
        console.log(num+b);
    }
    return add;
}

const addTo5= adder(5);
const addTo10= adder(10);
addTo5(2);
addTo10(10);
addTo5(2);