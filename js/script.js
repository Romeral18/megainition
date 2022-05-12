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





fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=d452e2d45273ef84e1c20a282f104a13')
    .then(function (resp) { return resp.json() }) // convert data to json
    .then(function (data) {
        console.log(data);
        document.querySelector('.package-name').textContent = data.name;
        document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
        document.querySelector('.disclaimer').innerHTML = data.weather[0]['description'];
    })
    .catch(function () {
        //catch any errors
    })