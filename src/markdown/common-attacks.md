---
path: "/common-attacks"
date: "2019-07-10"
title: "common attacks"
keywords: "secutity, attacks, frontend"
---

# XSS
An evil user posts "<script>alert("you are dumb!")</script>" instead a comment under a newspaper article. This is saved in the database as a comment and now everyone viewing the comments gets offended. Things could be worse if the evil user was even more evil and tried to POST cookies or localStorage data to themselves.

# Reflected XSS
```html
<a href="example.com/search-results?keyword=<script>alert("boo!")</script>">
Click here to win $1m!
</a>
```
Check out the `href`. Now imagine a site that uses the url query in its body. When `keyword` gets added to the DOM without sanitization, it will get executed.

#CSRF
When a victim clicks on a malicious link that like the ones above, an HTTP call could get executed. The responding server will believe the call is coming from the victim because a real cookie or a JWT came with the request. But servers can keep track of what pages they served. Every time a page is served, it includes a hidden <input> with a unique token. That token gets submitted with the page so the server knows it's (probably) from the legitimate user. Also, `SameSite` cookies help.

#SQL injection
An evil user signs up for a dating app giving their age as "22; DROP TABLE Suppliers". The server concatenates that into:
```sql
SELECT * FROM Users WHERE Age = 22; DROP TABLE Suppliers;
```