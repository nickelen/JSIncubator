var obj1 = {
	name : "jack"
};

var obj2 = {
	age : 16
};

var obj3 = {
	gender : "male"
}
// this is not encouraged by using .__proto__
obj2.__proto__ = obj1
// better to use
Object.setPrototypeOf(obj3, obj1);

console.log(obj2.name);
console.log(obj3.name);
console.log(Object.getPrototypeOf(obj3));

// in operation can find attribute or method from current object or from prototype chain
console.log("name" in obj3);
console.log("toString" in obj3);

// hasOwnProperty only find the attribute or method in current object
console.log(obj3.hasOwnProperty("name"));
console.log(obj3.hasOwnProperty("toString"));

