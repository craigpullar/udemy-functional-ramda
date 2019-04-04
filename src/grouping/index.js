import * as R from 'ramda';

const students = [
  {
    name: 'Alex',
    score: 84,
    isActive: true,
  },
  {
    name: 'Jack',
    score: 64,
    isActive: false,

  },
  {
    name: 'John',
    score: 46,
    isActive: true,

  },
];

const groups = R.groupBy(student => (student.score > 50 ? 'positive' : 'negative'));

console.log(groups(students));

const group2 = R.groupBy(R.prop('isActive'));

console.log(group2(students));
