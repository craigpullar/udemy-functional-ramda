import * as R from 'ramda';

const toSlug = input => encodeURIComponent(input.split(' ').map(word => word.toLowerCase()).join('-'));

const slug = toSlug('This is composition');
console.log(slug);

const toSlugComposed = input => encodeURIComponent(R.join('-',
  R.map(R.toLower)(
    R.split(' ')(input),
  )));

console.log(toSlugComposed('This is composition'));

const toSlugCleanComposed = R.compose(
  encodeURIComponent,
  R.join('-'),
  R.map(R.toLower),
  R.split(' '),
);

console.log(toSlugCleanComposed('This is composition'));
