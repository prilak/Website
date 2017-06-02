var stuff = require('./other');


var sayBye = function(){
    console.log('bye');
};
var time = 0;
console.log('hey essay');
setTimeout(function(){
    console.log('3sec have passed');
}, 3000);
var timer = setInterval(function(){
    time += 2;
    console.log(time+'has passed');
    if (time > 5){
        clearInterval(timer);
    }
}, 2000)
console.log(stuff.counter(['a', 'b']));
console.log(__dirname);
console.log(__filename);
//normal func

sayBye();
function callFunction(fun){
    fun();
};
callFunction(sayBye);
console.log(stuff.adder(1,3));
console.log(stuff.adder(stuff.pi,3));
