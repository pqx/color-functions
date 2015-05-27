# color-functions [![Build Status](https://travis-ci.org/pqx/color-functions.svg)](https://travis-ci.org/pqx/color-functions)
color functions
## Installation
``` sh
npm install color-functions
```
## Usage
``` javascript
// import all functions
var cf = require('color-functions');
var hex2rgb = cf.hex2rgb;

// import single function
// (to reduce bundle script size with browserify or webpack)
var hex2rgb = require('color-functions/lib/hex2rgb');
```
## Available functions
+ `hex2rgb`
+ `hsv2hex`
+ `hsv2rgb`
+ `rgb2hex`
+ `rgb2hsv`
+ `rgba`
