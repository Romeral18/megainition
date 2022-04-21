
// for



// const div = document.querySelectorAll('.one');
// console.log(div);
// div.style.background = 'red';


// for (let i = 0; i < div.length; i++) {
//     console.log(div[i]);
//     div[i].style.background = 'red';
//     div[i].onclick = work;



// }

// function work() {
//     console.log('work!!!!!');
// }

// const b = document.getElementsByClassName('one');
// const c = document.getElementsByTagName('div')
// console.log(b);
// console.log(c);

// for (let i = 0; i < b.length; i++) {
//     b[i].style.border = '3px solid black';

// }


document.querySelector('button').onclick = () => {
    const r = document.querySelectorAll('input[type="radio"]');
    console.log(r);
    for (let i = 0; i < r.length; i++) {
        if (r[i].checked) {
            console.log(r[i].value);
        }
    }
}

for (let i = 0; i < 10; i++) {

    document.getElementById('out').innerHTML = i;
}