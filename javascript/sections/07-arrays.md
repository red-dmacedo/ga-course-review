# Arrays
## Keywords
- Data **`Type`**
  - A data `type` is a `class` of `object` that has a *predefined* set of methods and/or `properties`
  - Different data `types` include, but are not limited to:
    - `String` - Most any text enlcosed in quotes `''`, double quotes `""`, or backticks ` `` `
    - `Number` - The physical symbol of a number: `0`, `1`, `2`
      - A `number` that is in string format `"0"`, is a `string` and ***not*** a `number`
    - `Boolean` - A value of `true` or `false` that is *not* a string: ~~`"true"`~~ ~~`"false"`~~
    - `Array` - a single-column table/list of data
  - If you find yourself with a variable whose data `type` is unknown to you, you can use the `typeof()` function to find out.
    - `typeof( new Array ) === "Array"` <= this line creates a new Array object, gets the `type` of the object, and checks to see if the value is `"Array"`
    - `typeof( "my string" ) === "String"`
- `Array`
  - An `array` is a data `type` that stores other data `types` in a list-like format.
  - An `array` can store *any* other data `type`
  - An `array` like a number line, start its `index` at `0`
  - All `arrays` in javascript are enclosed by square brackets `[]`
  - Items within an `array` are separated by a comma `,`
    - Spaces between values are optional, but help with readability
    - `["item 1", "item 2", 0, 1]`
- `Index`
  - An `index` refers to the numerical position of the `item` you are selecting within an array
  - The `indices` of an `array` will always be `1` less than the `length` of the `array`
    - This is why a `for-i` loop ends at `Array.length - 1`
  - In relation to the table below...
    - `"item 3"` is at index `[2]`
    - To call upon `"item 3"`, you must state the `array`'s name, and then state the index in square brackets next to the `array` name.
    - Example of calling `"item 3"`: `Array[2]`

|       | 0           |
| :---: | :---------: |
| 0     | "item 1"    |
| 1     | "item 2"    |
| 2     | "item 3"    |
| 3     | "item 4"    |
| 4     | "item 5"    |

***Example***: Using the above table
```javascript
/*
  - Arrays are generally declared as constants to
    prevent them from shrinking or growing.

  - Although the size of the array cannot change,
    when declared as const, the items within each
    index can be modified to your whim.
  - This assumes that the data type you are trying
    to modify can be modified
*/
const myArrayName = [ "item 1", "item 2", "item 3", "item 4", "item 5" ]
console.log( myArrayName[2] ) // "item 3"

```

# Multi-dimensional Arrays

|       | 0           | 1           |
| :---: | :---------: | :---------: |
| 0     | "item 1"    | "cat"       |
| 1     | "item 2"    | "dog"       |
| 2     | "item 3"    | "bird"      |
| 3     | "item 4"    | "horse"     |
| 4     | "item 5"    | "spider"    |

|       | 0           | 1           | 2              | 3                                          |
| :---: | :---------: | :---------: | :------------: | :-----------------------------------------:|
| 0     | "item 1"    | "cat"       | [ 0, 1, 2 ]    | {name: "Bob"; age: 30; height: "5.6 in."}  |
| 1     | "item 2"    | "dog"       | [ 3, 4, 5 ]    | {name: "Meg"; age: 24; height: "5.8 in."}  |
| 2     | "item 3"    | "bird"      | [ 6, 7, 8 ]    | {name: "Sam"; age: 63; height: "5.63 in."} |
| 3     | "item 4"    | "horse"     | [ 9, 10, 11 ]  | {name: "Tom"; age: 41; height: "5.6 in."}  |
| 4     | "item 5"    | "spider"    | [ 12, 13, 14 ] | {name: "Lee"; age: 15; height: "5.2 in."}  |
