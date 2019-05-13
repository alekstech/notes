---
path: "/cs/programming/CS61A/lecture-1"
date: "2019-04-21"
title: "Functional programming 1"
keywords: "scheme, STk, functional programming"
---

#Functional programming
[Computer Science 61A](https://archive.org/details/ucberkeley_webcast_l28HAzKy0N8), lecture 1
[Lecturer's course notes](http://www-inst.eecs.berkeley.edu/~cs61a/reader/notes.pdf)

##[STk](http://inst.eecs.berkeley.edu/~scheme/)
- implementation of the Scheme programming language


```
(+ 6 8)
```
Expressions are operators followed by operand

```
'hello
```
Single quote followed by a word returns that word as a value

```
(+ (* 2 2) (* 5 5))
```
Expressions are evaluated from within. This evaluates to `(+ 4 25)`, then to `29`.

```
first 'hello
last 'hello
butfirst 'hello
butlast 'hello
```
These evaluate to `h`, `o`, `e`, `l`, respectively. `bf` is an alias for `butfirst`, `bl` is an alias for `butlast`.

```
(item 4 'computer)
```
This evaluates to `p`

```
(member? s '(a e i o u))
```
This evaluates to `p`

```
(word 'no 'where)
```
This evaluates to `nowhere`

```
(sentence 'now 'here)
```
This evaluates to `(now here)`

```
(first (first (bf `(she loves you))))
```
This evaluates to `l`

```
(define pi 3.1415)
```
This defines `pi` as an expression with the value of 3.1415.

```
(define (square x)
  (* x x))
```
This defines `square` as a procedure. It can be called: `(square (+ 2 5))` to get `25`. A definition like this is a *special form*, `define` is a *keyword*.

##Vocabulary
```
(define (square x)
  (* x x))
```
Function definition
where `x` in `square x` is the *formal parameter*

```
(define (plural wd)
  (if (equal? (last wd) 'y)
    (word (bl wd) 'ies)
    (word wd 's)))
```
Predicate functions return true or false, by convention their names end in a `?`.