class Storage {
    static getSearchedUsersFromStorage(){
        // Tüm kullanıcıları al

        let users;

        if (localStorage.getItem("searched")===null){
            users = [];
        }
        else {
            users = JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }

    static addSearchedUserToStorage(username){
        //Kullanıcı ekle

        let users = this.getSearchedUsersFromStorage(); // this zaten storage ı gösteriyor  Storage. derdik.

        //indexOf Bu username in bu dizide olup olmadığını sorguluyoruz. yoksa -1 dönüyor.
        // indexOf bir sayı dönerse birdaha eklemiyoruz -1 dönerse yoktur...

        if (users.indexOf(username) === -1){
            users.push(username);
        }

        localStorage.setItem("searched",JSON.stringify(users));


    }


    static clearAllSearchedUsersFromStorage(){
        //Tüm kullanıcıları sil

        localStorage.removeItem("searched");

    }

}