// Yeni element oluşturma.

const newLink = document.createElement("a");
const cartBody = document.getElementsByClassName("cartdiv")[0];

newLink.id = "clear-todos";
newLink.className = "btn btn-danger";
newLink.href = "https://www.google.com.tr";
newLink.target = "_blank";


// Text Content

// cartbody.textContent = "fadf" ; yaparsak cartbody nin içindeki herşey silinir o yüzden Text Node yapmamız lazım.

// Text Node

const Text = document.createTextNode("Naber");
cartBody.appendChild(Text);
console.log(cartBody);/*Böylece içindeki herşey silinmeden sonuna eklemiş olduk.*/


newLink.appendChild(document.createTextNode("Farklı Sayfaya Git"));
cartBody.appendChild(newLink);/*Böylece yarattığımız butonu sona ekledik.*/


/*Dinamik Element Silme... */

const card = document.querySelector("div.cartdiv");
const silButonu = card.querySelector("#clear-todos");

silButonu.remove(); // birçoksa toDoList.removeChild(toDoList.lastElementChild); diyebiliriz.

console.log(card);
console.log(silButonu);


/*Elementleri Birbiri ile değiştirmek...*/

console.log(cartBody);
const newElement = document.createElement("h3");
const oldElement = document.querySelector("#degistirilen");


newElement.className = "cart-title";
newElement.id = "Yazi";
newElement.textContent = "Yeni";


cartBody.replaceChild(newElement,oldElement);

/*inamik Attribute
Değiştirme,Silme,Ekleme*/


//const cartBody2 = document.getElementsByClassName("cartdiv")[1];
const cartBody2 = document.getElementById("input");

cartBody2.classList.add("newClass");// yeni bir class ekledik.
cartBody2.classList.add("newClass2");
cartBody2.classList.remove("newClass");
console.log(cartBody2);

console.log(cartBody2.placeholder);
console.log(cartBody2.getAttribute("placeholder"));

cartBody2.setAttribute("placeholder","Değiştirildi..");
cartBody2.setAttribute("title","Input");//yok şeyleride ekliyor.
cartBody2.removeAttribute("name");