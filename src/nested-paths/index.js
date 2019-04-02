import * as R from 'ramda';

const bill = {
  nickname: 'bill',
  country: 'UK',
  personal: {
    profile: {
      name: 'Bill',
      surname: 'Williams',
      age: 20,
    },
  },
};

const mike = {
  nickname: 'mike',
  country: 'US',
  personal: {},
};


const getSurname = user => user.personal.profile.surname;

console.log(getSurname(bill));

// console.log(getSurname(mike)); FAILS

const getSurnameWithChecks = user => user
&& user.personal
 && user.personal.profile
  && user.personal.profile.surname;

console.log(getSurnameWithChecks(bill));

console.log(getSurnameWithChecks(mike));

const getSurnameWithR = R.pathOr('not set', ['personal', 'profile', 'surname']);

console.log(getSurnameWithR(bill));

console.log(getSurnameWithR(mike));
