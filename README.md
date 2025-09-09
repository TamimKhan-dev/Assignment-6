## 1) What is the difference between var, let, and const?
**Answer:** In JavaScript, var is function-scoped, hoisted, and can be redeclared, which can cause bugs. let is block-scoped and can be reassigned but not redeclared in the same scope. const is also block-scoped but cannot be reassigned. Today, let and const are preferred over var for cleaner, more reliable code.


## 2) What is the difference between map(), forEach(), and filter()?
**Answer:** In JavaScript, forEach() runs a function on each array element but doesn’t return anything. map() also runs a function on each element but returns a new array with the results. filter() creates a new array containing only the elements that pass a given condition. In short: use forEach for side effects, map to transform arrays, and filter to select specific elements.


## 3) What are arrow functions in ES6?
**Answer:** Arrow functions in ES6 are a shorter way to write functions using the => syntax. They make code cleaner and don’t have their own this binding, instead inheriting it from the surrounding scope. This makes them especially useful in callbacks and when working with objects or classes.


## 4) How does destructuring assignment work in ES6?
**Answer:** Destructuring assignment in ES6 lets you unpack values from arrays or properties from objects into separate variables in a concise way. For example, [a, b] = [1, 2] assigns 1 to a and 2 to b, while {name, age} = person extracts those properties from an object. It simplifies code and makes variable extraction cleaner.


## 5) Explain template literals in ES6. How are they different from string concatenation?
**Answer:** Template literals in ES6 are strings defined with backticks (`) that allow embedding variables and expressions using ${}. They also support multi-line strings without special characters. Unlike traditional string concatenation with +, template literals are more readable, easier to maintain, and can mix text with variables or expressions directly.
