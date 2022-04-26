const one = document.querySelector('.one');
const b1 = document.querySelector('.b-1');


one.classList.add('one-2');

const f1 = function f1() {
    one.style.width = '200px';
    one.style.height = '90px';
    one.backgroundColor = 'red';
    console.log('Hiiiiii');
    console.log(document.querySelector('link').getAttribute('href'));
}

b1.onclick = f1;

const one2 = document.querySelector('.one-2');
const b2 = document.querySelector('.b-2');

const f2 = function f2() {
    one2.style.backgroundColor = 'orange';
    const dataInfo = cont.children[3].getAttribute('data');
    console.log(dataInfo);


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



let a = document.createElement('div');

a.innerHTML = 'Hello';
a.classList.add('one-3');
a.style.position = 'absolute';
a.style.top = '500px';
a.style.left = '200px';



document.querySelector('.one').appendChild(a);

const ar1 = ['String', 18, 0]
const j = document.createElement('div');


j.classList.add('out');

document.querySelector('.container').appendChild(j);

const j1 = document.querySelector('.out');
b1.onclick = () => {
    j1.innerHTML = ar1;
    console.log('lo');
}

const ar2 = ['Red', 34, 0];



