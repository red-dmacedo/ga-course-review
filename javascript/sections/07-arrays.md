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
  - Much like a number line, an `array` has a starting `index` of `0`
    - 0-1-2-3-4
  - All `arrays` in javascript are enclosed by square brackets `[]`
  - Items within an `array` are separated by a comma `,`
    - Spaces between values are optional, but help with readability
    - `["item 1", "item 2", 0, 1]`
- `Index`
  - An `index` refers to the numerical position of the `item` you are selecting within an array
  - The `indices` of an `array` will always be `1` less than the `length` of the `array`
    - This is why a `for-i` loop ends at `Array.length - 1`
  - You can `index` infinitely into an `array` until there is no `item` at the index you have called
  - The ***order*** of `indices` of an `array` call:
    - first `[]` - `row index`
    - second `[]` - `column index`
    - third `[]` - only usable if the `item` at `[row][column]` is an array
      - Refers to `sub-arrays` within your `array`
      - You can continue to `index` into these `sub-arrays` by adding more square brackets `[]`
      - Example: `const myArray = [ [ [9, 10], 8, 7 ], "item X" ]`  =>
        - `myArray[0][0][0] === 9` - Since there are `3` `arrays` between `9` and the outside of the `array`, you must `index` into all `3` to extract `9`
        - `myArray[0][1] === 8`
        - `myArray[1] === "item X"`
        - `myArray[0][0][1] === 10`
  - In relation to the table below...
    - | idx   | 0           |
      | :---: | :---------: |
      | 0     | "item 1"    |
      | 1     | "item 2"    |
      | 2     | "item 3"    |
      | 3     | "item 4"    |
      | 4     | "item 5"    |
    - `"item 3"` is at index `[2]`
    - To call upon `"item 3"`, you must state the `array`'s name, and then state the index in square brackets next to the `array` name.
    - Example of calling `"item 3"`: `Array[2]`

  - ***Example***: Using the above table
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

  - Negative `Index`
    - Note: `javascript` only supports `negative indices` when using the `.at()` method of an `array`
      - `myArray.at(-1)`
      - Don't let this discourage your use of `negative indices` as they are more widely supported in other languages
    - Since an `array` starts at `0` and ends at `Array.length`, you can reverse the order by using negative numbers as your `index`
    - Consider the following array `const myArray = [6,5,4,3,2]`
      - This table depicts the `value` of the array at each positive and negative `index` as indicated by the `idx` `column`
      - | idx | myArray |
        | :---| :---:   |
        | -4  | 5       |
        | -3  | 4       |
        | -2  | 3       |
        | -1  | 2       |
        | 0   | 6       |
        | 1   | 5       |
        | 2   | 4       |
        | 3   | 3       |
        | 4   | 2       |
      - `myArray.at(-2) === 3`
      - `6` in `myArray` will ***never*** have a `negative index`
# Multi-dimensional Arrays

| idx   | 0           | 1           |
| :---: | :---------: | :---------: |
| 0     | "item 1"    | "cat"       |
| 1     | "item 2"    | "dog"       |
| 2     | "item 3"    | "bird"      |
| 3     | "item 4"    | "horse"     |
| 4     | "item 5"    | "spider"    |

| idx   | 0           | 1           | 2              | 3                                          |
| :---: | :---------: | :---------: | :------------: | :-----------------------------------------:|
| 0     | "item 1"    | "cat"       | [ 0, 1, 2 ]    | {name: "Bob", age: 30, height: "5.6 in."}  |
| 1     | "item 2"    | "dog"       | [ 3, 4, 5 ]    | {name: "Meg", age: 24, height: "5.8 in."}  |
| 2     | "item 3"    | "bird"      | [ 6, 7, 8 ]    | {name: "Sam", age: 63, height: "5.63 in."} |
| 3     | "item 4"    | "horse"     | [ 9, 10, 11 ]  | {name: "Tom", age: 41, height: "5.6 in."}  |
| 4     | "item 5"    | "spider"    | [ 12, 13, 14 ] | {name: "Lee", age: 15, height: "5.2 in."}  |
