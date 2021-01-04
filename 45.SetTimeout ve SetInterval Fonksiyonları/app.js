//console.log(this); //setTimeout ve setInterval windows objemizin metodları

//setTimeout

setTimeout(function () {
    console.log("naber");
},2000)

let i = 0;
let value = setInterval(function () { // bir saniye aralıklarla çalışır.
    i++;
    console.log(i);
},1000);

document.getElementById("btn").addEventListener("click",function () {
    clearInterval(value);
});