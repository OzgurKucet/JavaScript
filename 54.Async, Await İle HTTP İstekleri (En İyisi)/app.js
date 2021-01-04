class Request {

    async get(url){ //Get Request
        /*
        return new Promise((resolve,reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(err => reject(err))
        })
        */
        // Kod 3 satıra düştü....
        const response = await fetch(url); // Eğer hata olursa reject ile error dönecek.
        const data = await response.json() // Json objesi
        return data;

    }

    async post(url,data){

        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        }); // Response objesi gelicek

        const data1 = await response.json();

        return data1;

    }


    async put(url,data){


        const response = await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })

        const data1 = await response.json();

        return data1;
    }

    async delete(url){

        const response = await fetch(url,{
            method: 'DELETE'
        })

        return "Veri silme işlemi başarılı"; // zaten promis olarak döner...

    }

}


const request = new Request;

request.get("https://jsonplaceholder.typicode.com/albums")
    .then(response => console.log(response))
    .catch(err => console.log(err));


request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"Thriller"})
    .then(response => console.log(response))
    .catch(err => console.log(err));

request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:1,title:"Tarkan"})
    .then(response => console.log(response))
    .catch(err => console.log(err));

request.delete("https://jsonplaceholder.typicode.com/albums/1")
    .then(response => console.log(response))
    .catch(err => console.log(err));

