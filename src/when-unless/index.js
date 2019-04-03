import * as R from 'ramda';

const truncate = (str) => {
  if (str.length > 10) { return str.substring(0, 10).concat('...'); }
  return str;
};

console.log(truncate('12345'));
console.log(truncate('12345678910'));

const lengthGreaterThan10 = R.compose(
  R.gt(R.__, 10),
  R.prop('length'),
);
const appendElipsisToSubString10 = R.compose(
  R.concat(R.__, '...'),
  R.take(10),
);
const truncateBetter = R.when(
  lengthGreaterThan10,
  appendElipsisToSubString10,
);

console.log(truncateBetter('12345'));
console.log(truncateBetter('12345678910'));

const truncateUnless = R.unless(
  lengthGreaterThan10,
  appendElipsisToSubString10,
);

console.log(truncateUnless('12345'));
console.log(truncateUnless('12345678910'));
