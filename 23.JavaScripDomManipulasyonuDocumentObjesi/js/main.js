
let value;
//console.log(this.document);

value = document.all.length;

value = document.all[6];

//console.log(value);
/*
const elements = document.all;//Html Collection

for (let i = 0; i<elements.length;i++){
    console.log(elements[i]);
}
*/

/* Böyle olmuyor altta arraye çevirdim colection old için olmuyormuş...

elements.forEach(function (element) {
    console.log(element);
});
*/

/*
const collections = Array.from(document.all);

collections.forEach(function (collection) {
    console.log(collection);
});
*/

value = document.all[5];
value = document.characterSet;
value = document.location.hostname;

value = document.scripts;
value = document.scripts.length;
value = document.links;
value = document.links[0].getAttribute("class");
value = document.links[0].getAttribute("href");
value = document.links[0].className;
value = document.links[0].classList;


value = document.forms



console.log(value);
