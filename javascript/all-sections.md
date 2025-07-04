# Control Flow
## Concept
*Control flow* refers to the *order* in which code is executed within a program 
  - All script files are executed from ***top-to-bottom***.
  - Any code defined in the following **code block types** are skipped until they are explicitly called:
    - **functions**
    - **arrow functions**
    - **objects**
    - any **variable** that is set to a value
      - strings
      - arrays
      - objects
      - Example: `const myVariableName = 'value'`
      
***Example:***
```javascript
const myVariable = 'value'
/*
- While this will set the value of myVariable to the string: 'value', it does NOT
  return a value or call upon the variable known as myVariable

- Note: to call a variable, it is as simple as re-stating the variable name, which
  will return the value stored in that variable.
*/

console.log( myVariable )
/*
The above statment says the following:
- Call upon the "console" object
- Use the "log" method within the console object
- Pass the variable known as "myVariable" as the FIRST parameter
- The ouput should be shown in your console and should be the string: "value"
*/
```
# Boolean Values
## Keywords
  - **Boolean** - any variable or conditional statement that results in a `true` or `false` value.
  - **Operator** - a symbol that performs a specific operation *(mathematical, relational, or logical)*.
    - `===` - **Strict equality**: 
    - `==` - **Loose equality**
    - `<` - **Less than**
    - `>` - **Greater than**
    - `<=` - **Less than or equal to**
    - `>=` - **Greater than or equal to**
    - `!` - Invert `true` or `false` statements
      - Common Names: **Exclamation Point**, **Bang** symbol, **Not** operator
      - `!(true)` - will result in `false`
      - `!(false)` - will result in `true`
      - `!(0 > 1)` - will result in `true` because the orginal result was `false`
    - `!==` - Strict in-equality: return `true` if the left-hand value is NOT equal to the right-hand value
      - `(true !== false)` - will return `true` because `true` isNot equal to `false`
  - **Conditional Statement** - a statement that utilizes an operator to result in a `true` or `false` value.
    - Usually used within the parentheses of an `if` statement.
    - Ex 1: `if zero is greater than 1` is the same as `if( 0 > 1 ){}`
    - Ex 2: Store result in a variable: `const myBoolean = ( 0 > 1 )` <== this will allow you to call upon myBoolean within an if statement: `if(myBoolean){}`
  
***Example***
```javascript
const myBoolean = true

if(myBoolean){}
if(true){} // this statment says EXACTLY the same thing as the above if() statement

// myBoolean = false // <== this will cause an error because "myBoolean" was declared as a constant

let myNewBoolean = (
  true ||
  false ||
  (0 > 1)
) /*
  <== proof that you can combine many conditional statements into one and
  return a single true/false value.
*/

/*
  If only one statement from myNewBoolean is true, then
  the whole statement returns as true. This is how the || (OR) keyword works.
*/
if(myNewBoolean){} // because the statement results in 'true', the codeblock {} will run.


myNewBoolean = ( // you can re-assign myNewBoolean because it was declared with the 'let' keyword
  true &&
  false &&
  (0 > 1)
)
/*
- If only one statement from above results in false, the entire result will be false.
- This is how the && (AND) keyword works
*/

if(myNewBoolean){} // because the statement results in 'false', the codeblock {} will NOT run.
```
# Branching
Branching allows you make "decisions" within your code.
## `if()` statements
If statments allow you to make a decision based on a `true` / `false` value
- Common Name: `if-then` statement
- Skeleton: `if(){}`
  - `()` is where you declare a condition to evaluate as `true` or `false`
  - `{}` is where you place the code you want to run when your condition evaluates to `true`

***Example 1***
```javascript
const doug = {} // create an object named doug
doug.species = 'cat' // assign the string 'cat' to the 'species' PROPERTY of the 'doug' OBJECT

if( doug.species === 'cat' ){ /* do stuff here */ }
```
***Example 2***
```javascript
const doug = {} // create an object named doug
doug.species = 'cat' // assign the string 'cat' to the 'species' PROPERTY of the 'doug' OBJECT

doug.isCat = () => { // add the isCat() method to the 'doug' object
  return ( doug.species === 'cat' ) // return the result of this condition as true or false
};

if( doug.isCat() ){ /* do stuff here */ }
/*
- Because doug.isCat is a METHOD, you must call it like you would a FUNCTION().
- PS: this works because the RETURN statement within the isCat() function will return a true / false value.
*/
```
## Simplifying `if()` using the ternary `?` operator
### An if statement can be simplified using a ternary `?` operator only if:
  - the statement contains **both** a THEN `{}` **and** an else `else{}`
  - There is no need for `else if(){}` statements

#### Writing a ternary statement:
A `ternary` statment has the same structure as a normal `if(){}else{}` statement
- Written as `if()`: `if ( Condition ) { true-codeblock } else { false-codeblock }`
- Written as ternary `?`: `( Condition ) ? true-codeblock : false-codeblock`
- Ternary `?` skeleton: `( ) ? :`
  - `( Condition )` is stated within parentheses
  - the ternary `?` operator acts as your THEN `{}` statement
  - the colon `:` acts as your `else` statement

