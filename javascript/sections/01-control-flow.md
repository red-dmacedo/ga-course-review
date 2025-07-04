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