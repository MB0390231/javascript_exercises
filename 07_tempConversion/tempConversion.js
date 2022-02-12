function roundToOne(num) {    
  return +(Math.round(num + "e+1")  + "e-1");
}
// console.log(roundToTwo(2.393))
const ftoc = function(fahrenheit) {
  let multiple = 5/9;
  return roundToOne((fahrenheit - 32) * multiple)
};

const ctof = function(celcius) {
  let multiple = 9/5;
  return roundToOne((celcius*multiple)+32)
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
