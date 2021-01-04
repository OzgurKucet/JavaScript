
function getData(data) {//Promise Objesi döndüren fonksiyon

    return new Promise(function (resolve,reject) {

        setTimeout(function () {

            if (typeof data === "string"){
                //Olumlu
                resolve(data);
            }
            else{
                //Olumsuz
                reject(new Error("Lütfen String Bir değer giriniz"));
            }

        },2000);

    });

}

getData(12).then(function (response) {
    console.log("Gelen Değer " + response);
}).catch(function (err) {
    console.error(err);
});

//Arrow function ile yazımı:

getData("merhaba")
    .then(response => console.log("Gelen Değer " + response))
    .catch(err => console.error(err));



//-----------------------------------------------------------------------,

function addTwo(number) {
    return new Promise((resolve,reject) => {
       setTimeout(function () {

           if (typeof number === "number"){
                resolve(number+2);
           }
           else {
               reject(new Error("Lütfen bir sayi girin"))
           }
       },3000)

    });
}

addTwo("string")
    .then(response => {
        console.log(response);
        return response + 2;
    }).then(function (response2) {
        console.log(response2);
    })
    .catch(err => console.error(err));

// 1 tane catch kullanabiliriz ama birden çok then kullana biliriz promise chain

