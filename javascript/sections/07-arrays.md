# Arrays

<center>

## Keywords

</center>

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

<center>

|       | 0           |
| :---: | :---------: |
| 0     | "item 1"    |
| 1     | "item 2"    |
| 2     | "item 3"    |
| 3     | "item 4"    |
| 4     | "item 5"    |

</center>

<center>

# Multi-dimensional Arrays

</center>


<center>

|       | 0           | 1           |
| :---: | :---------: | :---------: |
| 0     | "item 1"    | "cat"       |
| 1     | "item 2"    | "dog"       |
| 2     | "item 3"    | "bird"      |
| 3     | "item 4"    | "horse"     |
| 4     | "item 5"    | "spider"    |

</center>


<center>

|       | 0           | 1           | 2           |
| :---: | :---------: | :---------: | :---------: |
| 0     | "item 1"    | "cat"       | [ a, b, c ] |
| 1     | "item 2"    | "dog"       | [ d, e, f ] |
| 2     | "item 3"    | "bird"      | [ g, h, i ] |
| 3     | "item 4"    | "horse"     | [ j, k, l ] |
| 4     | "item 5"    | "spider"    | [ m, n, o ] |

</center>