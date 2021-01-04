
function Kişi(name,age) {

    if (typeof name === "undefined") name = "Bilgi Yok";
    if(typeof age === "undefined") age = "Bilgi Yok";

    console.log(`İsim:${name} Yaş:${age}`);
}

function Kişi2(name= "Bilgi Yok",age = "Bilgi Yok") {
    console.log(`İsim:${name} Yaş:${age}`);
}


Kişi("ozgur",21);
Kişi("ahmet");
Kişi2("Taha");


//Function expression

const merhaba = function (name) {
    console.log("Merhaba "+name);
}
merhaba("Ozgur");


// Immediately Invoked Function Expression(IIFE)

(function (name) {
    console.log("Merhaba "+name );
})("Murat");


const langs = ["Python","javaScript","Java"];

langs.forEach(function (lang,index) {
    console.log(lang,index);
});

const  users = [
    {name:"Ozgur",age:21},
    {name:"Zeynep",age:25},
    {name:"Ahmet",age:11}
];


const names = users.map(function (user) {
    return user.name;
});

const ages = users.map(function (user) {
    return user.age;
});

console.log(ages);
console.log(names);

const user = {
    name:"Ozgur",
    age:21
};

for(let key in user){
    console.log(key,user[key]);
}

/*
console.log(this);//windows

const cevap = confirm("Emin misiniz?");
console.log(cevap);
*/

/*
const cevap = prompt("2+2=?");

if(cevap == 4){
    console.log("Doğru");

}
else{
    console.log("Yanlış");
}
*/

let value3 ;

value3 = window;
value3 = window.location.host;

console.log(value3);

if (confirm("Sayfa Yenilensin mi?")){
    window.location.reload();
}
else{
    console.log("Sayfa yenilenmedi..");
}

let value4 = window.outerHeight;

console.log(value4);

