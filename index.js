const addDays = require("date-fns/addDays");

function dateAfterXDays(days) {
  let date = addDays(new Date(22, 07, 2020), days);
  return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`;
}
console.log(dateAfterXDays(20));
module.exports = dateAfterXDays;
