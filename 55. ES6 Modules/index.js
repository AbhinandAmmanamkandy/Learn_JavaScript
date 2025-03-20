// ES6 Module - Anexternal file that contains reusable code
//  that can be imported into other JavaScript files.
//  Write reusable code for many different apps.
//  Can contain variables, classes, functions ... and more
//  Introduced a part of ECMAScript 2015 update

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);
console.log(`${circumference.toFixed(2)}cms`);

const area = getArea(10);
console.log(`${area}cm^2`)

const volume = getVolume(10);
console.log(`${volume}cm^3`)