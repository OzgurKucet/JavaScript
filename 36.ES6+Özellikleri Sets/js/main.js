// Setler - KÜmeler
// Bir Eleman bir kez eklenir.


const  myset = new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("ozgur");
myset.add("mustafa");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2});

// yada daha kısa oluşturmak için:
const myset2 = new Set([100,3.14,"ozgur"]);

console.log(myset);
console.log(myset2);
console.log(myset.size);
myset.delete("mustafa");
console.log(myset);
console.log(myset.has("ozgur")); // içinde var mı? varsa true
console.log(myset.has([1,2,3])); // olmasınıa rağmen false değerini aldık çünkü referans ve bellekte gösterdiği yerler aynı değil.

myset.forEach(function (value) {
    console.log(value);
});

for (let value of myset){
    console.log(value);
}

// Array yapma seti

const array = Array.from(myset);
console.log(array);
