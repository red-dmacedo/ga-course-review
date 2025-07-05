# Functions
## Keywords
- **Function**:
  - A re-usable block of code
  - Written to perform a specific function and/or return a desired value.
  - Important Rule: **Never** write the function's own name in the `codeblock`
## Types of functions
1. **Standard Function**
    - `function functionName(parameter){codeblock}`
      - This is the standard way a function is written
      - `function` - declares the start of a function
      - `functionName` - The name of the function
        - Can be anything you want
        - Best to name a function after the operation it performs or the value it returns
        - Examples: `getUserData()`, `clearArray()`, `convertFahrenheitToCelcius()`
      - `()` - Where parameters are defined
      - `{}` - Codeblock
        - The `return` statement will exit the codeblock
2. **Arrow Function**
    - `const functionName = (parameter) => {}`
      - `const functionName =` - declares a static variable and sets it equal to the **arrow function**
      - `()` - Where parameters are defined
      - `=>` - The arrow which connects the parameters to the codeblock
        - Omitting this will result in an error
      - `{}` - Codeblock
        - The `return` statement will exit the codeblock
## How to `call` a `function`
A function can be called by stating the name of the function followed by parentheses `()`.
  - Example: `functionName()`
    - Do **not** leave a space between the `functionName` and parentheses `()`
### Putting it all together
***Example 1***
```javascript
// Start by defining your function
function writeConsoleLog(){
  console.log( 'write to console' )
}

writeConsoleLog() // Call the function
writeConsoleLog() // Call the function again
writeConsoleLog()
/*
  - by defining a function, it can be called
    as many times as your program requires
*/
```
***Example 2***
```javascript
// the following 2 functions perform the same operations
function addOne_1( parameter ){ return parameter + 1 }
const addOne_2 = ( parameter ) => { return parameter += 1 }

let myNum = 0;

/*
  Since both functions RETURN a value,
  the variable must be re-assigned to update the value it stores
*/
myNum = addOne_1(myNum) // 0 => 1
 // by logging the string 'addOne_1' first, the console becomes easier to read
console.log( 'addOne_1:', myNum )
myNum = addOne_2(myNum) // 1 => 2
console.log( 'addOne_2:', myNum )

/*
  Since both functions return a value,
  the result can be logged directly,
  but myNum will NOT be updated to the new value
*/
console.log( 'addOne_1:', addOne_1(myNum) ) // 2 => 3
console.log( 'addOne_2:', addOne_2(myNum) ) // 2 => 3
```
## Parameters vs. Arguments
Parameters and arguments are *nearly* the same.
- **Parameter**
  - defined within parentheses `()` after declaring a function
  - A **parameter** is what the function uses to *reference* the **argument** passed by the function call
  - Consider the **parameter** as a simple re-naming of the **argument**
- **Argument**
  - Listed after a function call within parentheses `()`

***Example***
```javascript
/*
  - a parameter is what the function uses to reference
    the argument passed by the function call

  - the argument is re-named to parameter after the function is called
*/
function logParameter(parameter){ // <== argument is now parameter
  console.log(parameter)
}
let argument = "this is my Argument"

logParameter( argument ) // an argument is what you pass into a function
```