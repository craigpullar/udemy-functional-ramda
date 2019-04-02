const add = (a, b) => a + b;

console.log(add(1));

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
