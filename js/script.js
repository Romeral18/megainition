let out = document.querySelector('.out');
console.log(out);

// for (let i = 0; i < 5; i++) {
//     for (let k = 0; k < 10; k++) {
//         out.innerHTML += '*';
//     }
//     out.innerHTML += '<br>';

// }

for (let i = 1; i <= 25; i++) {

    for (let k = 1; k <= i; k++) {
        out.innerHTML += '*';
    }
    out.innerHTML += '<br>';
}