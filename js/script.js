const button = document.querySelector('button');
const input = document.querySelector('.age');

button.onclick = () => {
    const num = +input.value;
    if (num >= 25 && num < 60) {
        console.log('You can vote');
    }
    else if (num >= 60) {
        console.log('sorry, but you can not vote. See you in next life');
    }

    else if (num != 60) {
        console.log('You suck!');
    }


    else {
        alert('oooo, you are so young. Do not worry. See yo soon!');
    }

    switch (num) {
        case 20:
            console.log('Happy birthday');
            break;

        case 24:
            console.log('ufff, you are very closed');
            break;
        case 25:
            console.log('Congratulations, you can change this world');
            break;
        case 60:
            console.log('you can not vote for anyone:(');
            break;
        default:
            console.log('Have a good day, sir');
            break;


    }
}




