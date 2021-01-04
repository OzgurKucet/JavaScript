function Storage() {

}
Storage.prototype.addFilmToStorage = function (newFilm) {
    let films = this.getFilmsFromStorage();
    films.push(newFilm);
    localStorage.setItem("films",JSON.stringify(films));

}

Storage.prototype.getFilmsFromStorage = function () { // Films i storage dan almak.
    let films;

    if(localStorage.getItem("films") === null){
        films = [];
    }

    else {
        films = JSON.parse(localStorage.getItem("films"));
    }

    return films;
}

Storage.prototype.deleteFilmFromStorage = function(filmTitle,FilmY,FilmUrl) {
    let films = this.getFilmsFromStorage();

    console.log(FilmUrl);
    films.forEach(function (film,index) {
        if (film.title === filmTitle && film.director === FilmY){
            films.splice(index,1); // indexteki elemanı siler.
        }
    });
    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.clearAllFilmsFromStorage = function () {
    localStorage.removeItem("films");
}