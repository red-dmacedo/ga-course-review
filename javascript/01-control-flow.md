# Control Flow
## Concept
  *Control flow* refers to the *order* in which code is executed within a program 
  - All script files are executed from ***top-to-bottom***.
  - Any code defined in the following **code block types** are skipped until they are explicitly called:
    - functions
    - arrow functions
    - objects
    - any variable that is set to a value
      - strings
      - arrays
      - objects
      - Example: `const myVariableName = 'value'`
      
  ***Example:***
  ```javascript
  const myVariable = 'value'
  /*
  While this will set the value of myVariable to the string: 'value', it does NOT:
    - RETURN a value
    OR
    - Call upon the variable known as myVariable
      - Note: to call a variable, it is as simple as re-stating the variable name, which will return the value stored in that variable.
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
## Boolean Values
### Keywords:
  - **Boolean** - any variable or conditional statement that results in a **true** or **false** value.
  - **Operator** - a symbol that performs a specific operation *(mathematical, relational, or logical)*.
    - `===` - Strict equality
    - `==` - Loose equality
    - `<` - Less than
    - `<` - Greater than
    - `<=` - Less than or equal to
    - `>=` - Greater than or equal to
    - `!` - Invert *true* or *false* statements
      - `!(true)` - will result in *false*
      - `!(false)` - will result in *true*
      - `!(0 > 1)` - will result in *true* because the orginal result was false
    - `!==` - Strict in-equality: return *true* if the left-hand value is NOT equal to the right-hand value
      - `(true !== false)` - will return *true* because *true* isNot equal to *false*
  - **Conditional Statement** - a statement that utilizes an operator to result in a **true** or **false** value.
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
  ) // <== proof that you can combine many conditional statements into one and return a single true/false value.

  /*
  If only one statement from myNewBoolean is true, then the whole statement returns as true. This is how the || (OR) keyword works.
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
## Branching
  Branching allows you make "decisions" within your code.
### `if()` statements
If statments allow you to make a decision based on a *true* / *false* value

***Example 1***
```javascript
const doug = {} // create an object named doug
doug.species = 'cat'

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
#### Simplifying `if()` using the ternary `?` operator
##### An if statement can be simplified using a ternary `?` operator only if:
  - the statement contains **both** a THEN `{}` **and** an else `else{}`
  - There is no need for `else if(){}` statements

##### Writing a ternary statement:
A `ternary` statment has the same structure as an `if()` statement
- Written as `if()`: `if (` *Condition* `)` `{` *codeblock* `}` `else {` *codeblock* `}`
- Written as ternary `?`: `(` *Condition* `)` `?` *codeblock* `:` *codeblock*
- Ternary `?` skeleton: `( ) ? :`
  - `(`Condition`)` is stated within parentheses
  - the ternary `?` operator acts as your THEN `{}` statement
  - the colon `:` acts as your `else` statement
- `if('condition is true'){'then run this'} else{'run this'}`
- `('condition is true') ? `

***Example***
```javascript
// To write a ternary statement, begin by writing your standard if()
if( true ) { console.log('Option 1: true') } else { console.log('Option 2: false') };

// Next, write your ternary statement by extracting the corresponding parts from your if()
( true ) ? console.log('Option 1: true') : console.log('Option 2: false')
```
### `switch( case )` statements
## Looping
## Truthy and Falsy Statements
## Order of Operations
