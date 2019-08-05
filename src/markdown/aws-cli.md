---
path: "/aws-cli"
date: "2019-08-05"
title: "aws cli"
keywords: "aws,cli"
---

#`aws cli`

```bash
aws s3 rm s3://myBucket/ --recursive && aws s3 sync . s3://myBucket/ --acl public-read
```
remove everything from myBucket and upload everything in current folder with public read permissions to myBucket