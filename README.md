# TypeScript Tutorial

This tutorial covers the basics of TypeScript programming language. The content is adapted from W3Schools.
(Adapted from https://www.typescriptlang.org/, W3Schools, and https://materi-fullstack-nfvh.vercel.app/)

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Variables](#variables)
4. [Data Types](#data-types)
5. [Functions](#functions)
6. [Interfaces](#interfaces)
7. [Classes](#classes)
8. [Modules](#modules)
9. [Generics](#generics)
10. [Conclusion](#conclusion)

## Introduction

TypeScript is a superset of JavaScript that adds static typing to the language. It helps catch errors during development and provides better tooling for large-scale applications.

## Getting Started

To start using TypeScript, follow these steps:

1. Install Node.js and npm.
2. Install TypeScript globally using the following command:

   ```bash
   npm install -g typescript
   ```
3. Playground
https://www.typescriptlang.org/play

## Variables
`var`
Variables in TypeScript can be declared using var keyword, same as in JavaScript. The scoping rules remains the same as in JavaScript.

`let`
To solve problems with var declarations, ES6 introduced two new types of variable declarations in JavaScript, using the keywords let and const. TypeScript, being a superset of JavaScript, also supports these new types of variable declarations.

`const`
Variables can be declared using const similar to var or let declarations. The const makes a variable a constant where its value cannot be changed. Const variables have the same scoping rules as let variables.

```typescript
const num:number = 100;
num = 200; //Compiler Error: Cannot assign to 'num' because it is a constant or read-only property
```

## Data Types
### Number
```typescript
let first:number = 123; // number 
const second: number = 0x37CF;  // hexadecimal
let third:number=0o377 ;      // octal
const fourth: number = 0b111001;// binary  

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57
```
### String
```typescript
let employeeName:string = 'John Smith'; 
//OR
let employeeName:string = "John Smith";
let employeeDesc1: string = employeeName + " works in the " + employeeDept + " department."; 
let employeeDesc2: string = `${employeeName} works in the ${employeeDept} department.`; 
```
### Boolean
```typescript
let isPresent:boolean = true;
```
### Array
```typescript
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
// or 
let values: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana']; 
```
### Tuple
```typescript
let empId: number = 1;
let empName: string = "Steve";        

// Tuple type variable 
let employee: [number, string] = [1, "Steve"];
```
### Enum
```typescript
enum PrintMedia {
    Newspaper = 1,
    Newsletter = 5,
    Magazine = 5,
    Book = 10
}
```
### Union
```typescript
let code: (string | number);
code = 123;   // OK
code = "ABC"; // OK
code = false; // Compiler Error

let empId: string | number;
empId = 111; // OK
empId = "E111"; // OK
empId = true; // Compiler Error
```
### Any
```typescript
let something: any = "Hello World!"; 
something = 23;
something = true;

let arr: any[] = ["John", 212, true]; 
arr.push("Smith"); 
console.log(arr); //Output: [ 'John', 212, true, 'Smith' ] 
```
### Void
Similar to languages like Java, void is used where there is no data. For example, if a function does not return any value then you can specify void as return type.
```typescript
function sayHi(): void { 
    console.log('Hi!')
} 

let speech: void = sayHi(); 
console.log(speech); //Output: undefined
let nothing: void = undefined;
let num: void = 1; // Error
```
### Never
TypeScript introduced a new type never, which indicates the values that will never occur.
```typescript
let unreachable: never;

function infiniteLoop(): never {
    while (true) {
        // Infinite loop, never reaches the end
    }
```

