const arroy = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

for (let i = 0; i < arroy.length; i++) {
    for (let k = 0; k < arroy[i].length; k++) {
        console.log(arroy[i][k]);
    }
}

let out = '';
for (let i = 0; i < arroy.length; i++) {
    for (let k = 0; k < arroy[i].length; k++) {
        out = arroy[i][k];
        document.querySelector('.out').innerHTML += out + ' ';
    }
    document.querySelector('.out').innerHTML += '<br>';
}

