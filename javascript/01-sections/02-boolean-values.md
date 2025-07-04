# Boolean Values
## Keywords
  - **Boolean** - any variable or conditional statement that results in a `true` or `false` value.
  - **Operator** - a symbol that performs a specific operation *(mathematical, relational, or logical)*.
    - `===` - **Strict equality**: 
    - `==` - **Loose equality**
    - `<` - **Less than**
    - `<` - **Greater than**
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