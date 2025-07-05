myArray = [
  ["item 1", "cat", [0,1,2], {name: "Bob", age: 30, height: "5.6 in."}],
  ["item 2", "dog", [3,4,5], {name: "Meg", age: 24, height: "5.8 in."}],
  ["item 3", "bird", [6,7,8], {name: "Sam", age: 63, height: "5.63 in."}],
  ["item 4", "horse", [9,10,11], {name: "Tom", age: 41, height: "5.6 in."}],
  ["item 5", "spider", [12,13,14], {name: "Lee", age: 15, height: "5.2 in."}]
]

console.log(myArray[1][3].name) // Meg => row 1, column 3, property: name
console.log(myArray[0][3].age) // 30 => row 0, column 3, property: age
console.log(myArray[3][2][0]) // 9 => row 3, column 2, sub-row 0

// return the whole array at index 0
console.log(myArray[0]) // ["item 1", "cat", [0,1,2], {name: "Bob", age: 30, height: "5.6 in."}]