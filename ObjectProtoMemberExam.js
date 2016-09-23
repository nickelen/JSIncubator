var obj1 = {
	color : "red",
	getColor : function(){
		return this.color;
	}
};
// __proto__ is a member to keep the parent object from where the current extend from
var obj2 = {};
// it can setup the extend relation by changing the __proto__
obj2.__proto__ = obj1;
// when obj2 extends from obj1, it can use extended method
console.log(obj2.getColor());

// inside object, __proto__ is key, value is the parent object
console.log(obj2.__proto__);

// the origin object {}, its __proto__ is the Object.prototype, not Object itself!!
console.log(obj1.__proto__);
if (obj1.__proto__ === Object.prototype) {
	console.log("obj1.__proto__ equals Object.prototype!");
}
if (obj1.__proto__ === Object) {

}else{
	console.log("Object is function!");
}


// change function object __proto__

var base = {

	"siteName" :"irop.me",

	"welcome" : function() { 
		console.log("welcome to irop.me"); 
	}

}

var Func2 = function(){
	console.log("This is Func2");
}

Func2.__proto__ = base;
Func2.welcome();