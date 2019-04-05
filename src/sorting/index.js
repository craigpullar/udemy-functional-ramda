import * as R from 'ramda';

const unsorted = [1, 3, 5, 2, 7];

const asc = R.sort((a, b) => a - b);

console.log(asc(unsorted));

const desc = R.sort((a, b) => b - a);

console.log(desc(unsorted));

const asc2 = R.sort(R.ascend(R.identity));

const desc2 = R.sort(R.descend(R.identity));

console.log(asc2(unsorted));
console.log(desc2(unsorted));

const unsorted2 = [
  {
    name: 'John',
  },
  {
    name: 'james',
  },
  {
    name: 'alex',
  },
];

const ascByName = R.sort(R.ascend(R.prop('name')));

console.log(ascByName(unsorted2));


const descByName = R.sort(R.descend(R.prop('name')));

console.log(descByName(unsorted2));

const sort = R.sortBy(R.compose(R.toLower, R.prop('name')));

console.log(sort(unsorted2));

const users = [
  {
    name: 'alice',
    age: 40,
  }, {
    name: 'bob',
    age: 30,
  }, {
    name: 'clara',
    age: 40,
  },
];
const sortByAgeName = R.sortWith([
  R.descend(R.prop('age')),
  R.ascend(R.prop('name')),
]);

console.log(sortByAgeName(users));
