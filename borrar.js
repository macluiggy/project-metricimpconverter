// regex para sacar solo las letras
var regex = /[a-zA-Z\W]/gi;
//muestra por log usando el regex con match
console.log("aaaa444fhhf55ddjfjf##".match(regex));
// regex that contain everything but digits
var regex2 = /[^\d]+/gi;
console.log("aaaa444fhhf55ddjfjf##".match(regex2));
var regex3 = /[a-z]+|[^a-z]+/gi;
console.log("aaaa444fhhf55ddjfjf##".match(regex3));

let r = { error: "jeje" }["error"];

console.log(r);
