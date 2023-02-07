# Tip calculator app

### Project Status

<h3><img align="center" height="30" src="https://user-images.githubusercontent.com/77252075/217149827-cfed2bf9-caf7-4e9b-806a-efd99d23c6c5.png"> completed</h3>

![Screenshot from 2023-02-05 20-48-27](https://user-images.githubusercontent.com/77252075/216828054-1f8e47ae-9351-4fdd-84b9-c5fb0cc49a8a.png)

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

My weekly project from frontend mentor is a simple tip calculator app to test basic react js skills (state, effects, etc.).

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Links

- [Live site](https://tip-calculator-webapp.vercel.app/)
- [Repository link](https://github.com/subrat611/tip-calculator-app)

## My process

- Create a repo on GitHub and initiate project with vite + react
- import all required assets
- Create partial files for colors, fonts
```scss
$primary-color: hsl(172, 67%, 45%);
$neutral-dark-cyan: hsl(183, 100%, 15%);
$neutral-dark-grayish-cyan: hsl(186, 14%, 43%);
$neutral-grayish-cyan: hsl(184, 14%, 56%);
$neutral-light-grayish-cyan: hsl(185, 41%, 84%);
$neutral-very-light-grayish-cyan: hsl(189, 41%, 97%);
$neutral-white: hsl(0, 0%, 100%);
```
```scss
$input-font-size: 1.5rem;
$font-space-mono: 'Space Mono', monospace;
$font-weight: 700;
```
```scss
@use 'colors' as *;
@use 'fonts' as *;

html {
    box-sizing: border-box;
    font-size: 1rem;
}

*,
::before,
::after {
    box-sizing: inherit;
}

body {
    margin: 0;
    padding: 0;
    background-color: $neutral-light-grayish-cyan;
    font-family: $font-space-mono;
    font-weight: $font-weight;
}
```
- Think and structure the components (how folder look like, how data flow between components)
- Write HTML then style them one by one
- Build the logic of tip calculator app
```js
 const tipCalculate = () => {
    // calculate the tip % per person
    // formula = bill * (% of tip in decimal) / no of person
    let tipPerPerson = (inputBill * (inputTip / 100)) / inputPerson;
    setTipAmount(tipPerPerson.toFixed(2));

    // calculate the total per person
    // formula = bill * (1 + % of tip in decimal) / no of person
    let total = (inputBill * (1 + inputTip / 100)) / inputPerson;
    setTotal(total.toFixed(2));
  };
```
- Deploy the site on vercel

### Built with

- [React JS](https://reactjs.org/) - JS library
- SCSS custom properties
- Flexbox
- Desktop First workflow

### What I learned

- Use of React hooks (useEffect, useState)
- How to create and use scss partial files, variables
- React component and folder structure

### Continued development

- Implementing and managing state using REDUX

## Author

- Website - [subrat-jena](https://subrat-jena.netlify.app/)
- Frontend Mentor - [@subrat611](https://www.frontendmentor.io/profile/subrat611)
- Link - [@subratkumarjena](https://www.linkedin.com/in/subratkumarjena)
