'use strict';

const moment = require('moment');

const currentDate = moment();
console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().add(10, 'days').toDate());
moment("2010 13", "YYYY MM").isValid(); // false
const parsed = moment("12-25-1995", "MM-DD-YYYY");
const parsedDate = parsed.toDate();

// console.log(parsed);
console.log(parsedDate);
