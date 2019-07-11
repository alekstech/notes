---
path: "/git-snippets"
date: "2019-03-08"
title: "git"
keywords: "git, snippets"
---

#git


```git
git show-branch | grep '*' | grep -v "$(git rev-parse --abbrev-ref HEAD)" | head -n1 | sed 's/.*\[\(.*\)\].*/\1/' | sed 's/[\^~].*//'
```
show parent branch


```git
git rebase -i --root branchname
```
rewrite whole branch history


```git
git rebase -i HEAD~2
```
rewrite history for last 2 commits


```git
git branch -vv
```
show last commit & tracked remote


```git
git reset --hard remoteName/branchName
```
reset hard to match remote


```git
git show --name-only
```
show files in last commit


```git
git log -- path/to/file.js
```
show commits that changed file


```git
git show a1b2c3 path/to/file.js
```
show how a file changed in a commit


```git
git log -n 100 --pretty=format:"%h%x09%an%x09%ad%x09%s" --date=short
```
list 100 most recent commits, one per line, with YYYY-MM-DD dates
<br><small>%h = commit hash, %x09 = space, %an = author name, %ad = commit date, %s = commit message</small>


```git
git config --global core.autocrlf input
```
convert to LF on check in (Mac / Linux)


```
gitgit config --global core.autocrlf true
```
convert to CRLF on check out (Windows)


```
GIT_COMMITTER_DATE="$(date)" git commit --amend --no-edit --date "$(date)"
```
change date of last commit to current date


```
GIT_COMMITTER_DATE="Mon 20 Aug 2018 20:19:19 BST" git commit --amend --no-edit --date "Mon 20 Aug 2018 20:19:19 BST"
```
change date of last commit to Mon 20 Aug 2018 20:19:19 BST


```
git show branchName:path/to/file.txt > original.txt
```
grab file.txt from branchName and save it as original.txt on the current branch