document.querySelector('.btn-1').onclick = () => {
    const pass = document.querySelector('.logpass');
    console.log(pass.value);
}

document.querySelector('.logpass').oninput = () => {
    const ranger = document.querySelector('.logpass').value;
    const spany = document.querySelector('span');
    spany.innerHTML = ranger;

}