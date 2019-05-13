---
path: "/cs/programming/CS61A/lecture-3"
date: "2019-04-24"
title: "Higher order procedures 1"
keywords: ""
---

#[Higher order procedures](https://archive.org/details/ucberkeley_webcast_ogIGxEzvnSE)

##Function as data
data : functions :: nouns : verbs
Information and actions naturally exist as distinct categories in human knowledge.

##Applicative-order vs normal-order evaluation
Scheme is an applicative-order language. Arguments are evaluated first, then the procedure is applied:

Given these functions:
```
(define (square x) (* x x))

(define (sum-of-squares x y)
  (+ (square x) (square y)))
  
(define (f a)
  (sum-of-squares (+ a 1) (* a 2)))
```

applicative-order evaluation would evaluate all argument expressons first (starting with the deepest-nested), then apply the procedure:
```
(f 5)

(sum-of-squares (+ 5 1) (* 5 2))

(sum-of-squares 6 10)

(+ (square 6) (square 10))

(+ (* 6 6) (* 10 10))

(+ 36 100)

136
```
[example source](https://www.lvguowei.me/post/sicp-goodness/)

Normal-order evaluation would start by expanding all expressions, then reduce them:
```
(f 5)

(sum-of-squares (+ 5 1) (* 5 2))

(+ (square (+ 5 1)) (square (* 5 2)))

(+ (* (+ 5 1) (+ 5 1)) (* (* 5 2) (* 5 2)))

(+ (* 6 6) (* 10 10))

(+ 36 100)

136
```
[example source](https://www.lvguowei.me/post/sicp-goodness/)

Applicative order and normal order will yield the same results if the procedure is a function. If the procedure relies on external variables, the results may be different.

To check if a language is applicative-order or normal-order, see if an if-else statement evaluates both the if action and the else action immediately.