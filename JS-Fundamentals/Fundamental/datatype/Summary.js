/**
1. A total of 8 data types where 7 are primitive data types and 1 is object type.
2. typeof operator can be used to check data type of variable/expression.
3. The typeof operator returns a string value starting with a lowercase.
4. A data be represented in three forms: literal, variable and expression.
5. Following 6 values are considered as falsy in a boolean context: false, undefined, null, 0, NaN and "" (empty string).
6. parseInt(), parseFloat(), .toString() can be used to convert datatype.
7. Be familiar with these notations: {}, [], /abc/, ``, '', "".
8. All primitive data types are immutable.
9. Why do you need to stick with let & const?
   - Because let and const support block scoping.
10. Expect for 'undefined' and 'null', all other 5 primitive data types have object wrapper classes. (starts with uppercase letter)
 */

//point 8:

let day = "Monday"
console.log(day);  //Monday
console.log(day.toUpperCase());  //MONDAY

let bool = Boolean(true)
let num = Number(10)
String()
console.log(bool);