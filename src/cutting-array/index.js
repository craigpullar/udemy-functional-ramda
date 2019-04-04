import * as R from 'ramda';

const array = [1, 2, 3, 4, 5];
const string = 'abcde';

console.log(R.head(array));
console.log(R.head(string));

console.log(R.last(array));
console.log(R.last(string));

console.log(R.init(array));
console.log(R.init(string));

console.log(R.tail(array));
console.log(R.tail(string));

console.log(R.take(2, array));
console.log(R.take(2, string));

console.log(R.takeLast(2, array));
console.log(R.takeLast(2, string));

console.log(R.drop(2, array));
console.log(R.drop(2, string));

console.log(R.dropLast(2, array));
console.log(R.dropLast(2, string));
