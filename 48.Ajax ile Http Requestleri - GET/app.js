
class Request {
    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    //GET Request

    get(url,callback){
        this.xhr.open("GET",url); //Bağlantı açık
        const temp = this; // temp request i gösteriyor şuan.
        this.xhr.onload = function () {
            //console.log(this.xhr); // bu xhr ı gösterir zaten bir daha xhr a ulaşmak isteriz. Hatalı olur.
            if (temp.xhr.status === 200){ // yada this.status dersek zaten xhr ı gösteriyordu.
                callback(null,temp.xhr.responseText); // this.responseText de diyebiliriz.
            }

            else {
                //Hata durumunda
                callback("Herhangi bir hata oluştu",null);
            }

        }//.bind(this) de kullana biliriz sorunumuz için böylece yine requesti gösterir requestten this.xhr.responseText diyerek ulaşabiliriz.
        //Arrow function olarakta yazabiliriz...
        this.xhr.send();

    }

}

const request = new Request();

const albums = request.get("https://jsonplaceholder.typicode.com/albums",function (err,response) {
    if (err === null){
        console.log(response);
    }
    else{
        console.log(err);
    }
});

