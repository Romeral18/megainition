let a = 26;

if (a < 25) {
    console.log('you can not enter');
}
else if (a >= 25 && a < 60) {
    console.log('you can enter');
}
else {
    console.log('you are very old');
}

switch (a) {
    case 15:
        console.log('you are very young to go');
        break;
    case 24:
        console.log('you are near the access');
        break;
    case 25:
        console.log('great!!!!!');
        break;
    default:
        console.log('okkkkkk!');
        break;
}






