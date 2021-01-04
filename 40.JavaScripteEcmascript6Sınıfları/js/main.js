//Ecmascript Sınıflar Yeni Yazım standartları OOP
//Syntactic Sugar -> daha kolay bir yazım oldu.

/* //  Eski Yöntem:

function Employee(name,age,salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype.showInfos = function () {
    console.log("İsim: "+ this.name + " Yaş: " +this.age + " Maaş: " + this.salary);
}


const emp = new Employee("Ozgur",25,4000);

console.log(emp);

*/

//  Yeni Yöntem aynısının yazımı:

class Employee {
    constructor(name,age,salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }

    showInfos(){ // otomatik olarak prototipine ekliyecek..
        console.log("İsim: "+ this.name + " Yaş: " +this.age + " Maaş: " + this.salary);

    }

}

const emp = new Employee("ozgur",21,4000);
console.log(emp);


// Static metodlar durağan metodlar...

class Matematik {
    cube(x){
        console.log(x*x*x);
    }

    static square(x) {
        console.log(x*x);
    }
}

const math = new Matematik();

console.log(math);

math.cube(3);
Matematik.square(3); // Static olarak tanımladığımız için obje oluşturmaya gerek kalmadı.
//math.square(3); obje üzerinden erişemeyiz sadece klass ismi ile erişilir prototipe fonksiyon yazılmaz.
//Matematik.cube(5); Bunada böyle ulaşılmaz obje üzerinden kullanmaz lazım

/*-------------------------------------------------------------*/
console.log("------------------------------------------------------------");

//  ES6 - Kalıtım - Inheritance

class Person { // Super class BaseClass
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    showInfos(){
        console.log("İsim: "+ this.name + " Yaş: " +this.age);
    }
}

class Employee2 extends Person{ // Derived Class,SubClass,ChildClass
    constructor(name,age,salary) {
        super(name,age);
        //this.name = name;
        //this.age = age;
        this.salary = salary;
    }
    showInfos() { //override
        console.log("İsim: "+ this.name + " Yaş: " +this.age + " Maaş: " + this.salary);

    }
}

const emp2 = new Employee2("Mustafa",25,4000);

console.log(emp2);
emp2.showInfos();