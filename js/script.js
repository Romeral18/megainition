let f1 = document.querySelector('.f-1'); // button
function one() {
    console.log('work');


}

one();

// f1.onclick = one; //без круглых скобок


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


function multi() {
    console.log(a * b);
    return a * b;
}


let c1 = multi();
let c2 = 10 * multi();
console.log(c1, c2);

function multi2(x = 9, y = 8) {
    return x * y;
    // выполняться не будет/будет проигнрорировано

}

console.log(multi2(5, 6));
console.log(multi2(33, 23));
console.log(multi2(a, 6));

console.log(multi2());
console.log(multi2(10));

// function (){}
f1.onclick = function () {
    console.log('Hello');
}

f1.onclick = () => {
    console.log('=>>>>>>');
}

f2 = document.querySelector('.f-2').onclick = function () {
    console.log('f22222222');
}

f2 = document.querySelector('.f-2').onclick = () => {
    console.log('arrow');
}
