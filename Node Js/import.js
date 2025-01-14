// import is the alternative for the require() but it is better than require
// we can include the required content
// it saves memory as imports only required data rather than entire data
// import is asynchronous in nature
// to import data it needs to be exported using export keyword.

import { sum, sub } from "./exp.js";
import { generate } from "random-words";
console.log(sum(1, 7));
console.log(sub(1, 7));
console.log(generate(5));
