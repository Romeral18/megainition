const a = [1, 2, 3, 4, 5];
const b = ['z', 'x', 'y', 't'];

console.log(a);
console.log(b);

a.push(6, 7, 8, 9);

console.log(a);

b.pop();

console.log(b.pop());
console.log(b);

console.log(a);
delete a[3];
console.log(a);

a.splice(2, 2, 'Hello MF');

console.log(a);

a.shift(0);
console.log(a);

a.unshift(0);
console.log(a);