***Example 1***
```javascript
// The following 2 lines are equal if() statements
if( 'condition is true' ) { 'then run this' } else { 'run this' }
( 'condition is true' ) ? 'then run this' : 'run this'
```
***Example 2***
```javascript
// To write a ternary statement, begin by writing your standard if()
if( true ) { console.log('Option 1: true') } else { console.log('Option 2: false') };

// Next, write your ternary statement by extracting the corresponding parts from your if()
( true ) ? console.log('Option 1: true') : console.log('Option 2: false')


// Remember that a ternary statement cannot be used if you require "else if()" statements

```
## `switch( case )` statements
A `switch(case)` statement has a few distinct parts that are easy to understand.
1. Skeleton: `switch(){}`.
    - `()` holds the condition being tested.
    - `{}` holds the code to run.
      - this code includes `case 'item':` statements that are candidates for equality.
2. `case 'item':`
    - `case` is a keyword that declares when you want to check whether `'item'` is equal to your `()` condition
    - Colon `:` is used to declare the block of code to run when `'item'` is equal to your `()` condition.
    - `'item'` is what you are checking for equality within your `()` condition.
      - `switch('item')` is tested against `case 'item':`
      - if `myVariable = 30` then `switch(myVariable)` is tested against `case 20:` and `case 30:`
    - `break;` is required to exit the `switch()` statement early and prevent further execution of the `switch()`
      ```javascript
      myVariable = 30
      
      switch(myVariable){
        case 20:
          myVariable = 30;
          break;

        case 30:
          myVariable = 20;
          break;
      };
      ```
3. `default:`
    - An optional statement that will run when there are no matching cases... much like `else{}` blocks.
4. Fall-through
    - Refers to a specific `case` where you define a `case 'item':` without a codeblock below
    - When doing this, the next `case 'item':` statement is automatically true (only when a previous `case 'item':` statement is true)
      - This is why `break;` is required to end your codeblock

***Example***: Full `switch()` statement
```javascript
let chipType = 'amd x64'

switch( chipType ){
  // Each of the following case statements is written correctly.
  // Try not to bounce between styles too much.

  // this style is appropriate when only one line is needed
  case 'bannana': { console.log('bannana'); break; }; 
  
  /*
    - The following case statement does not use codeblock {} format.
    - Instead, it will run the code listed after the colon : like normal
      and requires the break; statement to leave the switch() early.
    - Lines after the colon : are indented (until the next 'case' statement)
  */
  case 'intel silver':
    console.log( 'intel silver' );
    break;

  // - The following case statement uses proper codeblock {} format.
  case 'amd x64': {
    console.log('amd x64');
    break;
  };

  /*
    - The following statements are an example of Fall-through
    - if chipType === 'amd x32' then run all
      code afterwards...until the break; statement
  */
  case 'amd x32':
  case 'amd':
    console.log('old amd');
    break;

  /*
    The default statement is not required, but can be used to
    do something when nothing is matched.
  */
  // default: {}
};
```

A `switch(case)` statement is most helpful when you need to test one variable that may have different values at different times within your program. The following codeblock depicts two functions that do excatly the same thing. One of them is written with `if(){} else{}` statements, and the other is written with a `switch(case)` statement.
```javascript
function testSpeciesWithIfs(species){
  if( species === 'human' )           { console.log( 'is Human' ) }
  else if( species === 'chipmunk' )   { console.log( 'is Chipmunk' ) }
  else if( species === 'cow' )        { console.log( 'is Cow' ) }
  else                                { console.log( `Unable to identify: ${species}` ) }
};

function testSpeciesWithSwitchCase(species){
  switch( species ){
    case 'human':       { console.log( 'is Human' ); break; };
    case 'chipmunk':    { console.log( 'is Chipmunk' ); break; };
    case 'cow':         { console.log( 'is Cow' ); break; };
    default:            { console.log( `Unable to identify: ${species}` ); };
  }
};

// All strict checks below will return true

// 'is Human'
let mySpecies = 'human'
console.log( testSpeciesWithIfs( mySpecies ) === testSpeciesWithSwitchCase( mySpecies )  );
console.log( testSpeciesWithSwitchCase( mySpecies ) );

// 'is Cow'
mySpecies = 'cow'
console.log( testSpeciesWithIfs( mySpecies ) === testSpeciesWithSwitchCase( mySpecies )  );
console.log( testSpeciesWithSwitchCase( mySpecies ) );

// `Unable to identify: ${species}`
mySpecies = 'alexander'
console.log( testSpeciesWithIfs( mySpecies ) === testSpeciesWithSwitchCase( mySpecies )  );
console.log( testSpeciesWithSwitchCase( mySpecies ) );

```
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
# Order of Operations
When evaluating your condition `(...)`, your program will start from the inner-most parentheses.
- Condition evaluation follows a **PEMDAS** format
- **PEMDAS**: `Parentheses`, `Exponents`, `Multiply`, `Divide`, `Add`, and `Subtract`

***Example***:
```javascript
( !false && (10-5) === 5 && true ) // true
/*
  The above example will
  - invert the false statement, making it true
  - evaluate 10-5 before checking if it is equal to 5
  - true simply evaluates to true
*/


( (3*10-6) / 8 ) // true
/*
  According to PEMDAS, the expression will evaluate in the following way:

  3 * 10 === 30
  => 30 - 6 === 24
  => 24 / 8 === 3

  and because 3 is not 0, the statement is true

  // Review truthy and falsy to understand why 0 is false
*/
```