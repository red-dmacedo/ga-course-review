# Looping
Most commonly, loops will be used to cycle through arrays, objects, and arrays of objects. The loop will allow you to perform some operations on/with the data inside.
## Common Loops
### 1. The **`for-i`** loop
- Skeleton: `for(let i=0; i < Array.length - 1; i++)`
  - `i` can be any variable name you choose
    - `i` in this case, is an index number starting at `0`, and ending at `Array.length - 1`
    - Most commonly `i` starts at `0` however using `i = 1` in the `initialization` will start the loop at the 2nd index.
    - Keep in mind that this variable will always be the `index` of your loop
    - Best practice would be to declare `i` as `i`, `index` or `idx` and *only* re-use `i/index/idx` as part of your loop statements
    - When your variable is declared at the beginning of a *for-i* loop, it will retain the final value it held when the loop is exited
      - This is why `i` needs to be re-assigned a starting value when starting a new loop
  - `for ( initialization; condition; afterthought){codeblock}`
    - `initialization`
      - Initializes the variable that will track the index of your loop. `i = 0` or `i = Array.length-1` (depending on where you want to start and end)
      - Decrementing your index `i` ***is*** possible using `i--` or `i = i - 1` in your `afterthought`
    - `condition`
      - An expression to be evaluated at the start of each loop
      - The loop will only stop when this `condition` evaluates to `false`
    - `afterthought`
      - This section of code will run at the end of each loop.
      - Your `i/index/idx` should always be incremented or decremented here.
      - Failure to update your index will likely result in an **infinite** loop, especially without a full understanding of this loop.
      - In the event your program is running infinitely, attempt the following key combinations to close the program:
        - Windows / Linux: `ctrl + c`
        - Mac: `command + c`
    - `{codeblock}`
      - This is where you can interact with the objects within the array
      - When you want to reference a value in the array, you must declare it with `Array[i]` where `i` is the current index, and `Array` is the current array you are looping through.
### 2. The **`for-of`** loop
- Skeleton: `for( i of Array ){codeblock}`
  - Note: `i` in this case is **NOT** an `index`.
  - `i` refers to the current `item` within the `Array` while you loop though all of the items.
  - `for-i` vs. `for-of`
    - `for-i` requires stating the Array with an index: `Array[0]`
    - But with a `for-of` loop, `i` *is* the value of `Array[0]`

***Example***:
```javascript
// testArray holds an array of strings
testArray = [ 'one', 'two', 'three', 'four', 'five' ]

for( item of testArray ){
  // First loop:    item === 'one'
  // Second loop:   item === 'two'
  // Third loop:    item === 'three'
  // Fourth loop:   item === 'four'
  // Fifth loop:    item === 'five'
  switch(item){
    case 'one':
      console.log(1);
      break;

    case 'two':
      console.log(2);
      break;

    case 'three':
      console.log(3);
      break;

    case 'four':
      console.log(4);
      break;

    case 'five':
      console.log(5);
      break;
  }
};
```
### 3. The ***.forEach()*** method
- Skeleton: `Array.forEach( (element, index, Array) => {} )`
  - `element`
      - This parameter is *always* passed to the function
      - The **value** of the item at the current `index`
        - Similar to a `for-of` statement
    - `index`
      - The numerical value of the current `index`
      - An optional parameter that is always passed as the 2nd argument
      - starts at `0` and will auto-increment itself during the loop
    - `Array`
      - A rarely used parameter that will pass the `Array` into your function.
      - Allows you to use statements involving the index
        - Example: `Array[index]`
- Can only take a function as the argument
  - Nameless functions are fine as depicted above
- Always attempts to pass a maximum of `3` parameters and a minimum of `1`, into the function
  - `element`, `index`, and `Array` are always passed as the first 3 parameters in your function
    - `index` and `Array` can be left out of your parameters by simply not stating them, however this does not allow you to declare additional parameters as the new names will take the place of `index` or `Array`
    - Example: `Array.forEach( (element) => {} )`
- **Note:**
  - Due to the **fact** that *.forEach()* requires a function, it cannot be broken with a `break` statement.
  - If you would like to leave the function early, simply use a `return` statement
    - `return` can be used even when you are not returning a value

***Example***:
```javascript
const numArray = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ===== with a function =====
function handleNumArray(element, idx, arr){
  let logObject = {}; // Initialize the 'logObject' object

  /*
    - The 'element' is the value that was stored in the 'arr' at index 'idx'
    - element === arr[idx] // true
  */

  logObject.element = element; // Create and assign the 'element' property
  logObject.idx = idx; // Create and assign the 'idx' property
  logObject.arr = arr; // Create and assign the 'arr' property

  /*
    - The following line depicts the fact that you can do whatever
      you want/need to with your parameters
  */
  logObject.whereInTheIndexAmI = idx; // Create and assign the 'whereInTheIndexAmI' property
  console.dir( logObject ); // print to console
}

numArray.forEach(handleNumArray);

// ===== with a nameless arrow function =====
numArray.forEach( (element, idx) => {
  console.log(`${idx}: ${element}`) // log the index and the element at that index
});
```