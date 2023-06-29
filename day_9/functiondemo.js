//using function name
function additon(x,y) {           //we can also defined in x,y then we can't defined log !!
    return x+y;
}
console.log(additon(98,23));

// function without name variable 
 const square =function multiplication(x) {
    return x*x;
}
console.log(square(10));

// arrow function
const k=['banana','mango','cherry','watermelon']
const k2=k.map(function(p){
    return p.length;
});

console.log("normal way",k2); 

const k3=k.map((k)=>k.length);
console.log("using arrow function",k3);

// first calling then function
console.log(square(9));
// document.write(square(8));
// function square(n) {
//   return n*n;    
// }


