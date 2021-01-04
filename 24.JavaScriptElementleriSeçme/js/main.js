let element;
let element2;
let element3;
let element4;


element = document.getElementById("Aetiketi ");/*Yanlış verirsek null döner.*/
element2 = document.getElementsByClassName("btn");
element3 = document.getElementsByTagName("a");

console.log(element);
console.log(element2);
console.log(element3[0]);


// Query Selector -Css Selector -Tek bir element döner.

element4 = document.querySelector(".btn");


console.log(element4);


// QuerySelectorAll Tüm elementleri geririr ve NodeList şeklinde geri döndürür o yüzden forEach döngüsü ile gezinebilirsin.

console.log("--------------------------------------------------------------");

/*Elementleri Seçme ve Style Özelliklerini Değiştirme*/

const element5 = document.querySelector("#Aetiketi");

console.log(element5);
console.log(element5.className);
console.log(element5.classList[1]);
console.log(element5.textContent);
console.log(element5.innerHTML);
console.log(element5.href);


console.log("--------------------------------------------------------------");

element5.className = "btn btn-danger btn-block";
element5.style.color = "black";
element5.style.marginTop = "255px";

console.log("--------------------------------------------------------------");

element5.textContent = "Silin";/*Text içim html etiketi ekleyeceksek alta bak..*/
element5.innerHTML = "<span style='color: lightcyan'> Silin1 </span>"

const  element6 = document.querySelectorAll(".btn");

element6.forEach(function (e) {
    e.style.color = "black";
    e.style.background = "blue";
});

const element7 = document.querySelector("a:last-child");/*nht-child(2) gibi de girebiliyormuşuz.*/

console.log(element7);