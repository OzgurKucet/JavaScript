const input = document.getElementById("input");

console.log(input);

/* buda bir yöndem ama çok kullanmıyormuş..

input.onfocus = function () {
    console.log("Focus");
};

 */

input.addEventListener("focus",function (e) {
    console.log("Focus",e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
    console.log(e.target.className);
});


const buton = document.getElementById("cartdiv1");
console.log(buton);
buton.addEventListener("submit",submitForm);

function submitForm(e) {
    console.log("Submit Eventi");

    e.preventDefault();/*Var olan özelliklerini yok sayarmış ama yapamadım kullanımını...*/
}


/*Klavye eventleri*/


document.addEventListener("keypress", run); /*keyup da parmağını çektiğin anda yazar.*/

function run(e) {
    console.log(e.which);//Ascii karşılığı
    console.log(e.key);//Harfin kendisi
    console.log("Naber");/*Sadece sayı ve harf alıyor.*/

}


document.addEventListener("keydown", run2);//keydown da diğer klavledekinler alt shift ok tuşları vb. için galiba herşeyi algılıyor...

function run2(e) {
    //console.log(e.which);//Ascii karşılığı
    console.log(e.key);//Harfin kendisi
    console.log("Keydown");/*Sadece sayı ve harf alıyor.*/

}

const header = document.querySelector(".card-header");
const toDoInput = document.querySelector("#input2");


toDoInput.addEventListener("keyup",changeText);


function changeText(e) {
    header.textContent = e.target.value; // YAzı alanını değiştitir.
    console.log(e.target.value); //e.target.value kelimenin tamamını alır.
}



