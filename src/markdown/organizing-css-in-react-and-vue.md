---
path: "/organizing-css-in-react-and-vue"
date: "2019-04-28"
title: "Organizing CSS in React and vue"
keywords: "CSS, architecture"
---

# Organizing CSS in React and Vue

I've seen many logically organized front-end projects. When you combine several reusable components and a few page layouts with a router, a data store, an i18n plugin, authorization logic, and some API services, things start to get complex. Yet, orienting yourself in a repository you haven't seen before isn't too complicated. Until you need to understand how it's styled.

Organizing CSS in a way that follows any sort of conventional logic is difficult.

## Top-level
This is the CSS globally-available CSS that's imported at the start, in index.html, main.js or whatever your entry-point file is. For clarity, each section lives in its own .css file. Importing them all in one place clarifies order of priority.
```
import './assets/css/reset.css'
import './assets/css/utility.css'
import './assets/css/variables.css'
import './assets/css/material-ui.css'
```

### Reset and normalize
Default browser styles vary: an unstyled `<input>` may look different in Chrome than in Safari. Before you apply your own styles, you'll want to make sure that it gets applied to a uniform base regardless of the user agent.

### Library or framework CSS
I often work with a component library that requires its own stylesheets, especially if I want to make changes to their default theme.

### Variables (custom properties)
Design advice for developers emphasizes consistency. Your project will benefit from keeping a few properties uniform. These include
- sizes of margins, borders and padding
- fonts: font family, font weight, font size etc.
- colors
- box shadows
- border radiuses
If the component library you use doesn't do it for you, define values for these and keep them limited.

For many projects 3-5 padding sizes, a couple box shadows and one border radius will suffice. The upshot is that instead of writing
`padding: 10px;`
`font-weight: 700;`
`background-color: rgb(245, 245, 245)`
every time you need one of these properties, you can say
`padding: var(--padding-2);`
`font-weight: var(--bold);`
`background-color: var(--grey-3);`

### Utility classes
Classes used in multiple places in your project, like a `.screen-reader-only`, should also be available globally.

I like to have a few categories of classes here:
- display: `.display-inline-block`, `.display-flex`
- flexbox: `.justify-content-center`, `.align-items-flex-end`
- width and heigh: `.width-100`, `.max-height-50vh`
This is similar to writing inline syles on your element and can take up space in your markdown files, but I find it preferable to inventing new class names only to use them for a couple of frequently adjusted properties. When the value of a `class` attribute on an element gets unbearably lengthy, it's time to give that element its own class.
```
<div class="display-flex flex-direction-column align-items-center width-100 max-width-40rem max-height-100"> ... </div>
```
becomes
```
<div class="card"> ... </div>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 40rem;
  max-height: 100%;
}
```

### Animations
Movement should be uniform across the animation. In React or Vue, you may be using a transition component that encapsulates the CSS it applies. If you need plain-CSS animations, the `@keyframes` should be defined in one place.

## Component-level
Vue's `<style scoped>` and React's styled-components are great ways of keeping CSS close to the markup they affect and avoiding cross-contamination. styled-components are themable through interpolating strings received via props
```
color: ${props => props.theme.colors.black};
border: ${props => props.theme.border.narrow} solid ${props => props.theme.colors.grey2};
```
Vue is limited to CSS custom properties, but in combination with state-dependent classes, it suffices for most use-cases.

## JS-set styles
In the rare case that theming or dynamic classes aren't enough, I read from or write to a DOM node's style property. In hindsight, there's usually a better way to go about it, with the exception of third-party libraries that need to be moulded to fit a project's needs.

## Order of properties
Some people sort their CSS alphabetically. I use an order that reflects my understanding of how impactful each property is.
1. `position` - this tripped me up enough times around z-index and layout issues to make it to the top of the list
2. `width, height`
3. `display`
4. `margin, border, padding`
5. font-related properties
6. everything else

Which results in something like
```
.navigation {
  position: relative;
  height: 6em;
  display: flex;
  padding: var(--padding-1);
  font-weight: var(--bold);
  background-color: var(--teal-lighter);
}
```

## Notable mentions

### Prepocessors
Prepocessors like SCSS are great for readibility because they allow for nesting of classes
```
.button {
  background: var(--green-1);
  &:hover {
    background: var(--green-2);
  }
}
```
Using a preprocessor makes most sense if you keep your variables in the preprocessor's own format, and not as CSS custom properties.

### BEM
Scoping CSS to a component and, optionally, nesting CSS using a preprocessor achieves many of the same goals I would use BEM or OOCSS for. They are still a valuable reference for how to compose elements and their styles.