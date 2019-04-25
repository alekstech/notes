---
path: "/CS61A/lecture-2"
date: "2019-04-24"
title: "Functional programming 1"
keywords: "fizz buzz,conditionals,applicative order,normal order"
---

#[Functional programming](https://archive.org/details/ucberkeley_webcast_l28HAzKy0N8)
Computer Science 61A, lecture 2
[Course notes](http://www-inst.eecs.berkeley.edu/~cs61a/reader/notes.pdf)


##Function
A function is a relationship between an input and an output, with zero or more inputs and one output. Every time you put in an input, you get the same output.

Functions are useful in parallel computing, where tasks can be split across different CPU cores without having to depend on one another.

```
f(x) = 2x + 6
g(x) = 2(x + 3)
```
These are the same function but different procedures. A procedure is the sequence of steps for computing a function.

A function that depends on an external variable is not a function. It's a procedure, but not a function.

##Buzz
```
(define (buzz n)
  (cond ((equal? (remainder n 7) 0) ’buzz)
  ((member? 7 n) ’buzz)
  (else n)))
```
Prints buzz if the argument is a number divisible by 7 or a number with the digit 7. Lines 2-4 are *clauses*. Else is a *keyword*. *cond* is a special form. Each clause contains a test and an action. The action is typically a procedure. `else` is only a special word inside `cond` and it basically evaluates to true. Using `else` prevents from non-standard returns encoded in different language implementations.

##Layers of abstraction
Application programs
High-level language (Scheme)
Low-level language (C)
Machine language / architecture
Logic gates
Transistors
Quantum physics

Java has elements of a low level laguage and elements of a high level language.