//https://developer.mozilla.org/en-US/docs/Web/HTTP/Status ----- En çok kullanılan hatalar

// Http Status
// 200 : OK
// 403 : Forbidden
// 404 : Not Found
// 505 : Internal Server Error


// 0: request not initialized
// 1: server connection established
// 2: request received
// 3: processing request
// 4: request finished and response is ready

document.getElementById("btn").addEventListener("click",function () {
    //XMLHttpRequest

    const xhr = new XMLHttpRequest()
    //console.log(xhr);

    xhr.onreadystatechange = function(){
        //console.log(this);
        //console.log(this.readyState); // 1,2,3,4 geldi fonksyon 4 kez çalıştı 1 ile bağlantıyı sağladık 2 isteğimiz işleme alındı 3 işlenmeye başladı 4 ilede isteğimiz bitti bize geldi.
        //console.log(this.status); // 1tane 0 3 tane 200 geldi 1.aşamada herhangi bir request göndermediğimiz için 0 yazdı diğer durumlarda o işlemleri gerçekeştirip url miz old için bize ok(200) döndü.

        if (this.status == 200 && this.readyState == 4){
            console.log(this.responseText);
        }
    }

    xhr.onload = function(){ //bu fonksyon sadece responsumuz hazır olduğunda çalışır üstekinin kısaltılmışı.
        console.log(this.readyState); // sadece 4 yazar responsumuz hazır olduğunda çalışır.
        if (this.status == 200){
            console.log(this.responseText);
        }
    }


    xhr.open("GET","examples.txt",true); // true girerek asenkron olması gerektiği söylenir.
    xhr.send()

});