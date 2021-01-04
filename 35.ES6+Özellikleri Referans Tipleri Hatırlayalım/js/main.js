let a = "ozgur";
let b = "ozgur";

if(a === b){
    console.log("Eşittir");
}

//primitive de aynı mı diye baktı.

//Referans veri tiplerinde bellekte gösterdiği yere bakıyormuş

let array1 = [1,2,3,4,5];
let array2 = [1,2,3,4,5];

if (array1 === array2){ // aynı çıkmadı çünkü bellekte aynı yeri gösteriyormu diye bakıyormuş
    console.log("Eşittir");
}


const person1 = {
    name:"ozgur",
    age:21
};

const person2 = {
    name:"ozgur",
    age:21
};

if (person1 === person2){ // Yine eşit değil.
    console.log("Eşittir");
}

const cities = new Map();
const key = [1,2,3,4];


cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set([1,2,3],"Array");
cities.set(key,"Array2");

console.log(cities.get("Ankara")); // primitive olduğu için gelir.
console.log(cities.get([1,2,3])); // üstteki array oluştu bellekte farklı biryeri gösteriyor bu array oluştu bellekte farklı bir yeri gösteriyor o yüzden undefined oldu.
console.log(cities.get(key)); // bu sefer aynı yeri gösterir buluruz aynı yeri sorguluyor çünkü.


