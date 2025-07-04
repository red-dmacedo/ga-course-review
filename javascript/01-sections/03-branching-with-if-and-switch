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