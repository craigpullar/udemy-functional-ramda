import * as R from 'ramda';

const users = [
  { name: 'alex', isActive: true, role: 'admin' },
  { name: 'Jack', isActive: true },
  { name: 'john', isActive: true },
];

const isActive = R.all(R.propEq('isActive', true));

console.log(isActive(users));

const anyActive = R.any(R.propEq('isActive', true));

console.log(anyActive(users));

const nonActive = R.none(R.propEq('isActive', true));

console.log(nonActive(users));

const isActiveAdmin = R.allPass([
  R.propEq('isActive', true),
  R.propEq('role', 'admin'),
]);

console.log(isActiveAdmin(R.head(users));

const isAnyActiveAdmin = R.anyPass([
  R.propEq('isActive', true),
  R.propEq('role', 'admin'),
]);

console.log(isAnyActiveAdmin(R.head(users)));

