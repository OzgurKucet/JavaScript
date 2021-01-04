
const obj1 = {
    number1:10,
    number2:20
}

const obj2 = {
    number1:30,
    number2:40
}

function addNumbers(number3,number4) {
    console.log(this); //şu anda windowsu gösterdiği için
    console.log(this.number1); // number bir windows ta yok obj1 de var... undefined geldi
    console.log(this.number1 + this.number2 + number3 + number4); // not a number dedi.

}

addNumbers(100,200);

addNumbers.call(obj1,100,200); // istediğimiz obje ile çağırabiliriz fonksyonumuzu...
addNumbers.call(obj2,100,200); // Böylece not a numbers almadık.

addNumbers.apply(obj1,[100,200]); // sadece yazımı farklı call ile aynı.


/*bind kullanımı*/
console.log("------------------------------------------");

function getNumbersTotal(number3,number4) {
    return this.number1 + this.number2 + number3 + number4;
}

const copyFunc1 = getNumbersTotal.bind(obj1); // Böylece kopya bir fonksyon ürettik obj1 üstü olan
const copyFunc2 = getNumbersTotal.bind(obj2); // Böylece kopya bir fonksyon ürettik obj2 üstü olan

console.log(copyFunc1);


console.log(copyFunc1(100,200));
console.log(copyFunc2(100,200));

/*---------------------------------------------------------*/
console.log("------------------------------------------");

// Kalıtım = Inheritance


function Person(name,age) {
    this.name = name;
    this.age = age;
}

Person.prototype.showInfos = function () {
    console.log("İsim "+this.name + "Yaş: " + this.age);
}

//const person =new Person("Mustafa",25);
//console.log(person);

function Employee(name,age,salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    Person.call(this,name,age); // Bu işlemi yapınca yukarıya gönderir Inheritance için önemli....
}

Employee.prototype = Object.create(Person.prototype);

const emp = new Employee("Ozgur",21,4000);

console.log(emp);
emp.showInfos(); // Personun içinde olduğu için showInfos çalıştırılır.

Employee.prototype.showInfos = function () {
    console.log("İsim "+this.name + "Yaş: " + this.age +"Maas: "+this.salary);
}

emp.showInfos(); // showInfos metodu overwrite olduğu için önce kendi prototipindeki showInfosu buldu ve yazdı yoksa sadece isim ve yaş olan ı yazardı.