console.log(this); // Window gelir çünkü şu anda bulunduğumuz scope en genel objemiz

//Başka bir obje:

const  emp1 = { // Object Literal
    name:"mustafa",
    age:25
}

emp1.salary = 4000;

console.log(emp1);


function Employee(name,age,salary) { // Yapıcı Fonksiyon - Constructor
    this.name = name;
    this.age = age;
    this.salary = salary;
    console.log(this); // o anki objeyi verir.
}

const emp2 = new Employee("ozgur",25,3000);
const emp3 = new Employee("mustafa",29,4000);

console.log(emp2);