var character = 'mario';
var age = 30;
var isBlackBelt = false;
/// can change values, but not type
// character = 20; can't change to number because it's OG is a string. can only change to another string. it's type sensitive
character = 'luigi';
// age = 'yoshi'; must be number
age = 40;
// isBlackBelt = 'yes'; can't be string but be boolean 
isBlackBelt = true;
//can specify the type you expect in a function argument
//checks are happening here, not in the JS file. less errors in the browser.
var circ = function (diameter) {
    return diameter * Math.PI;
};
// console.log(area('hello'));
console.log(circ(7.5));
