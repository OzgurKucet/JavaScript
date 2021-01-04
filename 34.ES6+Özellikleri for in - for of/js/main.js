

const person = {
    name:"Ozgur Kucet",
    age:25,
    salary:3000
};

const langs = ["Python","Java","C++","Php"];
const name = "ozgur";

// for in

for(let prop in person){
    console.log(prop,person[prop]);
}

for (let index in langs){
    console.log(index,langs[index]);
}

for(let index in name){
    console.log(index,name[index]);
}

//for of object üzerinde gezinilmez array ve string üzerinde gezinilebilir.

/*
for(let value of person){
    console.log(value);
}
Hata Verir object çünkü...
*/

for (let value of langs){
    console.log(value);
}

for(let character of name){
    console.log(character);
}

console.log("-------------------------------------------------------");

// mapslerde ve setlerde de kullanılır bu for of...

//Mapler - Key(anahtar) -Value(Değer)

let myMap = new Map();
console.log(typeof myMap,myMap);

const key1 = "Mustafa";
const key2 = {a:10,b:20};
const key3 = () => 2;

myMap.set(key1,"String değer");
myMap.set(key2,"Object Literal değer");
myMap.set(key3,"Function değer");

//Get

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap,myMap.size);

const cities = new Map();

cities.set("Ankara",5);
cities.set("İstanbul",15);
cities.set("İzmir",3);


cities.forEach(function (value,key) {
    console.log(key,value);
});

for(let [key,value] of cities){ // Destructing
    console.log(key,value);
}


for (let key of cities.keys()){
    console.log(key);
}

for (let value of cities.values()){
    console.log(value);
}

console.log("-------------------------------------------------------");

//Arraylerden map oluşturmak.

const array = [["key1","value1"],["key2","value2"]];
const lastMap = new Map(array);
console.log(lastMap);

//Maplerden Array Oluşturmak

const array2 = Array.from(cities);
console.log(array2);


