// Elementleri seçme

const githubForm = document.getElementById("github-form"); //github form input ile buton var
const nameInput = document.getElementById("githubname"); // input alanı
const clearLastUsers = document.getElementById("clear-last-users"); // son arananları temizle butonu
const lastUsers = document.getElementById("last-users"); // son aranılanların yazıldığı yer.
const github = new Github();
const ui = new Ui();

eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}

function getData(e) {

    let userName = nameInput.value.trim();

    if (userName === ""){
        alert("Lütfen geçerli bir kullanıcı adı girin");
    }
    else {
        github.getGithubData(userName)
            .then(response => {
                if (response.user.message === "Not Found"){
                    //Hata mesajı
                    ui.showError("Kullanıcı Bulunamadı");
                }
                else{
                    ui.addSearchedUserToUI(userName);
                    Storage.addSearchedUserToStorage(userName);
                    ui.showUserInfo(response.user);
                    ui.showRepoInfo(response.repo);
                }
            })
            .catch(err => ui.showError(err));
    }
    ui.clearInput();
    e.preventDefault();
}

function clearAllSearched() {
    //Tüm arananları temizle

    if (confirm("Emin misiniz ?")){
        Storage.clearAllSearchedUsersFromStorage();//Storagedan silmek...
        ui.clearAllSearchedFromUi();
    }

}

function getAllSearched() {
    //Arananları storagedan al ui a yükle...

    let users = Storage.getSearchedUsersFromStorage();
    let result = "";
    users.forEach( user => {

        result += `<li class="list-group-item">${user}</li>`

    });

    lastUsers.innerHTML = result;

}

