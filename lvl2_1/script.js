const { data } = require("./data.js");
const { filterDataMore, filterDataLess } = require("./functions.js");

console.log(filterDataMore(data));
console.log(filterDataLess(data));
