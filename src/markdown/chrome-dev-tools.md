---
path: "/chrome"
date: "2019-03-09"
title: "Chrome"
keywords: "Chrome,dev tools"
---

#Chrome dev tools

```
-_next
```
hides calls to URLs that contain `_next` in the Network tab, for example `http://localhost:3002/_next/on-demand-entries-ping?page=/`; paste in the Filter input field in the Network tab

```bash
# on Mac
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --auto-open-devtools-for-tabs

# on Windows
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --auto-open-devtools-for-tabs
```
launches Chrome with Dev Tools open by default for every tab; quit all instances of Chrome first, then paste into Terminal