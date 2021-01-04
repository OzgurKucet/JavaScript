// Promisleri çok daha rahat kullanmamızı sağlar.


function test1(data){
    return new Promise((resolve, reject) => { //Alttaki gibi yazarak kısaltırız.
        resolve(data);
    })
}

async function test2(data) { // async mutlaka bir promise döndürür new Promise yapar gibi düşünülebilir
    return data;
}

console.log(test1("merhaba1"));
console.log(test2("Merhaba2"));

//test2("deneme").then(response => console.log(response));

//-----------------------------------------------------------------------------------

console.log("----------------------------------------------------");

async function test3(data) { // await sadece async içinde çalışır.
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Bu bir değerdir.");
        },5000);
    })

    let response = await promise; // Burasıda 5 sn bekler ve sonra devam eder. promise i bekler...
    //console.log(response);
    //console.log("naber");

    return response;
}

test3("Merhaba").then(response => console.log(response));


//-----------------------------------------------------------------------------------

console.log("----------------------------------------------------");

async function testData(data) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof data === "string"){
                resolve(data);
            }
            else {
                reject(new Error("Lütfen string bir değer girin"));
            }

        },5000);
    })

    const response = await promise;

    return response;

}

testData(1).then(response => console.log(response))
.catch(err => console.log(err));

//Aslında async ve awaitlerin en iyi kullanım yeri fetch yaparken oluyor.


async function getCurrency(url) { // Promise yapısını kullanmayarak çok daha kısa biçimde hallettik.
    const response = await fetch(url); // Response Object

    const data = await response.json(); // json objesi

    //console.log(data);
    return data;
}

getCurrency("https://api.exchangeratesapi.io/latest")
    .then(response => console.log(response));
