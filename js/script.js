const one = document.querySelector('.one');
const b1 = document.querySelector('.b-1');


one.classList.add('one-2');

const f1 = function f1() {
    one.style.width = '200px';
    one.style.height = '90px';
    one.backgroundColor = 'red';
    console.log('Hiiiiii');
}

b1.onclick = f1;

const one2 = document.querySelector('.one-2');
const b2 = document.querySelector('.b-2');

const f2 = function f2() {
    one2.style.backgroundColor = 'orange';


}

b2.onclick = f2;

const one3 = document.querySelector('.one-3');
const b3 = document.querySelector('.b-3');
const cont = document.querySelector('.container');

const f3 = function f3() {
    cont.children[4].classList.remove('one-3');
    this.classList.add('three');
    cont.children[3].setAttribute('data', 6);
}

b3.onclick = f3;



