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

## Variables

### Number
```typescript
let first:number = 123; // number 
let second: number = 0x37CF;  // hexadecimal
let third:number=0o377 ;      // octal
let fourth: number = 0b111001;// binary  

console.log(first);  // 123 
console.log(second); // 14287
console.log(third);  // 255
console.log(fourth); // 57
```

