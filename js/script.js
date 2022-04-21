const out = document.querySelector('.out');
console.log(out);

for (let i = 0; i < 5; i++) {
    for (let k = 0; k < 10; k++) {
        out.innerHTML += '*';
    }
    out.innerHTML += '<br>';

}