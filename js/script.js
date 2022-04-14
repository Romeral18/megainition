const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.list');



button.addEventListener('click', (e) => {
    const node = document.createElement('li')
    node.innerHTML = input.value
    list.append(node)
    list.prepend(node)
    inputvalue = ''
})
