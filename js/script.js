// for (let i = 0; i < 6; i++) {
//     console.log(i);
// }

// let k = 0;

// while (k < 5) {

//     k++
//     console.log('k: ' + k);


// }

// let sum = 0;
// let p = 0;
// while (p <= 3) {
//     sum = sum + p;
//     p++

// }
// console.log('sum= ' + sum);

const out = document.querySelector('.out');
let p = 0;
let outStr = '';
let flag = 10;


while (p < 11) {
    let p1 = 0;
    while (p1 < 11) {
        if (p1 < flag) {
            outStr += '&nbsp';
        }
        else {
            outStr += '*';
        }
        p1++
    }
    outStr += '<br>'
    flag--
    p++

}
out.innerHTML = outStr;
console.log(out.value);