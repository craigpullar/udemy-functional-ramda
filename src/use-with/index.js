import * as R from 'ramda';

// Its converge bu the arguement index is called on the fn index
const result = R.useWith(R.max, [
  R.inc,
  R.dec,
])(2, 3);

console.log(result);

const reducer = (state, action) => {
  const cuttedArray = R.init(state); // All elements apart from last one
  return R.append(action.payload, cuttedArray);
};

const state = [1, 2, 3];
const action = {
  payload: 1,
};

const newState = reducer(state, action);

console.log(newState);


// point free with useWith

const newReducer = R.useWith(
  R.flip(R.append),
  [
    R.init,
    R.prop('payload'),
  ],
);

console.log(newReducer(state, action));
