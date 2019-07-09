var helper = require("./index");
var { reduceMultiArray } = helper;

function deleteUndefinedKeys(object) {
  return reduceMultiArray(Object.entries(object).filter(([, val]) => val));
}

function deleteUndefinedKeys(object) {
  return Object.entries(object)
    .filter(([, val]) => val)
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }),{})
}

console.log(
  deleteUndefinedKeys({
    name: "Dimitri",
    age: undefined,
    email: "dimitri@mail.com"
  })
);
// { name: 'Dimitri', email: 'dimitri@mail.com' }

console.log(
  deleteUndefinedKeys({
    name: undefined,
    age: undefined,
    email: undefined
  })
);
// {}
