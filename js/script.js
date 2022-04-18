document.querySelector('.btn-1').onclick = () => {
    const pass = document.querySelector('.logpass');
    console.log(pass.value);
}

document.querySelector('.logpass').oninput = () => {
    const ranger = document.querySelector('.logpass').value;
    const spany = document.querySelector('span');
    spany.innerHTML = ranger;

}

document.querySelector('#btn-2').onclick = (event) => {
    event.preventDefault();
    const form = document.querySelector('form');
    console.log(form.elements.about.value);
    console.log(form.elements.sometext.value);
}

