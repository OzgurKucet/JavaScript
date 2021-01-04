
const form = document.getElementById("film-form");
const  titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");


// UI Objesini Başlatma

const ui = new UI();

// Storage Objesi Üret

const storage = new Storage();

// Tüm eventleri yükleme

eventListeners();

function eventListeners() {
    form.addEventListener("submit",addFilm);

    document.addEventListener("DOMContentLoaded",function () {//DOMContentLoaded sayfa yüklendiğinde oluyor.Local storage dan bilgilerimizi sayfaya alıcaz.
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e) {
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if (title === "" || director === "" || url === ""){
        ui.displayMessages("Tüm alanları doldurun...","danger");
    }
    else {
        const newFilm = new Film(title,director,url);
        ui.addFilmToUI(newFilm); // Arayüze film ekleme
        storage.addFilmToStorage(newFilm); // Storage'a Eklemek.
        ui.displayMessages("Film Başarıyla Eklendi","success");
    }

    ui.clearInputs(titleElement,urlElement,directorElement); // Eklendikten sonra inputu temizler...
    e.preventDefault();
}


function deleteFilm(e) {

    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        a = e.target.parentElement.previousElementSibling.previousElementSibling.textContent;
        b = e.target.parentElement.previousElementSibling.textContent
        c = e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.src


        storage.deleteFilmFromStorage(a,b,c);

        ui.displayMessages("Silme işlemi başarılı...","success");
        //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.firstChild.src);
    }
}

function clearAllFilms() {
    if (confirm("Emin misiniz?")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
}
