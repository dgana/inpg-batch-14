var dor = [
  ['Dimitri', 'Foxes', 'dimitri@mail.com'],
  ['Alexei', 'Tigers', 'alexei@mail.com'],
  ['Sergei', 'sergei@mail.com', 'Foxes']
];

var students = []

for (var i = 0; i < dor.length; i++) {
  var object = {
    name: dor[i][0],
    class: dor[i][1],
    email: dor[i][2]
  }
  students.push(object)
}

var arrbaru = students.map((x, i) => {
  return {
    ...x,
    id: i + 1
  }
})

console.log(arrbaru)
