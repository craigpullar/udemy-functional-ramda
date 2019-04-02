const add = (a, b) => a + b;

console.log(add(1));

// My initial attempt at a curry function
const curry = (fn, callLength = 0) => {
  const maxCallLength = fn.length;
  return (arg) => {
    const newFunction = fn.bind(this, arg);
    const newCallLength = callLength + 1;
    return newCallLength >= maxCallLength ? newFunction() : curry(newFunction, newCallLength);
  };
};

const curriedAdd = curry(add);

console.log(curriedAdd(1));
console.log(curriedAdd(1)(2));

const get = curry((property, object) => object[property]);
const objects = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
];

const ids = objects.map((get('id')));
console.log(ids);

const getIds = objectsParam => objectsParam.map((get('id')));

console.log(getIds(objects));

const map = curry((fn, values) => values.map(fn));

const getIds2 = map(get('id'));

console.log(getIds2(objects));

const fetchFromServer = () => new Promise((resolve) => {
  resolve({
    user: 'Jack',
    posts: [
      { title: 'Why curry' },
      { title: 'Functional programming' },

    ],
  });
});

const myRetrievedPosts = fetchFromServer()
  .then(data => data.posts)
  .then(posts => posts.map(post => post.title))
  .then(titles => console.log(titles));

console.log(myRetrievedPosts);
const myRetrievedPosts2 = fetchFromServer()
  .then(get('posts'))
  .then(map(get('title')))
  .then(console.log);

console.log(myRetrievedPosts2);

// Courses curry function

const curry2 = (fn) => {
  const arity = fn.length;
  return function f1(...args) {
    if (args.length >= arity) {
      return fn(...args);
    }
    return (...moreArgs) => f1(...args, ...moreArgs);
  };
};

const curriedAdd2 = curry2(add);
console.log(curriedAdd2(1)(2));

// My attempt did not give the option for passing multiple
// args in one go, and theres is long code so...

const superiorCurry = (fn) => {
  const arity = fn.length;
  return (...args) => (args.length >= arity
    ? fn(...args)
    : curry(fn.bind(this, ...args)));
};

const superiorCurriedAdd = superiorCurry(add);

console.log(superiorCurriedAdd(1, 2));
console.log(superiorCurriedAdd(1)(2));
