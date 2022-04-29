const arroy = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for (let i = 0; i < arroy.length; i++) {
    for (let k = 0; k < arroy[i].length; k++) {
        // console.log(arroy[i][k]);
    }
}

let out = '';
for (let i = 0; i < arroy.length; i++) {
    for (let k = 0; k < arroy[i].length; k++) {
        if (arroy[i][k] > 4) {
            out += arroy[i][k];
        }

        document.querySelector('.out').innerHTML += out + ' ';

    }
    out += '<br>';
}
console.log(out);

const arroy3 = [1, 0, 0, 0, 0];
let j = 0;
document.querySelector('.out2').innerHTML = arroy3;

document.querySelector('button').onclick = () => {
    if (j + 1 < 5) {
        arroy3[j] = 0;
        arroy3[j + 1] = 1;
        j++;
    }
    document.querySelector('.out2').innerHTML = arroy3;
}



