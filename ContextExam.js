var User = {
	count : 1,

	getCount : function () {
		return this.count;
	}
}

console.log(User.getCount()); //this is ok
var func = User.getCount;
// this is undefined because the func context 'this' is pointing to the top window object
// but top window object does not define the function
console.log("func: " + func()); 
// to make the func work, we need to bind the func context
var func2 = User.getCount.bind(User)
// now func2 context is User, not top window
console.log("func2: " + func2());

// to support old browser, we need to write own bind()
Function.prototype.bind = Function.prototype.bind || function(context) {
	var self = this; 
	return function(){
		self.apply(context, arguments);
	}
}

Function.prototype.bind2 = function(context) {
	var self = this; 
	return function(){
		//console.log(this); => be window object
	    //console.log(self); => the getCount function
		return self.apply(context, arguments);
	}
}

var func3 = User.getCount.bind2(User);
console.log("func3: " + func3());