
const cardBody = document.querySelectorAll(".cartdiv")[0];

const  title = document.querySelector("#task-title");

/*
title .addEventListener("click",run); // dblclick iki kez tıklandığında olur.

function run(e) {
    console.log(e.type);
}



title .addEventListener("mousedown",run); // Tıkladığın anda yazar.

function run(e) {
    console.log(e.type);
}


title .addEventListener("mouseup",run); // tıklayıp çektiğinde yazar.

function run(e) {
    console.log(e.type);
}
*/



title .addEventListener("mouseover",run); // mouse u üzerine getirdiğin anda gider..
//mouseout ta çıkınca yazar.
function run(e) {
    console.log(e.type);
}

//mouseenter ve mouseleave de var Bunlar toplu bir body nin elemanlarının toplu biçinde kabul eder ve toplu body den çıkınca yada girince sayılır.
//mouseover ve mouseup toplu bir cardBody gibi bir objede kullandığımızda içindeki her bir elemana geldiğimizde onlar ile çalışır.