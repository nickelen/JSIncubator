function log(msg){
	console.log(msg);
}

log(2);
log(2,3);

function log2(){
	console.log.apply(console, arguments);
}

log2(2);
log2(2,3);

function log3(){
	var args = Array.prototype.slice.call(arguments);
	args.unshift("(app)");
	console.log.apply(console, args);
}

log3(2);
log3(2,3);