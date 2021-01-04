const filter = document.getElementById("input");

document.addEventListener("DOMContentLoaded",load); //SAyfa yüklendi mi diye bakar

function load(e) {
    console.log("Sayfa Yüklendi");
}


/*
filter.addEventListener("focus",run);
filter.addEventListener("blur",run); // çıkınca focustan...

function run(e) {
    console.log(e.type);
}

filter.addEventListener("paste",run2); //paste yapınca çalışır ctrl v. copy de var ctrl c. cut da var

function run2(e) {
    console.log(e.type);
}

filter.addEventListener("select",run); // Yazıyı seçince olur.

function run(e) {
    console.log(e.type);
}
*/


//Event Capturing ve Bubbling Olayları document e özgü bir özellik aslında dom a değil.
// Birçok şey kapsayan bir elementte event eventin içindekilere de aktarılır.
// Yani yukarı doğru çıkar.


/*
document.querySelector("#cartdiv1").addEventListener("click",function () {
    console.log("Çalışıyor..."); // containerin içindeki tüm butonlar yada alan herşeye bu özellik geldi.
});
*/


//Event Captureing veya delegation

document.querySelector("#cartdiv1").addEventListener("click",run);

function run(e) {
    console.log(e.target); // Bunun sayesinde nereye bastığımızı anlıyoruz. Bunu dinamik bir biçimde elde ediyoruz böylece yeni bir element eklensede ona tıklandığı anlaşılır.
    if (e.target.id === "clear-todos"){
        console.log("silme işlemi");
    }
}



