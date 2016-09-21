function fruits()  {}

fruits.prototype =
{
    color : "red",
    say : function ()
    {
        console.log("My color is " + this.color);
    }
}

var apple = new fruits();
apple.say();

banana =
{
    color : "yellow"
}

// just use class fruits method say() although banana has no such method
// change the method context, "this"
apple.say.call(banana);
apple.say.apply(banana);
