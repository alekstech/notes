---
path: "/ui-architecture-considerations"
date: "2019-07-11"
title: "UI design architecture"
keywords: "css, ui, principles, architecture"
---

Systems for:
• Font size - rems or px, not ems
• Font weight
  A normal font weight (400 or 500 depending on the font) for most text
  • A heavier font weight (600 or 700) for text you want to emphasize
• Line height
• Color
  A dark color for primary content (like the headline of an article)
  • A grey for secondary content (like the date an article was published)
  • A lighter grey for tertiary content (maybe the copyright notice in a
  footer)
• Margin
• Padding
• Width
• Height
• Box shadows
  0 1px 3px hsla(0, 0%, .12)
  0 1px 2px hsla(0, 0%, .24)

  0 3px 6px hsla(0, 0%, .15)
  0 2px 4px hsla(0, 0%, .12)

  0 10px 20px hsla(0, 0%, .15)
  0 3px 6px hsla(0, 0%, .10)

  0 15px 25px hsla(0, 0%, .15)
  0 5px 10px hsla(0, 0%, .5)

  0 20px 40px hsla(0, 0%, .2)
• Border radius
• Border width
• Opacity


25% intervals:
4 (16 x 0.25)
8 (16 x 0.5)
12 (16 x 0.75)
16 (16 x 1)
24 (16 x 1.5)
32 (16 x 2)
48 (16 x 3)
64 (16 x 4)
96 (16 x 6)
128 (16 x 8)
192 (16 x 12)
256 (16 x 16)
384 (16 x 24)
512 (16 x 32)
640 (16 x 40)
768 (16 x 48)

-apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue;
fonts with minimum 5 weights

max text width: 20-35em (45-75 chars)

line height: 1.5 in moderate-width paragraphs, 2 in wide paragraphs, 1 in headings / large text

align-items: baseline; not: center

Colors:
8-10 greys
5-10 shades of a primary color
a few accent colors, in 5-10 shades each