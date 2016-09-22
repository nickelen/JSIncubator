// function is also one kind of special object, called function object
// besides __proto__ to show the extend parent object, it has one more attribute
// .prototype
var Func1 = function() {

}

Func1.siteName = "irop.me";
console.log(Func1.siteName);
console.log(Func1.__proto__);
console.log(Func1.prototype);
// prototype constructor is actually the function itself
console.log(Func1.prototype.constructor === Func1);

// obj is normal object, obj.prototype is undefined
// that proves obj is normal object
var obj = new Func1();
// difference from obj2 is {}, obj2.__proto__ is Object.prototype
// but obj.__proto__ is Func1.prototype, that is object with constructor
console.log(obj.__proto__ === Func1.prototype);