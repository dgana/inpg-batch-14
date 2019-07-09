var array = [1,2,3]

var object = {
  nama: 'nama',
  age: 'age'
}

var { 0: first, 1: second } = array

module.exports = {
  reduceMultiArray: (multiArr) => multiArr.reduce((obj, [key, value]) => ({ ...obj, [key]: value }),{})
}