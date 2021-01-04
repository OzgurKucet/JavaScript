
// sessionStorage SAyfayı kapattığımızda silinir database gibi depolama yapmamıza yarar tarayıcının kendinde bulunur.

console.log(window.sessionStorage);

const  add = document.querySelector("#add1");
const  del = document.querySelector("#delete");
const  clear = document.querySelector("#clear");

const  addkey = document.querySelector("#addkey");
const  addvalue = document.querySelector("#addvalue");
const  deletekey = document.querySelector("#deletekey");

add.addEventListener("click",addItem);
del.addEventListener("click",deleteItem);
clear.addEventListener("click",clearItem);

function addItem(e) {
    sessionStorage.setItem(addkey.value,addvalue.value);
}

function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value);
}

function clearItem(e) {
    sessionStorage.clear();
}


// Local Storage...
/*
localStorage.setItem("hareket","burpee");
localStorage.setItem("tekrar",50); // 50 aslında string olarak kaydedildi..

localStorage.clear();

localStorage.setItem("hareket","burpee");
localStorage.setItem("tekrar",50); // 50 aslında string olarak kaydedildi..

console.log(localStorage.getItem("hareket"));
*/
// Local Storage Array Yazmak.

/*
const todos = ["Todo1","Todo2","Todo3"];

localStorage.setItem("todos",JSON.stringify(todos));
const value = JSON.parse(localStorage.getItem("todos")); // bunuda alırken kullanabiliriz.
console.log(value);
*/
const  add2 = document.querySelector("#add2");
const  clear2 = document.querySelector("#clear2");

const  input2 = document.querySelector("#input2");


add2.addEventListener("click",addTodo);

function addTodo(e) {
    const value = input2.value;
    console.log(value);
    let todos;

    if(localStorage.getItem("todos")===null){
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    todos.push(value);

    localStorage.setItem("todos",JSON.stringify(todos)); // local storage ye kaydetmek.

    e.preventDefault();
}

clear2.addEventListener("click",clearTodo);

function clearTodo(e) {
    localStorage.clear();
}

