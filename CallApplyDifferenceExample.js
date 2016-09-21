/*

var func = function(arg1, arg2) {

};

func.call(this, arg1, arg2);
func.apply(this, [arg1, arg2]);

call accept params by order, apply accept params by array

*/

var array1 = [12, "foo", {name: "Joe"}, -2458];
var array2 = ["Doe", 555, 100]; 
Array.prototype.push.apply(array1, array2);
console.log(array1);

// numbers array does not have maximum method, but Math has
// we can apply the max method to the numbers array
var  numbers = [5, 458 , 120 , -215 ]; 
var maxInNumbers1 = Math.max.apply(Math, numbers),   
    maxInNumbers2 = Math.max.call(Math,5, 458 , 120 , -215); 
console.log(maxInNumbers1);
console.log(maxInNumbers2);

// Object.method.apply(context, [params])
// Object.method.call(context, parm1, parm2...)

function isArray(obj){ 
    return Object.prototype.toString.call(obj) === '[object Array]' ;
}
var array = [{attr : "value"}, 1, "abc"];
var str = "test";
var obj = {};
console.log(isArray(array));
console.log(isArray(str));
console.log(isArray(obj));

// let class return array to slice
var domNodes1 = Array.prototype.slice.call(document.getElementsByTagName("*"), 0, 2);
console.log(domNodes1);
var domNodes2 = Array.prototype.slice.apply(document.getElementsByTagName("*"), [0,3]);
console.log(domNodes2);
