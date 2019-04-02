import * as R from 'ramda';

const isValidArray = [6, 5, 4, 3, 2];
const isInvalidArray = [3, 4, 6, 1];

const isFirstElementBiggest = elements => elements[0] === elements.sort((a, b) => b - a)[0];

console.log(isFirstElementBiggest(isValidArray));
console.log(isFirstElementBiggest(isInvalidArray));


const isValidArray2 = [6, 5, 4, 3, 2];
const isInvalidArray2 = [3, 4, 6, 1];
const sortByBiggestFirst = R.sort(R.descend(R.identity));
const isFirstElementBiggestBetter = R.converge(R.equals, [
  R.head,
  R.compose(
    R.head,
    sortByBiggestFirst,
  ),
]);

console.log(isFirstElementBiggestBetter(isValidArray2));
console.log(isFirstElementBiggestBetter(isInvalidArray2));
