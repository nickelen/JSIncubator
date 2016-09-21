var bar = function () {
    console.log(this.x);
}

var foo = {
    x : 3
}

bar(); // undefined

var func = bar.bind(foo);
func(); // 3
