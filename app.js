
const _ = require('lodash');



let items = [15,[8,[13,25]],48];
let newItems = _.flattenDeep(items);


console.log(newItems);