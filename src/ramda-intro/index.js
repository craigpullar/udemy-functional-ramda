import * as R from 'ramda';

const double = x => x * 2; // PURE AND BEAUTIFUL

let a = 2;
const doubleWithSideEffect = (x) => { // BAD
  a += 2;
  return x * a;
};

const myArray = [1, 2, 3];
const newArray = R.append(4, myArray);
console.log(newArray);
console.log(newArray.push(4)); // push is not immutable

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Alex' },
  { id: 3, name: 'Sarah' },
];

const alex = users.find(({ name }) => name === 'Alex');
console.log(alex);
const isAlex = R.propEq('name', 'Alex');
const rAlex = R.find(isAlex, users);
console.log(rAlex);

const wasBornInCountry = person => person.birthCountry === 'UK';
const wasNaturalised = person => !!person.naturaliseDate;
const isOver18 = person => person.age >= 18;

const isCitizen = person => wasBornInCountry(person) || wasNaturalised(person);
const isEligibleToVote = person => isOver18(person) && isCitizen(person);

const testUser = {
  age: 20,
  birthCountry: 'UK',
};

console.log(isEligibleToVote(testUser));

const test = R.both(value => value < 2, value => value > 0);
console.log(test(1));

const wasBornInCountry2 = R.propEq('birthCountry', 'UK');
const isCitizen2 = R.either(wasBornInCountry2, wasNaturalised);
const isEligibleToVote2 = R.both(isOver18, isCitizen2);

console.log(isEligibleToVote2(testUser));

console.log(isEligibleToVote(testUser));
