import * as R from 'ramda';

const user = {
  name: 'john',
  surname: 'flint',
};

const nameLens = R.lens(R.prop('name'), R.assoc('name'));

const result = R.view(nameLens, user);
console.log(result);

const result2 = R.set(nameLens, 'Alex', user);
console.log(result2);
console.log(user);

const name = R.view(nameLens, user);
const upperName = R.toUpper(name);
const result3 = R.set(nameLens, upperName, user);
console.log(result3);

const result4 = R.over(nameLens, R.toUpper, user);
console.log(result4);

const simpleLens = R.lensProp('name');
const result5 = R.over(simpleLens, R.toUpper, user);
console.log(result5);
