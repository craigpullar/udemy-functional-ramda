import * as R from 'ramda';

const toSlugCleanComposed = R.compose(
  encodeURIComponent,
  R.join('-'),
  R.map(R.toLower),
  R.split(' '),
);

console.log(toSlugCleanComposed('this is ComposItion'));

const toSlugCleanComposed2 = R.compose(
  encodeURIComponent,
  R.tap(console.log),
  R.join('-'),
  (word) => {
    console.log(word);
    return word;
  },
  R.tap(words => console.log(words)),
  R.map((word) => {
    console.log(word);

    return R.toLower(word);
  }),
  R.split(' '),
);

console.log(toSlugCleanComposed2('this is ComposItion'));
