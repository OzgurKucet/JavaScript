
function getTextFile() { //Text dosyasından veri alırken

    fetch("example.txt")
        .then(response => response.text())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

getTextFile();



function getJsonFile() {// Localdeki bir json file dan verileri almak.
    fetch("example.json")
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
}

getJsonFile();


function getExternalApi() { // asenkron olarak uzaktaki bir rest api dan bilgimizi aldık.
    fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => console.log(data.rates.TRY))
        .catch(err => console.log(err));
}

getExternalApi();