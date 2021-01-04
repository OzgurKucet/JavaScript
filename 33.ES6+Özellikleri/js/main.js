const merhaba = function () {
    console.log("Merhaba");
}

merhaba();

// Arrow Function daha kısa  yazmamızı sağlayacakmış

const merhaba2 = () => {
    console.log("merhaba2");
}

merhaba2();

const merhaba3 = (firstName,lastname) => {
    console.log("merhaba",firstName,lastname);
}

merhaba3("ozgur","kucet");

const merhaba4 = firstName =>  // Eğer tek paremetre alacaksa parantezleride yazmaya gerek yok.
    console.log("merhaba",firstName); // tek işlem yaptığı için süslü parantezede gerek yok.

merhaba4("ozgur");

const cube = x => x*x*x; // bu fonksyonda return yapmıyoruz ama tek satırda yaptığımız için anlayıp kendisi yapıyor.


/*-----------------------------------------------------------------------------------*/

//Destructing

//let number1,number2;
arr = [100,200,300,400];

//number1 = arr[0];
//number2 = arr[1]; // normalde böyle yapıyoruz ama daha kısa yapmak için:

const[number1,number2] = arr; // böyle yaparak araydeki ilk iki sayı number1 ve number 2 oldu.

console.log(number1,number2);


// Obje Destructing
console.log("Obje Destructing --------------------------------------------------------");
const numbers = {
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const {a,c,e,b:number3} = numbers;
console.log(a,c,e,number3);



const getLangs = () => ["Pyton","Java","C++"];
const [lang1,lang2,lang3]= getLangs();
console.log(lang1,lang2,lang3);


const person = {
    name:"Özgür KÜÇET",
    year:1998,
    salary:6000,
    showInfos : () => console.log("Bilgiler gösteriliyor...")

}

const {name:isim,year:yıl,salary:maas,showInfos:BilgileriGöster} = person;
console.log(isim,yıl,maas);
BilgileriGöster();


// Spread Operator
console.log("Spread Operator --------------------------------------------------------");

const  langs = ["Python","C++","Java","Php"];

console.log(langs[0],langs[1],langs[2],langs[3]);
console.log(...langs);

let langs2 = ["Javascript","C#",langs[0],langs[1],langs[2],langs[3]];
langs2 = ["Javascript","C#",...langs];

console.log(langs2);

const  numbers3 = [1,2,3,4,5,6,7,8,9];

const [x,y,...numbers4] = numbers3;
console.log(x,y);
console.log(numbers4); // 1 ve 2 den sonraki tüm sayılar buna gelir.


const  addNumbers = (a,b,c) => console.log(a+b+c);

const sayilar = [100,200,300];

addNumbers(...sayilar);


