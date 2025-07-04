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