// const arroy = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
// ]

// for (let i = 0; i < arroy.length; i++) {
//     for (let k = 0; k < arroy[i].length; k++) {
//         // console.log(arroy[i][k]);
//     }
// }

// let out = '';
// for (let i = 0; i < arroy.length; i++) {
//     for (let k = 0; k < arroy[i].length; k++) {
//         if (arroy[i][k] > 4) {
//             out += arroy[i][k];
//         }

//         document.querySelector('.out').innerHTML += out + ' ';

//     }
//     out += '<br>';
// }
// console.log(out);

// const arroy3 = [1, 0, 0, 0, 0];
// let j = 0;
// document.querySelector('.out2').innerHTML = arroy3;

// document.querySelector('button').onclick = () => {
//     if (j + 1 < 5) {
//         arroy3[j] = 0;
//         arroy3[j + 1] = 1;
//         j++;
//     }
//     document.querySelector('.out2').innerHTML = arroy3;
// }


// const a = {
//     "a": 'Hi',
//     "b": 1111,
//     "z2222": 'toodoo',

// };

// a.z = '4444';
// a.w55 = 44444;

// console.log(a);

// let out = '';
// delete a.b;
// for (let key in a) {
//     out += a[key];
// };
// document.querySelector('.out').innerHTML = out;

let a1 = 8;

function t1() {
    document.querySelector('.out-1').innerHTML = a1;

}
document.querySelector('.btn-1').onclick = t1;

let a2 = 8;
function t2() {
    return a2;

}
document.querySelector('.btn-2').onclick = function () {
    document.querySelector('.out-2').textContent = t2();
}

function t3(a, b) {
    return a * b;
}
document.querySelector('.btn-3-1').onclick = function () {
    document.querySelector('.out-3').textContent = t3(3, 4);
}
document.querySelector('.btn-3-2').onclick = function () {
    document.querySelector('.out-3').textContent = t3(5, 6);
}

function t4(a) {
    return 2022 - a;
}

document.querySelector('.ageCount').onclick = () => {
    const inputDate = document.querySelector('.birthdayDate');
    console.log(inputDate.value);
    let a = inputDate.value;
    console.log(t4(a));
}

function t5(name) {
    return `Hello ${name}`;
}
document.querySelector('.greeting').onclick = () => {
    const inputName = document.querySelector('.name');
    console.log(inputName.value);
    let a = inputName.value;
    console.log(t5(a));
}
//Task6

function getRandomInt(c, d) {
    c = Math.ceil(c);
    d = Math.floor(d);
    return Math.floor(Math.random() * (d - c)) + c;
}

document.querySelector('.randomNumberCount').onclick = () => {
    const c = document.querySelector('.randomNumber-1').value;
    const d = document.querySelector('.randomNumber-2').value;
    console.log(c);
    console.log(d);
    console.log(getRandomInt(c, d));

}

