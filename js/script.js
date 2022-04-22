let f1 = document.querySelector('.f-1'); // button
function one() {
    console.log('work');


}

one();

f1.onclick = one; //без круглых скобок


console.log(1 + one());
console.log(one());

function two() {
    console.log('work 22222');
    return 54;

}

two();

console.log(1 + two());

let a = 8;
let b = 9;
let c;

function multi() {
    console.log(a * b);
    c = a * b;
}

multi();

console.log(c);