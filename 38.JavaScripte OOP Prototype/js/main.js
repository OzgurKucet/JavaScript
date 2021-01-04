


function Employee(name,age) {
    this.name = name;
    this.age = age;
    this.showInfos = function () {
        console.log("İsim: " + this.name + "Yaş: " + this.age);
    }
}

const emp1 = new Employee("Ozgur",21);
const emp2 = new Employee("Mustafa",25);

 /*----------------------------------------------------------------------*/

// Artık prototype de bu sayede bellekte sadece bir kopyası oluşacak.
// Önce kendi objesine bakar sonra bir yukarı objeye bakar orada o fonksyon varsa kullanır en yukarda object objesi var her obje ona bağlı.
// Mesela bir toStringi objemizde bir elemanda kullanırken kendi prototype ında olmadığı için yukarı bakaren son object e gelir ve ordaki toStringi bulur ve kullanırız.

function Employee2(name,age) {
    this.name = name;
    this.age = age;
}

Employee2.prototype.showInfos = function () {
    console.log("İsim: " + this.name + " Yaş: "+this.age);
}


const emp3 = new Employee("Ozgur",21);
const emp4 = new Employee("Mustafa",25);

console.log(emp1);

//--------------------------------------------------------------------------

//Object.Create Metodu

const obj = {
    test1:function () {
        console.log("Test1");
    },
    test2:function () {
        console.log("Test2");
    }
}

//console.log(obj);

const emp = Object.create(obj);  // obj nin bir üstü oldu artık emp nin proto su obj yi gösteriyor oldu.


console.log(emp);
emp.name = "Ozgur";
emp.age = 25;
console.log(emp);

/*----------------------------------------------------------------------*/
console.log("------------------------------------------------");

function Person() {

}

Person.prototype.test1 = function () {
    console.log("Test1");
}

Person.prototype.test2 = function () {
    console.log("Test2");
}
const person = new Person();

console.log(person);


function Employee5(name,age) {
    this.name = name;
    this.age = age;
}

Employee5.prototype = Object.create(Person.prototype); // Employee5 in prototypı artık Personın prototype ı oldu yanı artık ordan test1 ve test2 yi alabiliriz.

const kişi = new Employee5("kişi",22);

console.log(kişi);





