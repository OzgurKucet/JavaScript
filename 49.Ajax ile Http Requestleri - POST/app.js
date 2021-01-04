
class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    //GET Request

    get(url,callback){
        this.xhr.open("GET",url);
        const temp = this;
        this.xhr.onload = function () {
            if (temp.xhr.status === 200){
                callback(null,temp.xhr.responseText);
            }

            else {
                callback("Herhangi bir hata oluştu",null);
            }

        }
        this.xhr.send();

    }

    post(url,data,callback){

        this.xhr.open("POST",url);
        this.xhr.setRequestHeader("Content-type","application/json"); // Ne göndereceğimizi belirtiyoruz burada json verisi göndericez.

        this.xhr.onload = () => {
            if (this.xhr.status === 201){ // 201 Created İstek başarılı oldu yeni bir kaynak oluşturuldu genellikle post ve put ta kullanılır.
                //Başarılı
                callback(null,this.xhr.responseText);
            }
            else {
                callback("Herhangi bir hata oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data)); // Datayı gönderiryoruz ama string olarak göndermemiz gerekiyormuş.
    }

    put(url,data,callback){

        this.xhr.open("PUT",url);
        this.xhr.setRequestHeader("Content-type","application/json"); // Ne göndereceğimizi belirtiyoruz burada json verisi göndericez.

        this.xhr.onload = () => {
            if (this.xhr.status === 200){ //güncellediğimiz için 200 gelecekmiş
                //Başarılı
                callback(null,this.xhr.responseText);
            }
            else {
                callback("Herhangi bir hata oluştu",null);
            }
        }
        this.xhr.send(JSON.stringify(data)); // Datayı gönderiryoruz ama string olarak göndermemiz gerekiyormuş.

    }

    delete(url,callback){
        this.xhr.open("DELETE",url);
        const temp = this;
        this.xhr.onload = function () {
            if (temp.xhr.status === 200){
                callback(null,temp.xhr.responseText);
            }

            else {
                callback("Herhangi bir hata oluştu",null);
            }

        }
        this.xhr.send();

    }


}

/*
const request = new Request();

const albums = request.get("https://jsonplaceholder.typicode.com/albums/50",function (err,response) {
    if (err === null){
        console.log(response);
    }
    else{
        console.log(err);
    }
});

*/

/*
const request = new Request();

request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Thriller"},function (err,album){

    if (err === null){
        console.log(album);
    }
    else {
        console.log(err);
    }

});

*/

/*
const request = new Request();

request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:143,title:"Merhaba"},function (err,album){

    if (err === null){
        console.log(album);
    }
    else {
        console.log(err);
    }

});
*/

const request = new Request();

const albums = request.delete("https://jsonplaceholder.typicode.com/albums/10",function (err,response) {
    if (err === null){
        console.log(response);
    }
    else{
        console.log(err);
    }
});