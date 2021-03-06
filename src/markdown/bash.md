---
path: "/bash-snippets"
date: "2019-03-07"
title: "bash"
keywords: "bash, snippets"
---

#bash

##[The Linux Command Line](http://linuxcommand.org/tlcl.php)

```bash
sudo kill `sudo lsof -t -i:8080`
```
clear port 8080

```bash
ln -s ../../mnt/d/Github ./Github
```
create soft symlink to d:/Github

```bash
ssh -t user@server.com '
FOLDERONE=staging; 
FOLDERTWO=portfolio; 
DATE=$(date +"%Y-%m-%d-%H:%M"); 
mkdir -p /var/www/$FOLDERONE/$FOLDERTWO/backups; 
mkdir /var/www/$FOLDERONE/$FOLDERTWO/backups/backup-$DATE; 
cd /var/www/$FOLDERONE/$FOLDERTWO/; 
mv $(ls /var/www/$FOLDERONE/$FOLDERTWO/ | grep -v '^backups$') /var/www/$FOLDERONE/$FOLDERTWO/backups/backup-$DATE;
'
```
ssh into server and move contents of /var/www/$FOLDERONE/$FOLDERTWO into a new folder inside backups

```bash
ssh -t user@domain.com 'cd /var/www/; ls; bash -l'
```
ssh into server and start a bash session

```bash
echo "$(cd "$(dirname "$1")" && pwd)/$(basename "$1")"
```
get absolute path to current dir

```bash
sed -i 's/\r$//' myfile.txt
```
remove `\r` from end of all lines in myfile.txt. `-i` means the file is edited in-place. [source](https://stackoverflow.com/a/32912867/6108651)