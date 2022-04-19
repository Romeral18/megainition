
// for



const div = document.querySelectorAll('.one');
console.log(div);
// div.style.background = 'red';


for (let i = 0; i < div.length; i++) {
    console.log(div[i]);
    div[i].style.background = 'red';
    div[i].onclick = work;
    div[i].style.height = '100px'


}

function work() {
    console.log('work!!!!!');
}

const b = document.getElementsByClassName('one');
const c = document.getElementsByTagName('div')
console.log(b);
console.log(c);

for (let i = 0; i < b.length; i++) {
    b[i].style.border = '3px solid black';

}
