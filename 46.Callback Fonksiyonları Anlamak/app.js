
/*
function process1(callback) {
    setTimeout(function () {
        console.log("Process1");
        callback();
    },3000);
}

function process2() {
    setTimeout(function () {
        console.log("Process2");
    },2000);
}


process1(process2); // callback olarak çalıştı bölece asenkron olamaktan kurtuldu.
//process2();

*/


/*
const langs = ["Python","Java","C++"];


function addLang(lang) {
    setTimeout(function () {
        langs.push(lang);
        console.log("Eklendi.");
    },2000);
}



function getAllLangs() {
    setTimeout(function () {
        langs.forEach(function (lang) {
            console.log(lang);
        });
    },1000);
}


addLang("JavaScript"); // böyle yaparsak asenkron old için yazdıktan sonra ekleniyor.
getAllLangs();

 */

const langs = ["Python","Java","C++"];


function addLang(lang,callback) {
    setTimeout(function () {
        langs.push(lang);
        console.log("Eklendi.");
        callback();
    },2000);
}



function getAllLangs() {
    setTimeout(function () {
        langs.forEach(function (lang) {
            console.log(lang);
        });
    },1000);
}


addLang("JavaScript",getAllLangs); // böyle yaparsak asenkron old için yazdıktan sonra ekleniyor.
