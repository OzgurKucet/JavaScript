const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo"); //input alanı..
const  todoList = document.querySelector(".list-group"); // todolarımızın yazılacağı yer...
const firstCartBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter"); //2.input arama yeri...
const clearButton = document.querySelector("#clear-todos");

eventListeners();

function eventListeners() { //Tüm event listenerları fonksyonda ekledik.
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",loadAllToUI);//sayfamız yüklendiğinde DomContentLoaded bu event ilk olarak oluşuyormuş o yüzden bunu kullandık. Eskiden yazdığımız todoları kaydedicez
    secondCardBody.addEventListener("click",deleteTodo); // Todoyu silmek için yaptık.
    filter.addEventListener("keyup",filterTodos); // Filitrelemek için kullanıcaz todoları.
    clearButton.addEventListener("click",clearAllTodos);
}

function filterTodos(e) {
    //console.log(e.target.value);
    const filtervalue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");//li leri seçtik

    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();

        if (text.indexOf(filtervalue) === -1){ // "murat".indexOf("as") -1 döner "murat".indexOf("mu") = 0döner nerde olduğunu bize söyler bizde bunu kullanıcağız.

            listItem.setAttribute("style","display:none !important");

        }
        else{
            listItem.setAttribute("style","display:block");
        }

    });
}

function clearAllTodos(e) {
    //arayüzden todoları kaldırmak

    if (confirm("Tümünü silmek istediğinizden emin misiniz?")){
        //todoList.innerHTML = ""; // Bunu kullanmadık çünkü yavaş kalıyormuş
        
        while(todoList.firstElementChild != null){
            todoList.removeChild(todoList.firstElementChild);
        }
        localStorage.removeItem("todos");
    }

}

function deleteTodo(e) {
    //console.log(e.target); tıkladığımız elementi veriyor e.target

    if (e.target.className ==="fa fa-remove"){
        e.target.parentElement.parentElement.remove(); // çarpı işaretinin önce bir üstüne çıktık a elementine sonra li ye çıkıp sildik...
        deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
        showAlert("success","Todo Başarıyla silindi");
    }

}

function deleteTodoFromStorage(deletetodo,index) {
    let todos = getTodoFromStorage();
    todos.forEach(function (todo) {
        if (todo === deletetodo){
            todos.splice(index,1); // bu indexten itibaren 1 todo sileceğimizi söyledik. splice arrayden birşeyler silerken kullanıyoruz önemli..
        }
    });

    localStorage.setItem("todos",JSON.stringify(todos));
}

function loadAllToUI() { // İlk Başta storage deki todolar tekrardan getirilir.
    let todos = getTodoFromStorage();
    todos.forEach(function (todo) {
        addTodoToUI(todo);
    });
}

function addTodo(e) {
    const newTodo = todoInput.value.trim(); //trim baştaki ve sondaki boşlukları atar

    if(newTodo === ""){
        showAlert("danger","Lütfen bir todo giriniz.");
    }
    else{
        addTodoToUI(newTodo);
        addTodoStorage(newTodo); // Local Storage a kaydetmek.
        showAlert("success","Todo başarıyla eklendi");
    }

    e.preventDefault();
}


function showAlert(type,message) {
    const alert = document.createElement("div");
    alert.className = `alert alert-${type}`;
    alert.textContent = message
    firstCartBody.appendChild(alert); //böylece toDo olması gereken yere eklendi ama kapanmasını istiyoruz o yüzden.

    setTimeout(function () {

        alert.style.opacity = "0.5";

    },1500);


    setTimeout(function () {
        alert.remove();
    },2500);

}

/*<li class="list-group-item d-flex justify-content-between">
    Todo 1
    <a href = "#" class ="delete-item">
        <i class = "fa fa-remove"></i>
    </a>

  </li>*/

function addTodoToUI(newTodo) { // Burada Dinamik olarak element üretip ekleyecez.

    //Link Item oluşturma
    const listItem = document.createElement("li");
    listItem.className = "list-group-item d-flex justify-content-between";


    //Link oluşturma
    const link = document.createElement("a");
    link.href ="#";
    link.className = "delete-item";
    link.innerHTML = "<i class = 'fa fa-remove'><i/>";


    //Text node eklemek yaptığımız yer..
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    //console.log(listItem);

    //todo liste item i ekleme.

    todoList.appendChild(listItem);

    todoInput.value = ""; // todo listimiz kaydedilince inputtaki yazılar kaldırılır oyüzden yaptık bunu.
}


function addTodoStorage(newTodo) {
    let todos = getTodoFromStorage();

    todos.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

function getTodoFromStorage() {
    let todos;

    if (localStorage.getItem("todos")===null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}



