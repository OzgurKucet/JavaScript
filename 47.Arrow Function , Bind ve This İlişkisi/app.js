const person = {

    age:25,
    tellAge : function () {
        console.log(this);// this Personı yanı şuanki objemizi gösteriyor.
        console.log(this.age);
    }.bind(this) // böylece window sa bağladık windowsta age olmadığı için age undefined geldi

    // buradaki this window u gösterir.


}


person.tellAge();


const person2 = { // arrow function kullanarak yaptık bind ile yaptığımız aynı sonucu verdi oda artık windowsu gösteriyor.

    age:25,

    tellAge: () => {
        console.log(this);
        console.log(this.age);
    }

}

person2.tellAge();