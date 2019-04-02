const addTo = passed => inner => inner + passed;

const addToThree = addTo(3);

console.log(addToThree(5));
console.log(addToThree(4));
